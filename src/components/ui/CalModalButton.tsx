"use client";

import { getCalApi } from "@calcom/embed-react";
import React, { forwardRef, type ComponentProps, type ReactNode, useEffect } from "react";

import { contactData } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface CalModalButtonProps extends ComponentProps<typeof Button> {
    className?: string;
    calLink?: string;
    config?: Record<string, unknown>;
}

const normalizeCalLink = (link: string) =>
    link
        .replace(/^(https?:\/\/)?(www\.)?cal\.com\//, "")
        .replace(/^\/+/, "");

export const CalModalButton = forwardRef<HTMLButtonElement, CalModalButtonProps>(
    (
        {
            children,
            className = "",
            calLink = contactData.calCom,
            config = { layout: "month_view", useSlotsViewOnSmallScreen: true },
            variant = "default",
            size = "default",
            onClick,
            ...props
        },
        ref
    ) => {
        useEffect(() => {
            (async () => {
                const cal = await getCalApi();
                cal("ui", {
                    hideEventTypeDetails: false,
                    layout: "month_view",
                    theme: "dark",
                    styles: { branding: { brandColor: "#ea580c" } },
                });
            })();
        }, []);

        return (
            <Button
                ref={ref}
                data-cal-link={normalizeCalLink(calLink)}
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
    }
);

CalModalButton.displayName = "CalModalButton";
