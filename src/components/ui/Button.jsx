const Button = ({ children, onClick, variant = "solid" }) => {
    if (variant === "bordered") {
        return (
            <div className="inline-block p-[2px] rounded-[1px] bg-transparent border border-[#4595FF] hover:bg-[#4595FF] hover:scale-105 active:scale-100 transition ease-in">
                <button
                    onClick={onClick}
                    className="px-4 py-2 w-full h-full rounded-[100px] font-medium  transition"
                >
                    {children}
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={onClick}
            className="px-4 py-2 rounded-[1px] text-white font-medium bg-gradient-to-r from-[#4595FF] to-[#3B5CFF] hover:opacity-90 transition"
        >
            {children}
        </button>
    );
};

export default Button;
