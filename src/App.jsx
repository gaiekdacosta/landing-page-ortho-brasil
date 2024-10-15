import './index.css'
import WhatsappButton from './components/whatsappButton'

function App() {
  return (
    <>
      <section className='flex justify-around mr-8 ml-8 mt-48'>
        <div className='flex flex-col w-[50%] gap-2'>
          <div className='text-[25px]'>
            <img alt="logo" />
            <p className='font-extrabold leading-7'>
              Transforme sua autoestima com a 
              expertise de uma equipe 
              <span className='text-primary ml-1'>
                especializada em estética
              </span>
            </p>
            <div className='flex flex-col gap-5 mt-2'>
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
            src="https://youtu.be/v0dMmEt98Ro?si=-GHxVhuKCZ6-a3ZKm" 
            allowFullScreen
          />
        </div>
      </section>
    </>
  )
}

export default App
