import { create } from 'zustand';

export type TabType = 'recommendation' | 'recent' | 'following';

interface tabStoreType {
  currentTab: TabType;
  setCurrentTab: (tabType: TabType) => void;
}

export const useTab = create<tabStoreType>((set) => ({
  currentTab: 'recommendation',
  setCurrentTab: (tabType: TabType) => set({ currentTab: tabType }),
}));
