import create from 'zustand';

interface SlimeStore {
  slime: string;
  setSlime: (slime: string) => void;
}

export const useSlimeStore = create<SlimeStore>((set) => ({
  slime: '/main.webp',
  setSlime: (slime) => set({ slime }),
}));