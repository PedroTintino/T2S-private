import { useSpring, animated } from "@react-spring/web";
import { PiUserFocus } from "react-icons/pi";
import Carousel from "./Carousel";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function OurClients() {
  const springs = useSpring({
    from: { x: -1000 },
    to: { x:0 },
    config: {
        tension: 90, 
        friction: 30, 
      },
  })

  return (
    <div className="mainContainer w-full flex flex-col items-center">
        <div className="benefitsFlag px-3 bg-gradient-to-r from-cyan to-neonBlue text-white rounded-xl flex border items-center">
          <PiUserFocus />
          Clientes
        </div>
      <h2 className="text-center text-3xl font-semibold mt-2">Conheça alguns de nossos maiores clientes</h2>
      <span className="text-lightGray p-2">Temos a confiança de grandes empresas.</span>
      <span className="flex items-center gap-2 text-lightGray p-2"> <FaAngleDoubleLeft/> Você pode arrastar para os lados <FaAngleDoubleRight/></span>
        <Carousel />
        <p className="text-center text-lightGray py-5 px-12 text-xl">Investir em serviços de Inteligência Artificial (IA) e Machine Learning (ML) oferece uma série de vantagens estratégicas e operacionais para as organizações. Essas tecnologias capacitam empresas a extrair insights valiosos a partir de grandes volumes de dados, otimizando processos e impulsionando a inovação.</p>
    </div>
  );
}
export default OurClients;
