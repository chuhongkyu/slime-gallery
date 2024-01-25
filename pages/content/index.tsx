import { NextPage } from "next";
import Image from "next/image";
import type { ImageProps } from "../../utils/types";
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder";
import cloudinary from "../../utils/cloudinary";

const Content: NextPage = ({ images }: { images: ImageProps }) => {
    return(
        <Image
                alt="Photo-slime"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={images[0].blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[0].public_id}.${images[0].format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            />
    )
}

export default Content;

export async function getStaticProps() {
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(1) // 이 부분을 1로 변경
      .execute();
    let reducedResults: ImageProps[] = [];
  
    let i = 0;
    for (let result of results.resources) {
      reducedResults.push({
        id: i,
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format,
      });
      i++;
    }
  
    const blurImagePromises = results.resources.map((image: ImageProps) => {
      return getBase64ImageUrl(image);
    });
    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
  
    for (let i = 0; i < reducedResults.length; i++) {
      reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
    }
  
    return {
      props: {
        images: reducedResults,
      },
    };
  }
  