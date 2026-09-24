"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function Modal({
    open,
    onClose,
    title,
    children,
}: ModalProps) {
    useEffect(() => {
        if (!open) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#071522]/40 p-4"
            onMouseDown={onClose}
        >
            <div
                className="w-full max-w-lg rounded-xl border border-[#DCE2E8] bg-white shadow-xl"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b border-[#E9EDF1] px-5 py-4">
                    {title && (
                        <h2 className="text-lg font-semibold text-[#17212B]">
                            {title}
                        </h2>
                    )}

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md p-1.5 text-[#7A8794] hover:bg-[#F6F7F9] hover:text-[#17212B]"
                        aria-label="Close modal"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="px-5 py-5">
                    {children}
                </div>
            </div>
        </div>
    );
}