import type { LoginCredentials, RegisterData, RegisterCompleteData, AuthResponse, User } from '../types/authTypes'

const MOCK_USER: User = {
    id: '1',
    email: 'usuario@educatoon.com',
    name: 'Usuário Teste',
    phone: '(11) 99999-9999',
    role: 'aluno',
    createdAt: new Date().toISOString(),
}

export const authService = {
    login: async (credentials: LoginCredentials): Promise<AuthResponse> => {

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    user: { ...MOCK_USER, email: credentials.email },
                    accessToken: 'mock-token-123',
                    refreshToken: 'mock-refresh-token-456',
                })
            }, 500)
        })
    },

    register: async (data: RegisterData): Promise<{ userId: string }> => {

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ userId: '1' })
            }, 500)
        })
    },

    registerComplete: async (userId: string, data: RegisterCompleteData): Promise<AuthResponse> => {

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    user: { ...MOCK_USER, role: data.role, name: data.name },
                    accessToken: 'mock-token-123',
                    refreshToken: 'mock-refresh-token-456',
                })
            }, 500)
        })
    },

    logout: async (): Promise<void> => {

        return new Promise((resolve) => {
            setTimeout(() => resolve(), 200)
        })
    },

    getCurrentUser: async (): Promise<User> => {

        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_USER), 300)
        })
    },
}