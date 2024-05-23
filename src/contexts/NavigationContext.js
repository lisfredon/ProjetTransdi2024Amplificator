import React, { createContext, useContext, useState, useEffect } from "react";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
    const [currentPage, setCurrentPage] = useState("accueil");

    const navigateTo = (page) => {
        setCurrentPage(page);
        // Ajoute la page à l'historique de navigation
        window.history.pushState({ page }, '', `/${page}`);
    };

    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state && event.state.page) {
                setCurrentPage(event.state.page);
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    return (
        <NavigationContext.Provider value={{ currentPage, navigateTo}}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    return useContext(NavigationContext);
}