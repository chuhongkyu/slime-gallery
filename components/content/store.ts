import { create }from 'zustand';

interface SlimeStore {
  imageUrl: string;
  setImageUrl: (url: string) => void;
}

export type ImageType = {
  size: string;
  color: string;
};

type ImageAnalysisStore = {
  image: ImageType;
  setImageAnalysis: (type: ImageType) => void;
};

export const useSlimeStore = create<SlimeStore>((set) => ({
  imageUrl: '/fire-slime.png',
  setImageUrl: (url) => set({ imageUrl: url }),
}));

export const useImageAnalysisStore = create<ImageAnalysisStore>((set) => ({
  image: {
    size: "small",
    color: "fire"
  },
  setImageAnalysis: (type) => set({ image : type })
}));