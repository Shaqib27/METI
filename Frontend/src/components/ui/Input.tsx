import React from "react";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function Input({
    label,
    error,
    className = "",
    id,
    ...props
}: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="mb-2 block text-sm font-medium text-[#17212B]"
                >
                    {label}
                </label>
            )}

            <input
                id={id}
                className={`w-full rounded-lg border border-[#C5CED8] bg-white px-3 py-2.5 text-sm text-[#17212B] placeholder:text-[#7A8794] outline-none transition focus:border-[#163A5F] focus:ring-3 focus:ring-[#163A5F]/10 ${className}`}
                {...props}
            />

            {error && (
                <p className="mt-1.5 text-sm text-[#B42318]">
                    {error}
                </p>
            )}
        </div>
    );
}