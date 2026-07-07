import { Link } from "react-router-dom";
import { useModal } from "../../context/ModalContext";

const ActionButton = ({
    children,
    to = "#",
    available = true,
    title = "Coming Soon",
    description = "This feature is currently under development.",
    className = "",
}) => {
    const { openModal } = useModal();

    const handleClick = (e) => {
        if (!available) {
            e.preventDefault();

            openModal({
                title,
                description,
            });
        }
    };

    return (
        <Link
            to={available ? to : "#"}
            onClick={handleClick}
            className={className}
        >
            {children}
        </Link>
    );
};

export default ActionButton;