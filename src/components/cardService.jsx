const CardService = ({ img, title }) => {
    return (
        <>
            <div className='flex flex-col items-center shadow-2xl'>
                <img
                    src={img}
                    className='border-[2px] rounded-lg border-primary h-[450px] w-80'
                    alt='imagem procedimento'
                />

            </div>
        </>
    );
}

export default CardService;