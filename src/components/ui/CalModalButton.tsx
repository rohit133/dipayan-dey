"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface CalModalButtonProps {
    children: ReactNode;
    className?: string;
    calLink?: string;
    config?: any;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    onClick?: () => void;
    [key: string]: any; // Allow other props
}

export const CalModalButton = ({
    children,
    className = "",
    calLink = "rohit-sharma-2qyjpz/secret",
    config = { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
    variant = "default",
    size = "default",
    onClick,
    ...props
}: CalModalButtonProps) => {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "secret" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <Button
            data-cal-namespace="secret"
            data-cal-link={calLink}
            data-cal-config={JSON.stringify(config)}
            variant={variant}
            size={size}
            className={className}
            onClick={onClick}
            {...props}
        >
            {children}
        </Button>
    );
};
