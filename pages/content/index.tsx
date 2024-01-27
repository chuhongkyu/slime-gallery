import { NextPage } from "next";
import Image from "next/image";
import type { ImageProps } from "../../utils/types";
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder";
import cloudinary from "../../utils/cloudinary";
import dynamic from "next/dynamic";
import { motion } from "framer-motion"

const Scene = dynamic(() => import('../../components/content/Scene'), {ssr: false})

const Content: NextPage = ({ images }: { images: ImageProps }) => {
    return(
        <motion.main 
          className="w-full h-screen" 
          initial={{ backgroundColor: "rgb(0,0,0)"}} 
          animate={{ backgroundColor: "rgb(255,255,255)", transition:{ delay: 0.5, ease: "easeInOut" }}}>
            <Scene img={'/fire-slime.png'} />
            {/* <Scene img={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[0].public_id}.${images[0].format}`} /> */}
            <motion.div animate={{scale: [1,1,0.8,0.6,0.4,0.2,0.2,0.2,0], transition: {duration: 1.5, ease: "linear"}}} className="w-full h-screen fixed top-0 left-0 flex justify-center">
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
            </motion.div>
        </motion.main>
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
  