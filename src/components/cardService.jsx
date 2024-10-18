import medal from '../../public/medalha.png'

const CardService = ({ img, title }) => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    <img
                        src={img}
                        className='border-[2px] shadow-md rounded-lg border-primary h-[450px] w-80'
                        alt='imagem procedimento'
                    />
                    {title === 'LENTES' && 
                        <>
                            <img
                                src={medal}
                                className='absolute top-0 right-0 h-[60px] w-[60px] m-2'
                                alt='medalha'
                            />
                            <p className='absolute top-16 right-0'>MAIS PROCURADO</p>
                        </>
                    }
                </div>
                <h4 className="text-primary text-[17px] font-medium">{title.toUpperCase()}</h4>
            </div>
        </>
    );
}

export default CardService;