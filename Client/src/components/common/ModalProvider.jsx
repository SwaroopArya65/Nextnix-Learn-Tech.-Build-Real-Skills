import ComingSoonModal from "./ComingSoonModal";
import { useModal } from "../../context/ModalContext";

const ModalProvider = ({ children }) => {
    const { modal, closeModal } = useModal();

    return (
        <>
            {children}

            <ComingSoonModal
                isOpen={modal.isOpen}
                onClose={closeModal}
                title={modal.title}
                description={modal.description}
            />
        </>
    );
};

export default ModalProvider;