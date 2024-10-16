import './index.css'
import logo from '../public/logo.png'
import WhatsappButton from './components/whatsappButton'

function App() {
  return (
    <>
      <section className='h-[100vh] bg-[url("public/tai9.jpg")] bg-cover bg-center'>
        <div className='flex justify-around h-[100%] items-center'>
          <div className='flex flex-col w-[50%] gap-2 p-4 rounded-lg'>
            <div className='text-[25px] mt-[-5%]'>
              <img 
                className='h-16 w-16'
                src={logo}
                alt="logo" 
              />
              <p className='font-black leading-7'>
                Transforme sua autoestima com a 
                expertise de uma equipe 
                <span className='text-primary ml-1'>
                  especializada em estética
                </span>
              </p>
              <div className='flex flex-col gap-5 mt-2  leading-7'>
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
            <div className='w-[60%]'>
              <WhatsappButton content={'AGENDAR UMA CONSULTA AGORA'} />
            </div>
          </div>
          <div>
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
      <section className='text-center '>
        <h3 
          className='
            font-light
            text-primary 
            text-[22px] 
            tracking-[0.30rem]'
        >
          SERVIÇOS
        </h3>
        <h4 className='text-[25px] font-bold mt-[-0.5%]'>
          Quais os nossos procedimentos {' '}
          <span className='text-primary'>
            mais procurados?
          </span>
        </h4>
        {/* INSERIR CARDS DE PROCEDIMENTOS AQUI */}
      </section>
    </>
  )
}

export default App
