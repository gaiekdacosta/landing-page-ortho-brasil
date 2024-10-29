import medal from '../../public/medalha.png'

const CardService = ({ img, title }) => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    <img
                        src={img}
                        className='shadow-md rounded-lg h-[450px] w-80 mobile:h-[400px]'
                        alt='imagem procedimento'
                    />
                </div>
                <h4 className="text-primary text-[17px] font-bold">{title.toUpperCase()}</h4>
                <div className='flex w-80 rounded-lg bg-primary p-3 m-3 mt-1 text-white'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Asperiores voluptas perspiciatis!
                    </p>
                </div>
            </div>
        </>
    );
}

export default CardService;