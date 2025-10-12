const Button = ({ children, onClick, variant = "solid" }) => {
    if (variant === "bordered") {
        return (
            <button
                onClick={onClick}
                className="px-6 py-2 h-full rounded-sm font-medium transition
                   border border-[#4595FF] active:scale-100
                   hover:bg-gradient-to-r hover:from-[#4595FF] hover:to-[#3B5CFF] hover:scale-105 hover:text-white"
            >
                {children}
            </button>
        );
    }

    if (variant === "solid") {
        return (
            <button
                onClick={onClick}
                className="px-6 py-2 w-full h-full rounded-sm font-medium text-white
                   bg-gradient-to-r from-[#4595FF] to-[#3B5CFF] 
                   bg-[length:200%_100%] bg-left
                   transition-all duration-500 ease-in-out
                   hover:bg-right hover:scale-105"
            >
                {children}
            </button>
        );
    }

    // Default solid button
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 rounded-sm text-white font-medium 
                 bg-gradient-to-r from-[#4595FF] to-[#3B5CFF] 
                 transition transform hover:scale-105 active:scale-100
                 bg-[length:200%_100%] bg-left hover:bg-right duration-500 ease-in-out"
        >
            {children}
        </button>
    );
};

export default Button;
