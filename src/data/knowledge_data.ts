export type Topic = {
  id: string;
  translationKey: string; // Key for title/desc in LanguageContext
  phase: 'launch' | 'gear' | 'build' | 'expedition';
  // Removed x/y, added Bento Grid props
  colSpan?: number; // 1 or 2
  rowSpan?: number; // 1 or 2
  className?: string; // Additional classes for specific styling
};

export const knowledgeData: Topic[] = [
  // --- PHASE 1: Launch ---
  { id: 'mindset', translationKey: 'topic.mindset', phase: 'launch', colSpan: 2, rowSpan: 1 },
  { id: 'hardware', translationKey: 'topic.hardware', phase: 'launch', colSpan: 1, rowSpan: 1 },
  { id: 'network', translationKey: 'topic.network', phase: 'launch', colSpan: 1, rowSpan: 1 },

  // --- PHASE 2: Gear ---
  { id: 'tools', translationKey: 'topic.tools', phase: 'gear', colSpan: 1, rowSpan: 2 },
  { id: 'tech_landscape', translationKey: 'topic.tech_landscape', phase: 'gear', colSpan: 1, rowSpan: 1 },


  // --- PHASE 3: Build ---
  { id: 'nextjs', translationKey: 'topic.nextjs', phase: 'build', colSpan: 2, rowSpan: 1 },
  { id: 'serverless', translationKey: 'topic.serverless', phase: 'build', colSpan: 1, rowSpan: 1 },

  // --- PHASE 4: Expedition ---
  { id: 'docker', translationKey: 'topic.docker', phase: 'expedition', colSpan: 1, rowSpan: 2 },
  { id: 'remote', translationKey: 'topic.remote', phase: 'expedition', colSpan: 1, rowSpan: 1 },
  { id: 'cicd', translationKey: 'topic.cicd', phase: 'expedition', colSpan: 1, rowSpan: 1 },
  { id: 'vpn_guide', translationKey: 'topic.vpn_guide', phase: 'expedition', colSpan: 1, rowSpan: 1 },
];

