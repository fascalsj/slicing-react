
interface GreetingsProps {
    header: string;
    greetings: string;
}

const Greetings: React.FC<GreetingsProps> = ({ header, greetings }) => {
    return (
        <div className="h-2/20 flex flex-col w-full max-w-md mx-auto">
            <div className="flex text-[25px]">
                {header}
            </div>
            <div className="flex text-[14px] text-[#999EA1] ">
                {greetings}
            </div>
        </div>
    );
};

export default Greetings;