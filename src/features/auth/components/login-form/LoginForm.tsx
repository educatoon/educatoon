import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SocialButtons } from '../social-buttons/SocialButtons'
import styles from './LoginForm.module.css'

export function LoginForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {

            console.log('Login:', { email, password, rememberMe })
            navigate('/learn')
        } catch (err) {
            setError('Erro ao fazer login. Verifique suas credenciais.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.loginForm}>
            <h1>Entrar no Educatoon</h1>

            <SocialButtons />

            <p className={styles.divider}>Ou entre com o seu e-mail</p>

            {error && <div className={styles.error}>{error}</div>}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className={styles.input}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    className={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <div className={styles.options}>
                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span>Lembrar Senha</span>
                    </label>
                    <Link to="/forgot-password" className={styles.forgotLink}>
                        Esqueci minha senha
                    </Link>
                </div>

                <div className={styles.buttons}>
                    <button
                        type="submit"
                        className={`${styles.btnPrimary} ${isLoading ? styles.loading : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Entrando...' : 'Entrar'}
                    </button>

                    <Link to="/register" className={styles.btnSecondary}>
                        Criar Conta
                    </Link>
                </div>
            </form>
        </div>
    )
}