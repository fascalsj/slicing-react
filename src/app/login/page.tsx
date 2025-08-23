"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";

export default function Home() {

    return (
        <div className="flex flex-col h-screen p-5 font-semibold">
            <div className="h-4/20 flex item-center justify-center">
                <Image
                    src="/img/UIX-Class-Square.svg"
                    alt="Next.js logo"
                    width={0}
                    height={0}
                    style={{ width: "40vw", height: "auto" }}
                    priority
                />
            </div>
            <div className="h-2/20 flex flex-col w-full max-w-md mx-auto">
                <div className="flex text-[25px]">
                    Hi, Wecome Back! 👋
                </div>
                <div className="flex text-[14px] text-[#999EA1] ">
                    Hello again, you’ve been missed!
                </div>
            </div>
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
                {/* Login button */}
                <button className="w-full bg-[#3a0ca3] text-white py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[#2c0897] transition">
                    Login
                </button>

                {/* Divider */}
                <div className="flex items-center w-full my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-3 text-gray-500 text-sm">Or With</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Social Buttons */}
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

            <div className="h-1/20 w-full max-w-md mx-auto  flex flex-col items-center">
                <div className="text-gray-500 text-sm">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-indigo-900 font-semibold hover:underline">
                        Sign Up
                    </a>
                </div>

            </div>

        </div>
    );
}