import bgImgFinal from '../assets/img/bgFinal.png'
import Title from '../assets/img/PortifolioT.png'
import ProjetoCard from '../components/ProjetosCard'
import LpImg from '../assets/img/LpImg.png'
import CoffeeImg from '../assets/img/coffeImg.png'
import CepImg from '../assets/img/cepImg.png'
import BlogImg from '../assets/img/blogImg.png'
import portImg from '../assets/img/portImg.png'

import Carousel from '../components/Carousel.jsx';

const ProjetosPage = () => {
    const projectComponents = [
        <ProjetoCard
        image={LpImg}
        title="Landing Page"
        paragraph1="O site foi construído com HTML e Tailwind CSS, oferecendo uma interface moderna e acessível para diferentes dispositivos. lém disso, inclui um carrossel de imagens dinâmico com transições suaves, proporcionando uma experiência visual atraente.."
        paragraph2="HTML, CSS, Tailwind"
        button1Text="GitHub"
        button1Link="https://github.com/taifarias/landing-cantora"
        button2Text="Acessar"
        button2Link=""
    />,
    <ProjetoCard
        image={CoffeeImg}
        title="Webpage Coffee Shop"
        paragraph1="Uma site para uma empresa de delivery de café utilizando Tailwind CSS, com foco em criar uma experiência de usuário intuitiva e visualmente atraente. O design foi otimizado para garantir acessibilidade e uma navegação fluida em diferentes tamanhos de tel"
        paragraph2="HTML, CSS, Tailwind"
        button1Text="GitHub"
        button1Link="https://github.com/taifarias/coffee-website-tailwind"
        button2Text="Acessar"
    />,
    <ProjetoCard
        image={CepImg}
        title="Encontrar CEP (API)"
        paragraph1="Interface de formulário para cadastro de endereço utilizando Tailwind CSS. O formulário possui uma funcionalidade de autocompletar baseada no CEP, facilitando o preenchimento para os usuários. O design foi estruturado para ser responsivo e intuitivo, garantindo uma experiência agradável em diferentes dispositivos."
        paragraph2="HTML,Tailwind CSS, JavaScript"
        button1Text="GitHub"
        button1Link="https://github.com/taifarias/apiCEP-js-e-tailwindcss-"
        button2Text="Acessar"
    />,
        <ProjetoCard
                    image={BlogImg}
                    title="Blog com perfil"
                    paragraph1="Uma rede social ficticia, com formulario de cadastro e login para criação de perfil para postagem.
                     Utilizando chamada de APIs REST para a simulação de usuários e post, assim com Context API para gerenciamento de autenticação entre as páginas "
                    paragraph2="HTML, Tailwind CSS, JavaScript, React"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/communa-app"
                    button2Text="Acessar"
                />,
                <ProjetoCard
                    image={portImg}
                    title="Portfólio"
                    paragraph1="Este portfólio foi desenvolvido com React e Tailwind. Fazendo uso de componentes para organização e aplicando design unico para desktop e mobile."
                    paragraph2="HTML, Tailwind CSS, JavaScript, React"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/Portfolio-atualizado"
                    button2Text="Topo"
                    button2Link="#home"
                />

    ];
    




    return(
        <div className='body bg-cover h-full' style={{backgroundImage: `url(${bgImgFinal})`, fontFamily: 'Nanum Bold'}} >

            <h1 className='text-5xl pt-5 pb-6 pl-5 text-green-300'>Projetos</h1>
            <div id='sem-carrosel'>

            <section className='hidden lg:flex flex-col justify-center items-center'>
            <div className='row1 flex space-x-36 pb-16'>
                <ProjetoCard
                    image={LpImg}
                    title="Landing Page"
                    paragraph1="O site foi construído com HTML e Tailwind CSS, oferecendo uma interface moderna e acessível para diferentes dispositivos. lém disso, inclui um carrossel de imagens dinâmico com transições suaves, proporcionando uma experiência visual atraente.."
                    paragraph2="HTML, CSS, Tailwind"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/landing-cantora"
                    button2Text="Acessar"
                    button2Link=""
                />
                <ProjetoCard
                    image={CoffeeImg}
                    title="Webpage Coffee Shop"
                    paragraph1="Uma site para uma empresa de delivery de café utilizando Tailwind CSS, com foco em criar uma experiência de usuário intuitiva e visualmente atraente. O design foi otimizado para garantir acessibilidade e uma navegação fluida em diferentes tamanhos de tel"
                    paragraph2="HTML, CSS, Tailwind"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/coffee-website-tailwind"
                    button2Text="Acessar"
                />
                <ProjetoCard
                    image={CepImg}
                    title="Encontrar CEP (API)"
                    paragraph1="Interface de formulário para cadastro de endereço utilizando Tailwind CSS. O formulário possui uma funcionalidade de autocompletar baseada no CEP, facilitando o preenchimento para os usuários. O design foi estruturado para ser responsivo e intuitivo, garantindo uma experiência agradável em diferentes dispositivos."
                    paragraph2="HTML,Tailwind CSS, JavaScript"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/apiCEP-js-e-tailwindcss-"
                    button2Text="Acessar"
                />
            </div>
                <div className='row2 flex space-x-36 pb-10'>

                <ProjetoCard
                    image={BlogImg}
                    title="Blog com perfil"
                    paragraph1="Uma rede social ficticia, com formulario de cadastro e login para criação de perfil para postagem.
                     Utilizando chamada de APIs REST para a simulação de usuários e post, assim com Context API para gerenciamento de autenticação entre as páginas "
                    paragraph2="HTML, Tailwind CSS, JavaScript, React"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/communa-app"
                    button2Text="Acessar"
                />
                <ProjetoCard
                    image={portImg}
                    title="Portfólio"
                    paragraph1="Este portfólio foi desenvolvido com React e Tailwind. Fazendo uso de componentes para organização e aplicando design unico para desktop e mobile."
                    paragraph2="HTML, Tailwind CSS, JavaScript, React"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/Portfolio-atualizado"
                    button2Text="Topo"
                    button2Link="#home"
                />

                </div>


               
                
   
           </section>
            </div>

            <div id='com-carrosel' className='lg:hidden'>
                
                <Carousel components={projectComponents} />
  
            </div>



        </div>

    )
}

export default ProjetosPage;