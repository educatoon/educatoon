import styles from "./SocialButton.module.css";

interface Props {
    icon: string;
    alt: string;
    onClick?: () => void;
}

export function SocialButton({ icon, alt, onClick }: Props) {
    return (
        <button className={styles.button} onClick={onClick}>
            <img src={icon} alt={alt} />
        </button>
    );
}