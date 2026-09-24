import React from "react";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "outline"
    | "danger"
    | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
        primary:
            "bg-[#0B1F33] text-white hover:bg-[#071522] focus-visible:outline-[#163A5F]",

        secondary:
            "bg-white text-[#17212B] border border-[#C5CED8] hover:bg-[#F6F7F9] focus-visible:outline-[#163A5F]",

        outline:
            "bg-transparent text-[#0B1F33] border border-[#C5CED8] hover:bg-[#F6F7F9] focus-visible:outline-[#163A5F]",

        danger:
            "bg-[#B42318] text-white hover:bg-[#8F1D14] focus-visible:outline-[#B42318]",

        ghost:
            "bg-transparent text-[#526170] hover:bg-[#F2F0EB] hover:text-[#17212B] focus-visible:outline-[#163A5F]",
    };

    const sizes = {
        sm: "h-9 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-sm rounded-lg",
        lg: "h-12 px-6 text-base rounded-lg",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}