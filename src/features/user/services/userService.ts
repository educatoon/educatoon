import type { UserProfile, UpdateUserData } from '../types/userTypes'

const MOCK_USER: UserProfile = {
    id: '1',
    name: 'Usuário Teste',
    email: 'usuario@educatoon.com',
    phone: '(11) 99999-9999',
    role: 'responsavel',
    schoolName: 'Escola Exemplo',
    city: 'São Paulo',
    state: 'SP',
    schoolType: 'Particular',
}

export const userService = {
    getProfile: async (): Promise<UserProfile> => {

        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_USER), 300)
        })
    },

    updateProfile: async (data: UpdateUserData): Promise<UserProfile> => {

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ ...MOCK_USER, ...data })
            }, 500)
        })
    },
}