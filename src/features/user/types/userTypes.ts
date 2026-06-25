export interface UserProfile {
    id: string
    name: string
    email: string
    phone: string
    role: 'aluno' | 'escola' | 'responsavel'
    schoolName?: string
    city?: string
    state?: string
    schoolType?: string
}

export interface UpdateUserData {
    name?: string
    email?: string
    phone?: string
    password?: string
    schoolName?: string
    city?: string
    state?: string
    schoolType?: string
}