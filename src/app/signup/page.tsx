"use client";

import { FaGithub } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import Logo from "../common/logo";
import Greetings from "../common/greeting";
import Footer from "../common/footer";

export default function Home() {

    return (
        <div className="flex flex-col h-screen p-5 font-semibold">
            <Logo logoWidth="w-[40vw]" heightObject="h-4/20"></Logo>
            <Greetings header="Create an account" greetings="Connect with your friends today!" ></Greetings>
            <div className="h-6/20 flex flex-col">
                <form>
                    <div className="w-full max-w-md mx-auto">
                        <div className='py-[5px]'>
                            <label className="block text-sm text-[#0A0A48]">
                                Email
                            </label>
                            <input
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="py-[5px]">
                            <label className="block text-sm text-[#0A0A48] mb-1">
                                Phone Number
                            </label>
                            <div className="flex border border-gray-300 rounded-md overflow-hidden w-full max-w-md">
                                <span className="bg-gray-100 px-3 py-2 text-sm text-gray-700 select-none flex items-center">
                                    +62
                                </span>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    required
                                    className="flex-grow px-3 py-2 text-sm outline-none"
                                />
                            </div>
                        </div>
                        <div className='py-[5px]'>
                            <label className="block text-sm text-[#0A0A48]">
                                Password
                            </label>
                            <input
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="h-7/20 flex flex-col w-full max-w-md mx-auto">
                <button className="w-full bg-[#3a0ca3] text-white py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[#2c0897] transition">
                    Signup
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
            <Footer footerStatement="Already have an account?" action="Login" actionUrl="/login" ></Footer>
        </div>
    );
}