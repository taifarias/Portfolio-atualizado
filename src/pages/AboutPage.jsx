import bgImg2 from '../assets/img/bg2.png'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import ProgressBar from '../components/ProgressBar';



const AboutPage = () => {
    return(
        <div className='body bg-cover h-screen' style={{backgroundImage: `url(${bgImg2})`, fontFamily: 'Nanum Bold'}} >
           
           <h1 className='text-5xl pt-5 pb-6 pl-5 text-green-300'>Sobre mim</h1>


            <div className='flex lg:flex-col justify-center items-center '>             

              <div className='px-5 lg:w-2/3 bg-green-300 rounded-2xl border-2 border-black flex flex-col lg:flex-row lg:px-1' >

                <div className='   lg:w-3/5 lg:px-8' >

                    <h2 className='text-orange-600 p-2 text-2xl lg:py-4 lg:p-0'>
                        Eu sou Desenvolvedora Front-End</h2>
                    <p className='pb-3 lg:pb-8 lg:text-justify lg:pr-8 lg:pt-6'>
                        Meu nome é Tainá, eu tenho 27 anos, sou formada em Direito, mas sempre tive interesse na área de tecnologia e informática. Tive contato com HTML e CSS quando era adolescente, mas de forma muito breve
                    </p>
                    <p className='pb-3 lg:pb-3 lg:text-justify lg:pr-8'>
                        Com uma sólida formação em Direito e uma carreira dedicada à advocacia, desenvolvi habilidades valiosas em análise crítica, resolução de problemas e comunicação eficaz. Recentemente, decidi canalizar minha paixão por tecnologia e design em uma nova direção, fazendo a transição para a área de desenvolvimento front-end.</p>
                </div>


                <div className='ml-5'>
                <h2 className='text-orange-600 text-xl py-4'>Habilidades</h2>
                    
                    <p className='flex pl-10 lg:pl-20 pb-5 space-x-4'>
                        <IoLogoHtml5 size={50} />
                        <IoLogoCss3 size={50} />
                        <IoLogoJavascript size={50} />
                        <IoLogoReact size={50} />
                        <SiTailwindcss size={50} />
                    </p>
                    <div className='px-10 '>
                       
                        <div className='hidden lg:flex lg:flex-col'>
                            <p className='text-sm pb-2'> HTML & CSS: Construção de estruturas web robustas e criação de layouts responsivos. </p>
                            <p className='text-sm pb-2'>JavaScript & TypeScript: Desenvolvimento de funcionalidades dinâmicas e aplicações escaláveis.</p>
                            <p className='text-sm pb-2'>React: Criação de interfaces de usuário interativas e manutenção de estados complexos.</p>
                             <p className='text-sm pb-2'>Bootstrap & Tailwind: Aplicação de frameworks para design responsivo e estilização moderna.</p>
                        </div>
                       
                    </div>

                    

                    <h2 className='text-orange-600 text-xl py-4'>Línguas</h2>                  

                    <div className='text-center pb-3 px-20'>Portugues Nativo
                        <ProgressBar progress={100} />
                    </div>
                    <div className='text-center pb-3 px-20'>Ingles Fluente
                         <ProgressBar progress={90} />
                    </div>
                    <div className='text-center pb-8 px-20'>Alemão Iniciante <
                        ProgressBar progress={35} /></div>

                    
                    
                    
                   


                </div>
                
            </div>  
            </div>
            



        </div>

    )
}


export default AboutPage;