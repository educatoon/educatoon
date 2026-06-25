import { Outlet } from 'react-router-dom'
import { Navbar } from '../../navigation/navbar/public/NavbarPublic'
import { Footer } from '../../navigation/footer/Footer'

export function PublicLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}