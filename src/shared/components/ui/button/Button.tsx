import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";
type IconPosition = "left" | "right";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    icon?: ReactNode;
    iconPosition?: IconPosition;
}

export function Button({
    variant = "primary",
    icon,
    iconPosition = "left",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const hasText = !!children;

    return (
        <button
            className={`
        ${styles.button}
        ${styles[variant]}
        ${!hasText ? styles.iconOnly : ""}
        ${className}
      `}
            {...props}
        >
            {icon && iconPosition === "left" && (
                <span className={styles.icon}>{icon}</span>
            )}

            {hasText && <span className={styles.text}>{children}</span>}

            {icon && iconPosition === "right" && (
                <span className={styles.icon}>{icon}</span>
            )}
        </button>
    );
}