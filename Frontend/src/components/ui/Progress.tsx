interface ProgressProps {
    value: number;
    className?: string;
}

export default function Progress({
    value,
    className = "",
}: ProgressProps) {
    const safeValue = Math.min(100, Math.max(0, value));

    return (
        <div
            className={`h-2 w-full overflow-hidden rounded-full bg-[#E9EDF1] ${className}`}
        >
            <div
                className="h-full rounded-full bg-[#0B1F33] transition-all duration-300"
                style={{ width: `${safeValue}%` }}
            />
        </div>
    );
}