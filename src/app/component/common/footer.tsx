interface FooterProps {
    footerStatement: string;
    action: string;
    actionUrl: string;
}

const Footer: React.FC<FooterProps> = ({ footerStatement, action, actionUrl }) => {
    return (
        <div className={["w-full", "max-w-md", "mx-auto", "py-2", "flex", "justify-center"].join(" ")}>
            <p className={["text-sm", "text-gray-500", "text-center"].join(" ")}>
                {footerStatement}{" "}
                <a
                    href={actionUrl}
                    className={["text-indigo-700", "font-semibold", "hover:underline", "focus:outline-none",
                        "focus:ring-2", "focus:ring-indigo-400"].join(" ")}
                >
                    {action}
                </a>
            </p>
        </div>
    );
};

export default Footer;
