import { useState, useCallback, useEffect } from 'react'
import { authService } from '../services/authService'
import type { LoginCredentials, RegisterData, RegisterCompleteData, User, AuthState } from '../types/authTypes'

export function useAuth() {
    const [state, setState] = useState<AuthState>({
        user: null,
        isAuthenticated: false,
        isLoading: true,
        error: null,
    })

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('accessToken')
            if (token) {
                try {
                    const user = await authService.getCurrentUser()
                    setState({
                        user,
                        isAuthenticated: true,
                        isLoading: false,
                        error: null,
                    })
                } catch {
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('refreshToken')
                    setState(prev => ({ ...prev, isLoading: false }))
                }
            } else {
                setState(prev => ({ ...prev, isLoading: false }))
            }
        }

        loadUser()
    }, [])

    const login = useCallback(async (credentials: LoginCredentials) => {
        setState(prev => ({ ...prev, isLoading: true, error: null }))
        try {
            const response = await authService.login(credentials)
            localStorage.setItem('accessToken', response.accessToken)
            if (response.refreshToken) {
                localStorage.setItem('refreshToken', response.refreshToken)
            }
            setState({
                user: response.user,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            })
            return response.user
        } catch (error) {
            setState(prev => ({
                ...prev,
                isLoading: false,
                error: 'Erro ao fazer login. Verifique suas credenciais.',
            }))
            throw error
        }
    }, [])

    const register = useCallback(async (data: RegisterData) => {
        setState(prev => ({ ...prev, isLoading: true, error: null }))
        try {
            const response = await authService.register(data)
            return response.userId
        } catch (error) {
            setState(prev => ({
                ...prev,
                isLoading: false,
                error: 'Erro ao criar conta. Tente novamente.',
            }))
            throw error
        }
    }, [])

    const registerComplete = useCallback(async (userId: string, data: RegisterCompleteData) => {
        setState(prev => ({ ...prev, isLoading: true, error: null }))
        try {
            const response = await authService.registerComplete(userId, data)
            localStorage.setItem('accessToken', response.accessToken)
            if (response.refreshToken) {
                localStorage.setItem('refreshToken', response.refreshToken)
            }
            setState({
                user: response.user,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            })
            return response.user
        } catch (error) {
            setState(prev => ({
                ...prev,
                isLoading: false,
                error: 'Erro ao completar cadastro.',
            }))
            throw error
        }
    }, [])

    const logout = useCallback(async () => {
        setState(prev => ({ ...prev, isLoading: true }))
        try {
            await authService.logout()
        } finally {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            setState({
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: null,
            })
        }
    }, [])

    return {
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        error: state.error,
        login,
        register,
        registerComplete,
        logout,
    }
}