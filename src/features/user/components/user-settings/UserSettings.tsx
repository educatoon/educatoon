import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import styles from './UserSettings.module.css'

export function UserSettings() {
    const navigate = useNavigate()
    const { profile, isLoading, updateProfile } = useUser()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        city: '',
        state: '',
        schoolType: '',
    })
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (profile) {
            setFormData({
                name: profile.name || '',
                email: profile.email || '',
                phone: profile.phone || '',
                schoolName: profile.schoolName || '',
                city: profile.city || '',
                state: profile.state || '',
                schoolType: profile.schoolType || '',
            })
        }
    }, [profile])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        if (name === 'password') {
            setPassword(value)
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const data: any = { ...formData }
            if (password) {
                data.password = password
            }
            await updateProfile(data)
            alert('Perfil atualizado com sucesso!')
        } catch {
            alert('Erro ao atualizar perfil')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCancel = () => {
        navigate('/learn')
    }

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <p>Carregando perfil...</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Altere sua conta</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Nome"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        className={styles.input}
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        className={styles.input}
                        placeholder="Nova Senha"
                        value={password}
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="phone"
                        className={styles.input}
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <select
                        name="schoolType"
                        className={styles.select}
                        value={formData.schoolType}
                        onChange={handleChange}
                    >
                        <option value="">Tipo de Escola</option>
                        <option value="publica">Pública</option>
                        <option value="particular">Particular</option>
                    </select>

                    <input
                        type="text"
                        name="schoolName"
                        className={styles.input}
                        placeholder="Nome da Escola"
                        value={formData.schoolName}
                        onChange={handleChange}
                    />

                    <div className={styles.row}>
                        <input
                            type="text"
                            name="city"
                            className={styles.input}
                            placeholder="Cidade"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="state"
                            className={styles.input}
                            placeholder="Estado"
                            value={formData.state}
                            onChange={handleChange}
                        />
                    </div>

                    <select
                        name="role"
                        className={styles.select}
                        value={profile?.role || ''}
                        disabled
                    >
                        <option value="aluno">Aluno</option>
                        <option value="escola">Escola</option>
                        <option value="responsavel">Pai ou Responsável</option>
                    </select>

                    <div className={styles.buttons}>
                        <button
                            type="submit"
                            className={styles.btnSave}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Salvando...' : 'Salvar'}
                        </button>
                        <button
                            type="button"
                            className={styles.btnCancel}
                            onClick={handleCancel}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}