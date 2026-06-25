import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './RegisterForm.module.css'

interface RegisterFormProps {
    onSubmit?: (data: { email: string; password: string; phone: string }) => void
}

export function RegisterForm({ onSubmit }: RegisterFormProps) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (password !== confirmPassword) {
            setError('As senhas não coincidem')
            return
        }

        if (password.length < 6) {
            setError('A senha deve ter no mínimo 6 caracteres')
            return
        }

        setIsLoading(true)

        try {
            if (onSubmit) {
                onSubmit({ email, password, phone })
            } else {

                console.log('Register:', { email, password, phone })
                navigate('/register/type')
            }
        } catch (err) {
            setError('Erro ao criar conta. Tente novamente.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.registerForm}>
            <h1>Seja nosso parceiro!</h1>

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
                    minLength={6}
                />

                <input
                    type="password"
                    className={styles.input}
                    placeholder="Confirmar Senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                />

                <input
                    type="tel"
                    className={styles.input}
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button
                    type="submit"
                    className={`${styles.btnPrimary} ${isLoading ? styles.loading : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Criando conta...' : 'Crie uma conta'}
                </button>
            </form>
        </div>
    )
}