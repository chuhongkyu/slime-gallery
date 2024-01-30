import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSlimeStore } from '../content/store';
import { useRouter } from 'next/router';

const SlimeCarousel = () => {
    const router = useRouter()
    const { setImageUrl } = useSlimeStore();
    const slimes = [
        {
            imgSrc: '/fire-slime.png',
        },
        {
            imgSrc: '/king-slime.png',
        },
        {
            imgSrc: '/ninza.png',
        },
        {
            imgSrc: '/police.png',
        },
        {
            imgSrc: '/cherry.png',
        }
    ]

    const onClick = (data) => {
        setImageUrl(data)
        router.push('/content')
    }
    
    return(
        <div>
            <h5 className="text-lg text-white py-10">You can also use slime that is already made</h5>
            <Swiper slidesPerView={3.2}>
                {slimes.map((slime, index) => {
                    return(
                        <SwiperSlide 
                            onClick={()=> onClick(slime.imgSrc)}
                            key={index + "Slime_KEY"} className="border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-slate-100">
                            <img src={slime.imgSrc} alt="alt"/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
        
    )
}

export default SlimeCarousel;