import './index.css'
import logo from '../public/logo.png'
import WhatsappButton from './components/whatsappButton'
import CardService from './components/cardService'
import Footer from './components/footer'
import fachada from '../public/fachada.png'
import { GiPin } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useState } from 'react'

function App() {
  const images = [fachada, logo];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section className='h-[100vh] bg-[url("public/tai9.jpg")] bg-cover bg-center'>
        <div className='flex justify-around h-[100%] items-center mobile:flex-col'>
          <div className='flex flex-col w-[50%] gap-2 p-4 rounded-lg mobile:w-full'>
            <div className='text-[25px]  mobile:text-[20px]'>
              <img className='h-16 w-16' src={logo} alt="logo" />
              <p className='font-black leading-7 mobile:leading-6'>
                Transforme sua autoestima com a 
                expertise de uma equipe 
                <span className='text-primary ml-1'>
                  especializada em estética
                </span>
              </p>
              <div className='flex flex-col gap-5 mt-2 leading-7 mobile:leading-6 mobile:text-[19px]'>
                <p>
                  Oferecemos um serviço Premium que vai além do sorriso, 
                  focando na harmonia e funcionalidade dos seus dentes. 
                </p>
                <p>
                  Sinta-se confiante em todas as ocasiões e experimente a 
                  excelência em cada detalhe do seu tratamento.
                </p>
              </div>
            </div>
            <div className='w-[55%] mobile:w-full'>
              <WhatsappButton content={'AGENDAR UMA CONSULTA AGORA'} />
            </div>
          </div>
          <div className='mobile:flex mobile:p-4 mobile:justify-center mobile:w-full'>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/v0dMmEt98Ro" 
              allowFullScreen
            />
          </div>
        </div>
      </section>
      {/* SERVIÇOS */}
      <section className='flex flex-col items-center text-center'>
        <h3 className='text-primary text-[20px] mt-2 tracking-[0.30rem]'>SERVIÇOS</h3>
        <h4 className='text-[28px] font-bold mt-[-0.5%] mobile:leading-7'>
          Quais os nossos procedimentos {' '}
          <span className='text-primary'>
            mais procurados?
          </span>
        </h4>
        <div className='flex w-full mt-2 justify-around items-center mobile:flex-col'>
          <CardService 
            img='../public/lentes.jpg'
            title={"PREENCHIMENTO"}
          />
          <CardService 
            img='../public/lentes-tree.jpg'
            title={"LENTES"}
          />
          <CardService 
            img='../public/lentes-four.jpg'
            title={"CLAREAMENTO"}
          />
        </div>
        <div className='mt-5 w-96 mobile:w-80'>
          <WhatsappButton 
            content={"AGENDAR UM DOS PROCEDIMENTOS"} 
          />
        </div>
      </section>
      {/*CASOS DE SUCESSO*/}
      <section className='flex flex-col items-center text-center'>
        <h3 className='text-primary text-[20px] mt-2 tracking-[0.30rem]'>CASOS DE SUCESSO</h3>
        <h4 className='text-[28px] font-bold mt-[-0.5%] mobile:leading-7'>
          Conheça alguns dos nossos trabalhos 
          que <span className='text-primary'>transformam sorrisos</span>
        </h4>
        <div className='flex justify-around'>

        </div>
      </section>
      {/*QUEM SOMOS NÓS*/}
      <section className='flex flex-col items-center text-center'>
        <h3 className='text-primary text-[20px] mt-2 tracking-[0.30rem]'>QUEM SOMOS NÓS</h3>
        <h4 className='text-[28px] font-bold mt-[-0.5%] whitespace-nowrap mobile:whitespace-normal mobile:leading-7'>
          Um pouco sobre a historia da ortho brasil 
          as nossas {''}
          <span className='text-primary inline-flex items-center'>
            localizações <GiPin className='text-[38px]' />
          </span>
        </h4>
        <div className='flex w-full justify-around mt-8 mobile:flex-col mobile:justify-center mobile:mt-3'>
          <div className='flex flex-col items-center'>
            <div className='flex items-center gap-3 mobile:gap-0'>
              <button className='text-primary font-extrabold text-[25px]' onClick={handlePrev}>
                <IoIosArrowBack className='text-[45px]' />
              </button>
                <img 
                  src={images[currentImageIndex]} 
                  className='rounded-full border-2 border-primary h-[380px] w-[380px] mobile:h-[280px] mobile:w-[280px]'
                  alt="local" 
                />
              <button className='text-primary font-extrabold text-[25px]' onClick={handleNext}>
                <IoIosArrowForward className='text-[45px]' />
              </button>
            </div>
            <p className='font-medium mt-1'>432 R. DA ASSUNÇÃO</p>
          </div>
          <div className='flex flex-col items-center text-left w-[580px] mt-5 mobile:w-full'>
            <p className='text-[18px] font-medium border-l-2 mb-5 border-primary pl-4 mobile:w-[95vw]'>
              Oferecemos um serviço Premium que vai além do sorriso, 
              focando na harmonia e funcionalidade dos seus dentes. 
              <br /><br />
              Sinta-se confiante em todas as ocasiões e 
              experimente a excelência em cada detalhe do seu tratamento.
              <br /><br />
              Oferecemos um serviço Premium que vai além do sorriso, 
              focando na harmonia e funcionalidade dos seus dentes. 
              Sinta-se confiante em todas as ocasiões e experimente a 
              excelência em cada detalhe do seu tratamento.
            </p>
            <div className=''>
              <WhatsappButton 
                content={"ESCOLHER A UNIDADE MAIS PROXIMA"} 
              />
            </div>
          </div>
        </div>
      </section>
      {/* DEPOIMENTOS */}
      <section className='flex flex-col items-center text-center'>
        <h3 className='text-primary text-[20px] mt-2 tracking-[0.30rem]'>DEPOIMENTOS</h3>
        <h4 className='text-[28px] font-bold mt-[-0.5%] mobile:leading-7'>
          O que pensam nossos <span className='text-primary'>clientes</span> {' '}
          sobre os <span className='text-primary'>procedimentos</span>
        </h4>
        <div className='flex justify-around mobile:flex mobile:flex-col'>
          <img 
            src=""
            className='h-80 w-48'
            alt="print depoimento"
          />
          <img 
            src=""
            className='h-80 w-48'
            alt="print depoimento"
          />
                    <img 
            src=""
            className='h-80 w-48'
            alt="print depoimento"
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
