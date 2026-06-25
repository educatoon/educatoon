import styles from './SocialButtons.module.css'
import googleIcon from '../../../../assets/Icons/google-icon.svg'
import facebookIcon from '../../../../assets/Icons/facebook-icon.svg'
import linkedinIcon from '../../../../assets/Icons/linkedin-icon.svg'

interface SocialButtonsProps {
    onSocialLogin?: (provider: string) => void
}

export function SocialButtons({ onSocialLogin }: SocialButtonsProps) {
    const handleClick = (provider: string) => {
        if (onSocialLogin) {
            onSocialLogin(provider)
        } else {

            window.location.href = `${import.meta.env.VITE_API_URL}/auth/${provider}`
        }
    }

    return (
        <div className={styles.socialButtons}>
            <button
                className={styles.socialBtn}
                onClick={() => handleClick('google')}
                aria-label="Entrar com Google"
            >
                <img src={googleIcon} alt="Google" />
            </button>
            <button
                className={styles.socialBtn}
                onClick={() => handleClick('facebook')}
                aria-label="Entrar com Facebook"
            >
                <img src={facebookIcon} alt="Facebook" />
            </button>
            <button
                className={styles.socialBtn}
                onClick={() => handleClick('linkedin')}
                aria-label="Entrar com LinkedIn"
            >
                <img src={linkedinIcon} alt="LinkedIn" />
            </button>
        </div>
    )
}