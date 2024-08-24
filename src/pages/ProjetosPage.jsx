import bgImgFinal from '../assets/img/bgFinal.png'
import Title from '../assets/img/PortifolioT.png'
import ProjetoCard from '../components/ProjetosCard'
import LpImg from '../assets/img/LpImg.png'
import CoffeeImg from '../assets/img/coffeImg.png'
import CepImg from '../assets/img/cepImg.png'
import BlogImg from '../assets/img/blogImg.png'
import portImg from '../assets/img/portImg.png'
import TodoImg from '../assets/img/todoImg.png'

import Carousel from '../components/Carousel.jsx';
//olha a gambiarra da gata
const ProjetosPage = () => {
    const projectComponents = [
        <ProjetoCard
        image={LpImg}
        title="Landing Page"
        paragraph1="A landign page foi construída com HTML e Tailwind CSS, ncorportando JavaScript no desenvolvimento, resultando em uma interface moderna e acessível para diferentes dispositivos."
                    paragraph2="HTML, Tailwind CSS, JavaScript"
        button1Text="GitHub"
        button1Link="https://github.com/taifarias/landing-cantora"
        button2Text="Acessar"
        button2Link="https://taifarias.github.io/landing-cantora/src/"
    />,
    <ProjetoCard
        image={CoffeeImg}
        title="Webpage Coffee Shop"
                    paragraph1="Uma site para uma empresa de delivery de café utilizando Tailwind CSS, com foco em criar uma experiência de usuário intuitiva e visualmente atraente. O design foi otimizado para garantir acessibilidade e uma navegação fluida em diferentes tamanhos de tela"
                    paragraph2="HTML, CSS, Tailwind"
        button1Text="GitHub"
        button1Link="https://github.com/taifarias/coffee-website-tailwind"
        button2Text="Acessar"
    />,
    <ProjetoCard
                    image={CepImg}
                    title="Encontrar CEP (API)"
                    paragraph1="Interface de formulário simulando cadastro de endereço para entrega. Faz chamada de API para autocompletar baseada no CEP, facilitando o preenchimento para os usuários. O design foi estruturado para ser responsivo e intuitivo, garantindo funcionalidade em diferentes dispositivos."
                    paragraph2="HTML,Tailwind CSS, JavaScript"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/apiCEP-js-e-tailwindcss-"
                    button2Text="Acessar"
                    button2Link="https://taifarias.github.io/apiCEP-js-e-tailwindcss-/src/"
                />,
        <ProjetoCard
                    image={TodoImg}
                    title="To Do List"
                    paragraph1="uma aplicação web simples e intuitiva de lista de tarefas, desenvolvida como parte do meu aprendizado contínuo em desenvolvimento web. A aplicação permite que os usuários adicionem, editem, filtrem, pesquisem e marquem tarefas como concluídas."
                    paragraph2="HTML, JavaScript, React"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/toDoLIst"
                    button2Text="Acessar"
                    button2Link="https://taifarias.github.io/toDoLIst/"
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
                    button2Link="https://taifarias.github.io/communa-app/"
                />,
                <ProjetoCard
                    image={portImg}
                    title="Portfólio"
                    paragraph1="Este portfólio foi desenvolvido com React e Tailwind. Fazendo uso de componentes para organização e aplicando design unico para desktop e mobile. Experimente em outros dispositivos!"
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
                    paragraph1="A landign page foi construída com HTML e Tailwind CSS, ncorportando JavaScript no desenvolvimento, resultando em uma interface moderna e acessível para diferentes dispositivos."
                    paragraph2="HTML, Tailwind CSS, JavaScript"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/landing-cantora"
                    button2Text="Acessar"
                    button2Link="https://taifarias.github.io/landing-cantora/src/"
                />
                <ProjetoCard
                    image={CoffeeImg}
                    title="Webpage Coffee Shop"
                    paragraph1="Uma site para uma empresa de delivery de café utilizando Tailwind CSS, com foco em criar uma experiência de usuário intuitiva e visualmente atraente. O design foi otimizado para garantir acessibilidade e uma navegação fluida em diferentes tamanhos de tela"
                    paragraph2="HTML, CSS, Tailwind"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/coffeeshop-v2"
                    button2Text="Acessar"
                    button2Link="https://taifarias.github.io/coffeeshop-v2/"
                />
                <ProjetoCard
                    image={CepImg}
                    title="Encontrar CEP (API)"
                    paragraph1="Interface de formulário simulando cadastro de endereço para entrega. Faz chamada de API para autocompletar baseada no CEP, facilitando o preenchimento para os usuários. O design foi estruturado para ser responsivo e intuitivo, garantindo funcionalidade em diferentes dispositivos."
                    paragraph2="HTML,Tailwind CSS, JavaScript"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/apiCEP-js-e-tailwindcss-"
                    button2Text="Acessar"
                    button2Link="https://taifarias.github.io/apiCEP-js-e-tailwindcss-/src/"
                />
            </div>
                <div className='row2 flex space-x-36 pb-10'>

                <ProjetoCard
                    image={TodoImg}
                    title="To-do List"
                    paragraph1="Este projeto é uma aplicação web simples e intuitiva de lista de tarefas, desenvolvida como parte do meu aprendizado contínuo em desenvolvimento web. A aplicação permite que os usuários adicionem, editem, filtrem, pesquisem e marquem tarefas como concluídas."
                    paragraph2="HTML, CSS, JavaScript"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/toDoLIst"
                    button2Text="Acessar"
                    button2Link="https://taifarias.github.io/toDoLIst/"
                />
                <ProjetoCard
                    image={BlogImg}
                    title="Blog com perfil"
                    paragraph1="Uma rede social ficticia, com formulario de cadastro e login para criação de perfil para postagem.
                     Utilizando chamada de APIs REST para a simulação de usuários e post, assim com Context API para gerenciamento de autenticação entre as páginas "
                    paragraph2="HTML, Tailwind CSS, JavaScript, React"
                    button1Text="GitHub"
                    button1Link="https://github.com/taifarias/communa-app"
                    button2Text="Acessar"
                    button2Link="https://taifarias.github.io/communa-app/"
                />
                <ProjetoCard
                    image={portImg}
                    title="Portfólio"
                    paragraph1="Este portfólio foi desenvolvido com React e Tailwind. Fazendo uso de componentes para organização e aplicando design unico para desktop e mobile. Experimente em outros dispositivos!"
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