import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Header = () => {
    const pathname = usePathname()
    const [menu, setMenu] = useState(false)

    const onClick = () => {
        setMenu((prev) => !prev)
    }

    return(
        <header className="fixed w-full z-50">
            <nav className={`bg-white border-gray-200 px-4 lg:px-6 py-2.5 ${pathname.indexOf("content") != -1 ? "opacity-5 hover:opacity-100": "opacity-100" }`}>
                <div className="relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href={"/"} className="flex items-center">
                        <Image src={"/fire-slime.png"} width={25} height={25} className="mr-3" alt="logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">slime stickers</span>
                    </Link>
                    <div onClick={onClick} className="flex items-center lg:order-2">
                        <button type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button> 
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Home</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/detail" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Play</Link>
                            </li>
                        </ul>
                    </div>
                    {/* 모바일 */}
                    {menu &&
                        <div className="absolute w-24 z-10 top-full right-0 bg-slate-500 rounded-lg md:hidden">
                            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Home</Link>
                                </li>
                                <li>
                                    <Link href="/gallery" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Gallery</Link>
                                </li>
                                <li>
                                    <Link href="/detail" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Play</Link>
                                </li>
                            </ul>
                        </div>
                        }
                </div>
            </nav>
        </header>
    )
}

export default Header