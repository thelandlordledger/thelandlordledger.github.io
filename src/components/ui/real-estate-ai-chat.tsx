"use client";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
    Building2,
    TrendingUp,
    DollarSign,
    MapPin,
    Calculator,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            // Temporarily shrink to get the right scrollHeight
            textarea.style.height = `${minHeight}px`;

            // Calculate new height
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        // Set initial height
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    // Adjust height on window resize
    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

export function RealEstateAIChat() {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    const handleSubmit = () => {
        if (value.trim()) {
            const query = encodeURIComponent(value.trim());
            window.open(`https://frondex.co?q=${query}`, '_blank');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6 space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-primary font-bold text-foreground">
                    Your AI-Powered Investment Assistant
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Get instant insights on deals, market trends, due diligence, and investment strategies
                </p>
                <p className="text-sm text-muted-foreground">
                    Powered by <a href="https://frondex.co" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">frondex.co</a>
                </p>
            </div>

            <div className="w-full">
                <div className="relative bg-card rounded-xl border border-border shadow-lg">
                    <div className="overflow-y-auto">
                        <Textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything... (opens frondex.co in new tab)"
                            className={cn(
                                "w-full px-4 py-3",
                                "resize-none",
                                "bg-transparent",
                                "border-none",
                                "text-foreground text-sm",
                                "focus:outline-none",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                "placeholder:text-muted-foreground placeholder:text-sm",
                                "min-h-[60px]"
                            )}
                            style={{
                                overflow: "hidden",
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-between p-3 border-t border-border/50">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="group p-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-1"
                            >
                                <Paperclip className="w-4 h-4 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground hidden group-hover:inline transition-opacity">
                                    Attach
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="px-2 py-1 rounded-lg text-sm text-muted-foreground transition-colors border border-dashed border-border hover:border-border/80 hover:bg-muted/50 flex items-center justify-between gap-1"
                            >
                                <PlusIcon className="w-4 h-4" />
                                Context
                            </button>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className={cn(
                                    "px-1.5 py-1.5 rounded-lg text-sm transition-colors border border-border hover:border-border/80 hover:bg-muted/50 flex items-center justify-between gap-1",
                                    value.trim()
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "text-muted-foreground"
                                )}
                            >
                                <ArrowUpIcon
                                    className={cn(
                                        "w-4 h-4",
                                        value.trim()
                                            ? "text-primary-foreground"
                                            : "text-muted-foreground"
                                    )}
                                />
                                <span className="sr-only">Send</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                    <ActionButton
                        icon={<TrendingUp className="w-4 h-4" />}
                        label="Market Analysis"
                        onClick={() => window.open("https://frondex.co?q=" + encodeURIComponent("What are the current real estate market trends?"), '_blank')}
                    />
                    <ActionButton
                        icon={<Building2 className="w-4 h-4" />}
                        label="Deal Sourcing"
                        onClick={() => window.open("https://frondex.co?q=" + encodeURIComponent("How do I find good real estate deals?"), '_blank')}
                    />
                    <ActionButton
                        icon={<TrendingUp className="w-4 h-4" />}
                        label="Portfolio Performance"
                        onClick={() => window.open("https://frondex.co?q=" + encodeURIComponent("How can I analyze my portfolio performance?"), '_blank')}
                    />
                    <ActionButton
                        icon={<DollarSign className="w-4 h-4" />}
                        label="Due Diligence"
                        onClick={() => window.open("https://frondex.co?q=" + encodeURIComponent("What should I include in real estate due diligence?"), '_blank')}
                    />
                    <ActionButton
                        icon={<Calculator className="w-4 h-4" />}
                        label="Valuation Models"
                        onClick={() => window.open("https://frondex.co?q=" + encodeURIComponent("What are the best real estate valuation models?"), '_blank')}
                    />
                </div>
            </div>
        </div>
    );
}

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

function ActionButton({ icon, label, onClick }: ActionButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}