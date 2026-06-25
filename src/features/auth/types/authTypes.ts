export type UserRole = 'aluno' | 'escola' | 'responsavel'

export interface LoginCredentials {
    email: string
    password: string
    rememberMe?: boolean
}

export interface RegisterData {
    email: string
    password: string
    phone: string
}

export interface RegisterCompleteData {
    role: UserRole
    name?: string
    schoolName?: string
    city?: string
    state?: string
    schoolType?: string
}

export interface User {
    id: string
    email: string
    name?: string
    phone?: string
    role: UserRole
    schoolName?: string
    city?: string
    state?: string
    schoolType?: string
    createdAt: string
}

export interface AuthResponse {
    user: User
    accessToken: string
    refreshToken?: string
}

export interface AuthState {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null
}