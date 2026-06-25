import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function ThemeProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    return <>{children}</>;
}

export function AppProvider() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export function useTheme() {
    const [theme, setTheme] = React.useState<'light' | 'dark'>(
        (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light'
    );

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return { theme, toggleTheme };
}