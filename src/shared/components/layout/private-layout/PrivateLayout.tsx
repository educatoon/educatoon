import { Outlet } from 'react-router-dom'

export function PrivateLayout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}