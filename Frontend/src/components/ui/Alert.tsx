import React from "react";

type AlertVariant =
    | "info"
    | "success"
    | "warning"
    | "error";

interface AlertProps {
    children: React.ReactNode;
    variant?: AlertVariant;
    title?: string;
}

export default function Alert({
    children,
    variant = "info",
    title,
}: AlertProps) {
    const variants = {
        info: "border-[#BFD5EA] bg-[#EAF2FB] text-[#2563A6]",
        success: "border-[#B9DED0] bg-[#EAF6F1] text-[#167A5B]",
        warning: "border-[#EAD6A8] bg-[#FFF7E6] text-[#B7791F]",
        error: "border-[#E9BDB9] bg-[#FDECEC] text-[#B42318]",
    };

    return (
        <div
            className={`rounded-lg border px-4 py-3 ${variants[variant]}`}
            role="alert"
        >
            {title && (
                <p className="mb-1 text-sm font-semibold">
                    {title}
                </p>
            )}

            <p className="text-sm">{children}</p>
        </div>
    );
}