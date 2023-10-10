import React, { useState } from 'react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
import Button from '../Button';
import logo from '../../../assets/images/white-logo.png'
import Footer from '../Footer/Footer';

const menu = [
    { name: 'home', link: '/', },
    { name: 'about', link: '/about', },
    { name: 'shop', link: '/shop', },
    { name: 'blog', link: '/blog', },
    { name: 'faq', link: '/faq', },
    { name: 'contact', link: '/contact', },
]

const Header = ({ children, handleAction }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header className='absolute w-full'>
                <nav className="bg-transparent h-20 sticky z-[100] relative">
                    <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-4 lg:px-14">
                        <div className="z-50 xl:w-auto w-full flex justify-between items-center">
                            <Link href="/" className='w-36'>
                                <img src={logo} alt="logo" className='' />
                            </Link>

                            <div className={`text-3xl xl:hidden`} onClick={() => setOpen(!open)}>
                                {open ? (
                                    <XMarkIcon className="w-6 text-white" />
                                ) : (
                                    <Bars3Icon className="w-6 text-white " />
                                )}
                            </div>
                        </div>
                        <ul className="xl:flex hidden items-center gap-4 font-Poppins  text-sm font-normal">
                            {menu.map((val, key) => (
                                <li key={key}>
                                    <Link to={val.link} className="px-3 inline-block uppercase text-white no-underline">
                                        {val.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden xl:block">
                            <div className="flex items-center">
                                <div>
                                    <ShoppingCartIcon className="w-8 mr-3" />
                                </div>
                                <div className="text-white">
                                    <Button id="" type="button" label={"Login"} abc="bg-white rounded-full" handleAction={handleAction}/>
                                </div></div>
                        </div>

                        {/* Mobile nav */}
                        <ul
                            className={`
                        xl:hidden bg-black/75 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                        duration-500 ${open ? "right-0" : "right-[-100%]"}
                        `}
                        >
                            {menu.map((val, key) => (
                                <li key={key}>
                                    <Link to={val.link} className="py-3 px-3 text-white inline-block uppercase no-underline">
                                        {val.name}
                                    </Link>
                                </li>
                            ))}
                            <div className="flex items-center">
                                <div>
                                    <ShoppingCartIcon className="w-8 h-8 mr-3 text-black" />
                                </div>
                                <div className="py-5 text-white">
                                    <Button isBordered id="" type="button" label={"Login"} />
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>
            {children}
        </div>
    )
}

export default Header