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
        <div className={["flex", "flex-col", "h-screen", "p-5", "font-semibold"].join(" ")}>
            <Logo logoWidth="w-[40vw]" heightObject="h-[20%]" />
            <Greetings header="Hi, Wecome Back! 👋" greetings="Hello again, you’ve been missed!" />
            <div className={["h-[30%]", "flex", "flex-col"].join(" ")}>
                <form>
                    <div className={["w-full", "max-w-md", "mx-auto"].join(" ")}>
                        <div className={["py-[5px]"].join(" ")}>
                            <label htmlFor="email" className={["block", "text-sm", "text-[#0A0A48]"].join(" ")}>
                                Email
                            </label>
                            <input
                                id="email"
                                className={[
                                    "mt-1", "block", "w-full", "rounded-md", "px-3", "py-2", "text-sm",
                                    isEmailValid ? "border-gray-300 shadow-sm" : "border-red-500 ring-2 ring-red-400"
                                ].join(" ")}
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className={["py-[5px]"].join(" ")}>
                            <label htmlFor="password" className={["block", "text-sm", "text-[#0A0A48]"].join(" ")}>
                                Password
                            </label>
                            <input
                                id="password"
                                className={["mt-1", "block", "w-full", "rounded-md", "px-3", "py-2", "text-sm",
                                    "border", "border-gray-300", "shadow-sm"].join(" ")}
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className={["py-[5px]", "flex", "items-center", "justify-between"].join(" ")}>
                            <label className={["flex", "items-center", "text-sm", "text-[#0A0A48]"].join(" ")}>
                                <input type="checkbox" className={["mr-2"].join(" ")} />
                                Remember me
                            </label>
                            <Link
                                href="/forgot-password"
                                className={["text-sm", "text-red-600", "font-medium", "hover:underline",
                                    "focus:outline-none", "focus:ring-2", "focus:ring-red-400"].join(" ")}
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className={["h-[35%]", "flex", "flex-col", "w-full", "max-w-md", "mx-auto"].join(" ")}>
                <button className={["w-full", "bg-[#3a0ca3]", "text-white", "py-3", "rounded-lg", "text-lg",
                    "font-medium", "shadow-md", "hover:bg-[#2c0897]", "transition"].join(" ")}>
                    Login
                </button>
                <div className={["flex", "items-center", "w-full", "my-6"].join(" ")}>
                    <div className={["flex-grow", "border-t", "border-gray-300"].join(" ")}></div>
                    <span className={["mx-3", "text-gray-500", "text-sm"].join(" ")}>Or With</span>
                    <div className={["flex-grow", "border-t", "border-gray-300"].join(" ")}></div>
                </div>
                <div className={["flex", "items-center", "justify-between", "space-x-4"].join(" ")}>
                    <button className={["flex", "items-center", "justify-center", "w-50", "h-12", "py-2", "border",
                        "border-gray-300", "rounded-lg", "shadow-sm", "hover:bg-gray-100", "transition"].join(" ")}>
                        <FaGithub className={["mr-2", "text-xl"].join(" ")} />
                        GitHub
                    </button>
                    <button className={["flex", "items-center", "justify-center", "w-50", "h-12", "py-2", "border",
                        "border-gray-300", "rounded-lg", "shadow-sm", "hover:bg-gray-100", "transition"].join(" ")}>
                        <SiGitlab className={["mr-2", "text-xl", "text-orange-600"].join(" ")} />
                        GitLab
                    </button>
                </div>
            </div>
            <Footer footerStatement="Don’t have an account?" action="Sign up" actionUrl="/signup" />
        </div>
    );
}
