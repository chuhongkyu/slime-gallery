import { useEffect, useState } from "react";
import { ImageType, useImageAnalysisStore, useSlimeStore } from "./store";

const analyzeImage = async (imageUrl) => {
    const image = new Image();
    image.src = imageUrl;
  
    return new Promise((resolve, reject) => {
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
  
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, image.width, image.height);
  
        const imageData = context.getImageData(0, 0, image.width, image.height);
        const data = imageData.data;
  
        let transparentPixelCount = 0;


        const colorRanges = {
            //white
            angel: {
                min: [200, 200, 200],
                max: [255, 255, 255],
            },
            //red
            fire: {
                min: [200, 0, 0],
                max: [255, 100, 100],
            },
            //green
            forest: {
                min: [0, 100, 0],
                max: [100, 255, 100],
            },
            //normal
            normal: {
                min: [200, 200, 0],
                max: [255, 255, 100],
            },
            //water
            water: {
                min: [0, 0, 200],
                max: [100, 100, 255],
            },
            //black
            dark: {
                min: [0, 0, 0],
                max: [32, 32, 32],
            },
            //purple
            poison: {
                min: [100, 0, 100],
                max: [200, 100, 200],
            },
        };
  
        const colorCounts: Record<string, number> = {};

        for (let i = 0; i < data.length; i += 4) {
            const rgb = [data[i], data[i + 1], data[i + 2]];
            const alpha = data[i + 3];

            if (alpha === 0) {
                transparentPixelCount++;
            }else{
                for (const color in colorRanges) {
                    const range = colorRanges[color];
                    if (
                        rgb[0] >= range.min[0] &&
                        rgb[0] <= range.max[0] &&
                        rgb[1] >= range.min[1] &&
                        rgb[1] <= range.max[1] &&
                        rgb[2] >= range.min[2] &&
                        rgb[2] <= range.max[2]
                    ) {
                        if (!colorCounts[color]) {
                            colorCounts[color] = 0;
                        }
                            colorCounts[color]++;
                        break;
                    }
                }
            }

           
        }
  
        const totalPixels = image.width * image.height;
        const transparentPercentage = (transparentPixelCount / totalPixels) * 100;
  
        const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
       
        // console.log('sortedColors', colorCounts)
        const mostCommonColor = sortedColors[0][0];
        // console.log('mostCommonColor',mostCommonColor)
        let size = "small";
  
        if (transparentPercentage < 30) {
          size = 'big';
        } else if (transparentPercentage < 60) {
          size = 'medium';
        } else {
          size = 'small';
        }
  
        resolve({
            size: size,
            color: mostCommonColor,
            });
        };
  
        image.onerror = (error) => {
            reject(error);
        };
    });
};
   

export const SlimeAbility = () => {
    const imageUrl = useSlimeStore(state => state.imageUrl);
    const imageAnalysis = useImageAnalysisStore((state) => state.image);
    const { setImageAnalysis } = useImageAnalysisStore();

    useEffect(() => {
        if (imageUrl) {
            analyzeImage(imageUrl)
            .then((result:ImageType) => {
                setImageAnalysis (result);
            })
            .catch((error) => {
                console.error('Error analyzing image:', error);
            });
        }
    }, [imageUrl]);

    if (!imageAnalysis) {
        return null;
    }

    return(
        <div className="ablity-panel p-5 absolute right-1 top-1 w-52 text-white bg-black/25 rounded-lg">
            <div className="mb-1">
                <span><b>Size</b>: {imageAnalysis.size}</span>
            </div>
            <div>
                <span><b>Type</b>: {imageAnalysis.color}</span>
            </div>
        </div>
    )
}

