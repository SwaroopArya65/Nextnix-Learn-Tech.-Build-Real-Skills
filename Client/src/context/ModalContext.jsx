import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState({
        isOpen: false,
        title: "",
        description: "",
    });

    const openModal = ({ title, description }) => {
        setModal({
            isOpen: true,
            title,
            description,
        });
    };

    const closeModal = () => {
        setModal({
            isOpen: false,
            title: "",
            description: "",
        });
    };

    return (
        <ModalContext.Provider
            value={{
                modal,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error(
            "useModal must be used inside ModalProvider."
        );
    }

    return context;
};