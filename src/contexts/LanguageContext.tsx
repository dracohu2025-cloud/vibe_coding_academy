'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'cn';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {

    cn: {
        'hero.title': 'Vibe 编码',
        'hero.subtitle': '新手指南',
        'hero.desc': '成为心流，而不仅仅是代码。',
        'hero.action': '开始旅程',
        'map.title': '知识星图',
        'map.subtitle': '选择节点以访问数据。',
        'phase.launch': '启程',
        'phase.gear': '装备',
        'phase.build': '构建',
        'phase.expedition': '远征',
        'footer.built': '基于 NEXT.JS & VIBE 构建. © 2025',
        'topic.mindset.title': 'Vibe Coding 心法',
        'topic.mindset.desc': '不仅是写代码，更是一种生活方式。',
        'topic.hardware.title': '神兵利器',
        'topic.hardware.desc': '工欲善其事，必先利其器。',
        'topic.network.title': '虫洞穿越',
        'topic.network.desc': '连接世界的桥梁。',
        'topic.tools.title': '全能驾驶舱',
        'topic.tools.desc': '你的战斗机驾驶舱。',
        'topic.nextjs.title': '核心引擎',
        'topic.nextjs.desc': '现代 Web 开发的标准答案。',
        'topic.serverless.title': '云端魔法',
        'topic.serverless.desc': '没有服务器，只有代码。',
        'topic.remote.title': '超距连接',
        'topic.remote.desc': '操作地球另一端的服务器。',
        'topic.docker.title': '时空胶囊',
        'topic.docker.desc': '环境一致性的终极答案。',
        'topic.cicd.title': '自动化流水线',
        'topic.cicd.desc': '让机器人接管重复劳动。',
        'topic.tech_landscape.title': '技术版图',
        'topic.tech_landscape.desc': '主流框架与技术栈一览。',
        'topic.vpn_guide.title': '自建节点',
        'topic.vpn_guide.desc': '在 EC2 上部署你的私人航道。',
    },
    en: {
        'hero.title': 'Vibe Coding',
        'hero.subtitle': 'Rookie Academy',
        'hero.desc': 'Become the flow, not just the code.',
        'hero.action': 'Start Journey',
        'map.title': 'Knowledge Matrix',
        'map.subtitle': 'Select a node to access data.',
        'phase.launch': 'LAUNCH',
        'phase.gear': 'GEAR',
        'phase.build': 'BUILD',
        'phase.expedition': 'EXPEDITION',
        'footer.built': 'BUILT WITH NEXT.JS & VIBE. © 2025',
        'topic.mindset.title': 'Vibe Coding Mindset',
        'topic.mindset.desc': 'It is not just code, it is a lifestyle.',
        'topic.hardware.title': 'Hardware Arsenal',
        'topic.hardware.desc': 'Tool up like a pro.',
        'topic.network.title': 'Wormhole (VPN)',
        'topic.network.desc': 'Bridge to the world.',
        'topic.tools.title': 'The Cockpit',
        'topic.tools.desc': 'Your fighter jet cockpit.',
        'topic.nextjs.title': 'Core Engine',
        'topic.nextjs.desc': 'The standard answer for modern web.',
        'topic.serverless.title': 'Cloud Magic',
        'topic.serverless.desc': 'No servers, just code.',
        'topic.remote.title': 'Hyperlink',
        'topic.remote.desc': 'Connect to the other side of Earth.',
        'topic.docker.title': 'Time Capsule',
        'topic.docker.desc': 'The ultimate answer to consistency.',
        'topic.cicd.title': 'Auto Pipeline',
        'topic.cicd.desc': 'Let robots do the boring work.',
        'topic.tech_landscape.title': 'Tech Landscape',
        'topic.tech_landscape.desc': 'Overview of modern frameworks.',
        'topic.vpn_guide.title': 'Deploy VPN',
        'topic.vpn_guide.desc': 'Build your own EC2 proxy.',
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        return (translations[language] as any)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
