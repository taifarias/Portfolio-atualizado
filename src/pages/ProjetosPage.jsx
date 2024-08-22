import bgImgFinal from '../assets/img/bgFinal.png'
import Title from '../assets/img/PortifolioT.png'
import ProjetoCard from '../components/ProjetosCard'

const ProjetosPage = () => {
    return(
        <div className='body bg-cover h-screen' style={{backgroundImage: `url(${bgImgFinal})`}} >

            <h1 className='text-5xl pt-5 pb-6 pl-5 text-green-300'>Projetos</h1>

           <section className='flex flex-col  justify-center items-center'>
                


                <ProjetoCard
                    image={bgImgFinal}
                    paragraph1="Press Start to begin!"
                    paragraph2="Choose your adventure."
                    button1Text="Start"
                    button2Text="Options"
                />
   
           </section>

        </div>

    )
}

export default ProjetosPage;