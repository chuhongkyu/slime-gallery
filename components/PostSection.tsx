import Image from "next/image"

const PostSection = ({children}) => {
    return(
        <div className="container mx-auto flex flex-wrap py-6">

            <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                <article className="flex flex-col shadow my-4">
                
                    <a href="#" className="hover:opacity-75 border-2 border-white">
                        <Image width={1000} height={500} src="/upload-post.png" alt="Post"/>
                    </a>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">How To Play</a>
                        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">How to Enjoy</a>
                        <p className="text-sm pb-3">
                            By <a href="#" className="font-semibold hover:text-gray-800">Mr.chu</a>, Published on January 10th, 2024
                        </p>
                        <a href="#" className="pb-6">First, upload the slime sticker image. When you click the upload button, the background will be automatically removed from your image. Then, click the go game button. Now, you can view your custom slime sticker character in a 3D scene. Of course, you can also check out the pre-made slime stickers!</a>
                        {/* <a href="#" className="uppercase text-gray-800 hover:text-black"> <i className="fas fa-arrow-right"></i></a> */}
                    </div>
                </article>

                <article className="flex flex-col shadow my-4">
                
                    <a href="#" className="hover:opacity-75 border-">
                        <Image width={1000} height={500} src="/post.png" alt="Post"/>
                    </a>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Prompts from GPTs</a>
                        <p className="text-sm pb-3">
                            By <a href="#" className="font-semibold hover:text-gray-800">Mr.Chu</a>, Published on January 12th, 2020
                        </p>
                        <a href="#" className="pb-6">It is already in use by more than 100 users. <br/>Try using slime stickers in the gpt store! You can meet some really cute characters.</a>
                        <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                {/* <article className="flex flex-col shadow my-4">
                    <a href="#" className="hover:opacity-75">
                        
                    </a>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                        <p  className="text-sm pb-3">
                            By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
                        </p>
                        <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                        <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article> */}

            </section>

            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5">About Us</p>
                    <p className="pb-2">Do you know us who are serious about sticker slime?<br/>
                    It was released as an ios, aos app game in 2021. We look for passionate developers and investors.</p>
                    <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                        chuhongkyu@gmail.com
                    </a>
                </div>

                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5">GPTs</p>
                    <div className="grid grid-cols-3 gap-3">
                        {children}
                    </div>
                    <a href="https://chat.openai.com/g/g-jHGrPEulp-slime-sticker" target="_blank" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                        <i className="fab fa-instagram mr-2"></i> Follow GPTS
                    </a>
                </div>
            </aside>

        </div>
    )
}

export default PostSection