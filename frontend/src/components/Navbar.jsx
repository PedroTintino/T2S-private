  import { CiSearch } from "react-icons/ci";
  import Logo from '../assets/logotipo.png'
  import { useState, useEffect } from "react";
  import ContactModal from "./ContactModal"

  function Navbar(){
      const [isTop, setIsTop] = useState(true);
      const [showModal, setShowModal] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 0) {
            setIsTop(false);
          } else {
            setIsTop(true);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return(
      <>
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
        
          <nav className={`w-full p-4 fixed z-10 flex justify-between items-center text-white ${isTop ? 'bg-transparent' : 'bg-black'}`}>
              <img src={Logo} alt="Logotipo da empresa" width={120} height={80} />
              <div className="searchSection flex-grow">
                  <div className="p-2 max-w-[30rem] my-0 ml-64 mr-6 border-white border rounded-lg flex justify-between">
                      <span className="text-lightGray">Pesquisar no site</span>
                      <CiSearch className="text-2xl" />
                  </div>
              </div>
              <div className="linksSection flex gap-3">
              <span className="cursor-pointer hover:border-b border-cyan">O que fazemos</span>
              <span className="cursor-pointer hover:border-b border-cyan">Quem somos</span>
              <span className="cursor-pointer text-cyan hover:border-b border-white" onClick={() => setShowModal(true)}>Contato</span>
              </div>
          </nav>
        </>
      )
  }
  export default Navbar;