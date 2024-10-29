import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = ({ content }) => {
    const whatsappLink = () => {
        window.open(
            "https://wa.me/5585991752876?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+como+voce+pode+me+ajudar",
            "_blank"
        );
    };

    return ( 
        <button
            onClick={whatsappLink}
            className={`
                flex
                item-center
                text-center
                bg-primary 
                p-2
                font-extrabold
                text-white 
                rounded-md
                shadow-md 
                transition-transform 
                duration-1000
                ease-in-out
                shadow-primary
                hover:bg-[#1E8D92]
            `}
        >
            <FaWhatsapp className="text-[22px]" /> 
            <p className="whitespace-nowrap">{content}</p>
        </button>
    );
}

export default WhatsappButton;