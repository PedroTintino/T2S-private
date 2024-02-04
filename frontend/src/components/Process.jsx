import { GiProcessor } from "react-icons/gi";

function Process() {
  return (
    <div className="mainContainer w-full flex flex-col items-center">
      <div className="benefitsFlag px-3 bg-gradient-to-r from-cyan to-neonBlue text-white rounded-xl flex border items-center">
        <GiProcessor />
        Processo
      </div>
      <h2 className="text-center text-3xl font-semibold mt-2">
        Linha do tempo e metodologia
      </h2>
      <span className="text-lightGray p-2">
        Entenda nosso processo de aplicação e nossos métodos.
      </span>
      <div className="p-5">
      <img src="/visualchart.jpg" alt="Plano de aplicação" width={850} height={700} className="rounded-lg"/>
      </div>
    </div>
  );
}
export default Process;
