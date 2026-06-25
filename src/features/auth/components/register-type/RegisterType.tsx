import { useNavigate } from 'react-router-dom'
import avatar from '../../../../assets/Icons/avatar.svg'
import styles from './RegisterType.module.css'

interface RegisterTypeProps {
    onSelect?: (type: string) => void
}

export function RegisterType({ onSelect }: RegisterTypeProps) {
    const navigate = useNavigate()

    const handleSelect = (type: string) => {
        if (onSelect) {
            onSelect(type)
        } else {

            console.log('Tipo selecionado:', type)
            navigate('/learn')
        }
    }

    return (
        <div className={`${styles.container}`}>
            <h2>
                Quem está prestes a entrar <br /> nessa jornada conosco?
            </h2>

            <div className={styles.users}>
                <div className={styles.user} onClick={() => handleSelect('aluno')}>
                    <img src={avatar} alt="Aluno" />
                    <p>Sou aluno(a)!</p>
                </div>

                <div className={styles.user} onClick={() => handleSelect('escola')}>
                    <img src={avatar} alt="Escola" />
                    <p>Sou escola!</p>
                </div>

                <div className={styles.user} onClick={() => handleSelect('responsavel')}>
                    <img src={avatar} alt="Responsável" />
                    <p>Sou o responsável!</p>
                </div>
            </div>
        </div>
    )
}