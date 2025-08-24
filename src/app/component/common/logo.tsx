import React from 'react'

interface LogoProps {
    logoWidth: string;
    heightObject: string;
}

const Logo: React.FC<LogoProps> = ({ logoWidth, heightObject }) => {
    return (
        <div className={[heightObject, "flex", "items-center", "justify-center"].join(" ")}>
            <img src="/img/UIX-Class-Square.svg"
                alt="Next.js logo"
                width={0}
                height={0}
                className={[logoWidth, "h-auto"].join(" ")}
            />
        </div>
    );
};

export default Logo;