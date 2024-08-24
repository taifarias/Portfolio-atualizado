import bgImg from '../assets/img/bg.png'
import Title from '../assets/img/PortifolioT.png'
import startButton from '../assets/img/startbutton.png'

const HomePage = () => {
    return(
        <div id='home' className='body bg-cover h-screen bg-bottom' style={{backgroundImage: `url(${bgImg})`}} >
           <section className='flex flex-col h-full justify-center items-center'>
                <img
                className='  xl:w-2/5 '
                src={Title}
                alt="Portfolio" />

                    
                    <a href="#aboutme">
                        <img 
                    className='w-64 absolute -ml-20 mt-28 xl:w-32 transition-transform duration-200 transform hover:scale-110'
                    src={startButton}
                    alt="click START aqui" />
                    </a>

                    
                    
           </section>

        </div>

    )
}

export default HomePage