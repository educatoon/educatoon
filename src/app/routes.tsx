import { createBrowserRouter } from "react-router-dom"
import { PublicLayout } from "@/shared/components/layout/public-layout/PublicLayout"
import { PrivateLayout } from "@/shared/components/layout/private-layout/PrivateLayout"
import { AuthLayout } from "@/shared/components/layout/auth-layout/AuthLayout"
import { HomePage } from "@/features/home/pages/HomePage"
import { LearnPage } from "@/features/learn/pages/LearnPage"
import { ComicListPage } from "@/features/comic/pages/ComicListPage"
import { ComicReaderPage } from "@/features/comic-reader/pages/ComicReaderPage"
import { LoginPage } from "@/features/auth/pages/login-page/LoginPage"
import { RegisterPage } from "@/features/auth/pages/register-page/RegisterPage"
import { RegisterTypePage } from "@/features/auth/pages/register-type-page/RegisterTypePage"
import { UserSettingsPage } from "@/features/user/pages/user-settings/UserSettingsPage"

export const router = createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
            { path: "/", element: <HomePage /> },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
            { path: "/register/type", element: <RegisterTypePage /> },
        ],
    },
    {
        element: <PrivateLayout />,
        children: [
            { path: "/learn", element: <LearnPage /> },
            { path: "/learn/comic/:moduleId", element: <ComicListPage /> },
            { path: "/comic/:comicId", element: <ComicReaderPage /> },
            { path: "/settings", element: <UserSettingsPage /> },
        ],
    },
])