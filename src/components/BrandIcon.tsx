import type { IconType } from "react-icons";
import * as SI from "react-icons/si";
import * as TB from "react-icons/tb";
import { Coffee } from "lucide-react";

const SI_MAP = SI as unknown as Record<string, IconType | undefined>;
const TB_MAP = TB as unknown as Record<string, IconType | undefined>;
const CUSTOM_MAP: Record<string, IconType> = {
    SiJava: Coffee as unknown as IconType,
};

export function findIcon(key: string): IconType | undefined {
    return CUSTOM_MAP[key] ?? SI_MAP[key] ?? TB_MAP[key];
}

export function BrandIcon({ iconKey, size = 16, className }: { iconKey: string; size?: number; className?: string }) {
    const Icon = findIcon(iconKey);
    if (!Icon) return <span className={`inline-block h-1.5 w-1.5 rounded-full bg-current ${className ?? ""}`} />;
    return <Icon size={size} className={className} />;
}