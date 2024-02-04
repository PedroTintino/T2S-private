import { useSpring, animated } from "@react-spring/web";
import { PiUserFocus } from "react-icons/pi";
import Carousel from "./Carousel";

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
        <Carousel />
    </div>
  );
}
export default OurClients;
