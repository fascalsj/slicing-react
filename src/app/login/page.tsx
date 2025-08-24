"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import Logo from "../component/common/logo";
import Greetings from "../component/common/greeting";
import Footer from "../component/common/footer";
import { useEmailValidator } from "../component/validator/emailvalidator";




export default function Home() {
    const { email, isEmailValid, handleEmailChange } = useEmailValidator();
    return (
        <div className="flex flex-col h-screen p-5 font-semibold">
            <Logo logoWidth="w-[40vw]" heightObject="h-4/20"></Logo>
            <Greetings header="Hi, Wecome Back! 👋" greetings="Hello again, you’ve been missed!" ></Greetings>
            <div className="h-6/20 flex flex-col">
                <form>
                    <div className="w-full max-w-md mx-auto">
                        <div className='py-[5px]'>
                            <label className="block text-sm text-[#0A0A48]">
                                Email
                            </label>
                            <input
                                className={[
                                    'mt-1',
                                    'block',
                                    'w-full',
                                    'rounded-md',
                                    'px-3',
                                    'py-2',
                                    'text-sm',
                                    isEmailValid ? 'border-gray-300 shadow-sm' : 'border-red-500 ring-2 ring-red-400'
                                ].join(' ')}
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className='py-[5px]'>
                            <label className="block text-sm text-[#0A0A48]">
                                Password
                            </label>
                            <input
                                className={[
                                    'mt-1',
                                    'block',
                                    'w-full',
                                    'rounded-md',
                                    'px-3',
                                    'py-2',
                                    'text-sm',
                                    'border',
                                    'border-gray-300 shadow-sm'
                                ].join(' ')}
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="py-[5px] flex items-center justify-between">
                            <label className="flex items-center text-sm text-[#0A0A48]">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-[#FB344F] hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="h-7/20 flex flex-col w-full max-w-md mx-auto">
                <button className="w-full bg-[#3a0ca3] text-white py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[#2c0897] transition">
                    Login
                </button>
                <div className="flex items-center w-full my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-3 text-gray-500 text-sm">Or With</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <button className="flex items-center justify-center w-50 h-12 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition">
                        <FaGithub className="mr-2 text-xl" />
                        GitHub
                    </button>
                    <button className="flex items-center justify-center w-50 h-12 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition">
                        <SiGitlab className="mr-2 text-xl text-orange-600" />
                        GitLab
                    </button>
                </div>

            </div>
            <Footer footerStatement="Don’t have an account?" action="Sign up" actionUrl="/signup" ></Footer>
        </div>
    );
}