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
            bg-primary 
            p-2.5
            font-medium 
            text-white 
            rounded-md
            shadow-md 
            w-full
            transition-transform 
            duration-300 
            ease-in-out
            shadow-primary
            hover:bg-[#1E8D92]
            hover:scale-105
            `}
        >
            {content}
        </button>
    );
}

export default WhatsappButton;