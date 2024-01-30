import { create }from 'zustand';

interface SlimeStore {
  imageUrl: string;
  setImageUrl: (url: string) => void;
}

export const useSlimeStore = create<SlimeStore>((set) => ({
  imageUrl: '/fire-slime.png',
  setImageUrl: (url) => set({ imageUrl: url }),
}));
