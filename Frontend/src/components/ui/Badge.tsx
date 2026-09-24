import React from "react";

type BadgeVariant =
    | "default"
    | "success"
    | "warning"
    | "error"
    | "info";

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
}

export default function Badge({
    children,
    variant = "default",
}: BadgeProps) {
    const variants = {
        default: "bg-[#F2F0EB] text-[#526170]",
        success: "bg-[#EAF6F1] text-[#167A5B]",
        warning: "bg-[#FFF7E6] text-[#B7791F]",
        error: "bg-[#FDECEC] text-[#B42318]",
        info: "bg-[#EAF2FB] text-[#2563A6]",
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${variants[variant]}`}
        >
            {children}
        </span>
    );
}