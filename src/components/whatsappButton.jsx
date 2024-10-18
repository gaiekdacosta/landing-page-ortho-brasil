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
                justify-center
                gap-1
                bg-primary 
                p-2.5
                font-extrabold
                text-white 
                rounded-md
                shadow-md 
                w-full
                transition-transform 
                duration-1000
                ease-in-out
                shadow-primary
                hover:bg-[#1E8D92]
            `}
        >
            <FaWhatsapp className="text-[22px]" /> {content}
        </button>
    );
}

export default WhatsappButton;