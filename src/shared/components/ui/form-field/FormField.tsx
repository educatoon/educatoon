import type { ReactNode } from "react";
import styles from "./FormField.module.css";

interface Props {
    label?: string;
    children: ReactNode;
}

export function FormField({ label, children }: Props) {
    return (
        <div className={styles.field}>
            {label && <label className={styles.label}>{label}</label>}
            {children}
        </div>
    );
}