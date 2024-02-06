  import { CiSearch } from "react-icons/ci";
  import Logo from '../assets/logotipo.png'
  import { useState, useEffect } from "react";
  import ContactModal from "./ContactModal"
  import {slide as Menu} from 'react-burger-menu';

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

      var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '22px'
        },
        bmBurgerBars: {
          background: '#ffffff'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'absolute',
          right: '0',
          top: '0',
          height: '100vh'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
      return(
      <>
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
        
          <nav className={`w-full p-4 fixed z-10 flex justify-between items-center text-white ${isTop ? 'bg-transparent' : 'bg-black'}`}>
              <img src={Logo} alt="Logotipo da empresa" width={120} height={80} />
              <div className="searchSection flex-grow mr-12 max-sm:hidden">
                  <div className="p-2 max-w-[30rem] my-0 ml-64 mr-6 border-white border rounded-lg flex justify-between">
                      <span className="text-lightGray">Pesquisar no site</span>
                      <CiSearch className="text-2xl" />
                  </div>
              </div>
              {/* <div className="linksSection flex md:gap-3"> */}
              <Menu styles={ styles }>
                <span className="menu-item cursor-pointer hover:border-b border-cyan">O que fazemos</span>
                <span className="menu-item cursor-pointer hover:border-b border-cyan">Quem somos</span>
                <br />
                <span className="menu-item cursor-pointer text-cyan hover:border-b border-white" onClick={() => setShowModal(true)}>Contato</span>
              </Menu>
              {/* </div> */}
          </nav>
        </>
      )
  }
  export default Navbar;