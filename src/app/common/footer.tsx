interface FooterProps {
    footerStatement: string;
    action: string;
    actionUrl: string;
}


const Footer: React.FC<FooterProps> = ({ footerStatement, action, actionUrl }) => {
    return (

        <div className="h-1/20 w-full max-w-md mx-auto  flex flex-col items-center">
            <div className="text-gray-500 text-sm">
                {footerStatement}{" "}
                <a href={actionUrl} className="text-indigo-900 font-semibold hover:underline">
                    {action}
                </a>
            </div>
        </div>
    );
};

export default Footer;