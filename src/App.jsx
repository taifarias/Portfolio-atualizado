
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ProjetosPage from "./pages/ProjetosPage.jsx"
import './assets/fonts.css';
import Navbar from "./components/Navebar.jsx";

function App() {  

  return (
    
      <div>
      <Navbar />
     <HomePage />
     <AboutPage />
     <ProjetosPage />

     </div>

  )
}

export default App
