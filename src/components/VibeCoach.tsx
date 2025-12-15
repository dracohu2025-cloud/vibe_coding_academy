"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export function VibeCoach() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Yo! I'm **Vibe**. Ready to build something crazy cool? Ask me anything about specific coding topics or general direction." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = { role: 'user' as const, content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content }))
                }),
            });

            if (!response.ok) throw new Error(response.statusText);
            if (!response.body) throw new Error('No body');

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const text = decoder.decode(value, { stream: true });
                setMessages(prev => {
                    const newMsgs = [...prev];
                    const lastIndex = newMsgs.length - 1;
                    const lastMsg = newMsgs[lastIndex];
                    newMsgs[lastIndex] = {
                        ...lastMsg,
                        content: lastMsg.content + text
                    };
                    return newMsgs;
                });
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: '**System Error**: Connection lost. The Vibe is too strong.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 left-6 z-50 p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-110 transition-all active:scale-95 group"
                whileHover={{ rotate: 5 }}
            >
                {isOpen ? <X size={18} /> : <Bot size={18} className="group-hover:animate-pulse" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 left-6 z-50 w-[90vw] md:w-[600px] h-[600px] md:h-[80vh] bg-[#0a0a0c]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="font-bold text-white flex items-center gap-2">
                                    Vibe Coach <Sparkles size={14} className="text-pink-400" />
                                </span>
                            </div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Online</span>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                            ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-tr-sm'
                                            : 'bg-white/10 text-gray-200 rounded-tl-sm border border-white/5'
                                            }`}
                                    >
                                        <ReactMarkdown
                                            components={{
                                                p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                                code: ({ node, className, children, ...props }) => {
                                                    const match = /language-(\w+)/.exec(className || '');
                                                    const isInline = !match && !String(children).includes('\n');
                                                    return isInline ? (
                                                        <code className="bg-black/30 px-1 py-0.5 rounded font-mono text-xs text-pink-300 border border-white/10" {...props}>
                                                            {children}
                                                        </code>
                                                    ) : (
                                                        <div className="relative my-2 rounded-lg overflow-hidden border border-white/10 bg-[#0d0d10]">
                                                            <div className="flex items-center justify-between px-3 py-1.5 bg-white/5 border-b border-white/5">
                                                                <span className="text-[10px] uppercase text-gray-500 font-mono">{match?.[1] || 'code'}</span>
                                                            </div>
                                                            <pre className="p-3 overflow-x-auto">
                                                                <code className={`font-mono text-xs text-gray-300 ${className || ''}`} {...props}>
                                                                    {children}
                                                                </code>
                                                            </pre>
                                                        </div>
                                                    );
                                                },
                                                ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-4 mb-2 space-y-1" {...props} />,
                                                ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-4 mb-2 space-y-1" {...props} />,
                                                li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                                pre: ({ node, children, ...props }) => <>{children}</>,
                                            }}
                                        >
                                            {m.content.replace(/^```markdown\n/, '').replace(/^```\n/, '').replace(/\n```$/, '')}
                                        </ReactMarkdown>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 px-4 py-2 rounded-full rounded-tl-sm flex space-x-1">
                                        <div className="w-2 h-2 bg-pink-500/50 rounded-full animate-bounce delay-0" />
                                        <div className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce delay-100" />
                                        <div className="w-2 h-2 bg-blue-500/50 rounded-full animate-bounce delay-200" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/5 bg-black/20">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5 focus-within:border-purple-500/50 transition-colors"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about Vibe Coding..."
                                    className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none px-2 text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="p-2 bg-white/10 rounded-lg text-white hover:bg-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
