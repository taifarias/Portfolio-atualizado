import bgImg from '../assets/img/bg.png'
import Title from '../assets/img/PortifolioT.png'
import startButton from '../assets/img/startbutton.png'

const HomePage = () => {
    return(
        <div className='body bg-cover h-screen' style={{backgroundImage: `url(${bgImg})`}} >
           <section className='flex flex-col h-full justify-center items-center'>
                <img
                className='  xl:w-2/5 '
                src={Title}
                alt="Portfolio" />

                <button>                    
                    <img 
                    className='w-64 absolute -ml-28 mt-36 xl:w-32'
                    src={startButton}
                    alt="click START aqui" />
                    </button>
           </section>

        </div>

    )
}

export default HomePage