import { useState, useEffect, useCallback } from 'react'
import { userService } from '../services/userService'
import type { UserProfile, UpdateUserData } from '../types/userTypes'

export function useUser() {
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadProfile = async () => {
            try {
                setIsLoading(true)
                const data = await userService.getProfile()
                setProfile(data)
                setError(null)
            } catch (err) {
                setError('Erro ao carregar perfil')
            } finally {
                setIsLoading(false)
            }
        }

        loadProfile()
    }, [])

    const updateProfile = useCallback(async (data: UpdateUserData) => {
        try {
            setIsLoading(true)
            const updated = await userService.updateProfile(data)
            setProfile(updated)
            setError(null)
            return updated
        } catch (err) {
            setError('Erro ao atualizar perfil')
            throw err
        } finally {
            setIsLoading(false)
        }
    }, [])

    return {
        profile,
        isLoading,
        error,
        updateProfile,
    }
}