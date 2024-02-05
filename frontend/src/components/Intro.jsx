import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function Intro() {
  return (
    <div class="relative h-screen w-full">
        
      <img
        src="https://images.unsplash.com/photo-1655890954753-f9ec41ce58ae?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-0"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* <div className="w-[45%] absolute right-[26%] top-24 border-t-2  border-white"></div> */}
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-5xl text-white font-bold border-t-2 p-15 md:pt-20">Nossos Serviços:</h1>
        <p class="text-3xl text-white mt-4">
        <Typewriter
          options={{
            strings:"IA e Machine Learning",
            autoStart: true,
          }} 
        />
        </p>
        <p className="border-b-2 border-white pb-16 w-96 flex items-center justify-center b-">
        <Link
          to="Benefits"
          spy={true}
          smooth={true}
          offset={-70} // Ajuste o offset conforme necessário
          duration={500}
        >
        <button type="button" class="text-white mt-3 bg-gradient-to-r from-cyan to-neonBlue hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Conhecer</button>
        </Link>
        </p>
      </div>
      {/* <div className="w-[45%] absolute right-[26%] bottom-10 border-t-2  border-white"></div> */}
    </div>
  );
}
export default Intro;
