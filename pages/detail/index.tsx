import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Detail: NextPage = () => {
    const router = useRouter()
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState('');
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
      setFilename(event.target.files[0].name);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'stickerslime');
          formData.append('folder', 'stickerslime'); 

        try {
          const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            router.push('/')
          } else {
            console.error('이미지 업로드 실패');
          }
        } catch (error) {
          console.error('이미지 업로드 오류:', error);
        }
      };

    return (
      <>
        <Head>
          <title>Slime Sticker Photos</title>
        </Head>
        <main className="mx-auto max-w-[860px] p-4">
            <h1 className="text-lg text-white py-10">Upload Your Slime</h1>
            <div className="absolute z-1 h-screen inset-0 flex items-center justify-center opacity-40">
              <span className="flex items-center justify-center">
                <Image fill src='/main.webp'alt="angel"/>
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <form className="relative z-10 flex flex-col items-center justify-center w-full" onSubmit={handleSubmit}>
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    {file ? 
                    <p className="text-xs text-white py-5">Click Upload Btn</p> :
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 1024x1024px)</p>
                    </div>}
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                </label>
                <p className="text-xs text-white py-5">{filename}</p>
                {file && <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit">Upload</button>}
            </form> 
        </main>
      </>
    );
};

export default Detail