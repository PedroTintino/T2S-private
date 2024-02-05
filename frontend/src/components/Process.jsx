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
      <img src="/visualchart.jpg" alt="Plano de aplicação" width={850} height={600} className="rounded-lg"/>
      </div>
      <p className="text-center text-lightGray py-5 px-12 font-semibold text-xl">Descubra as oportunidades que podem transformar o seu negócio! Ao chegar até aqui, você já conheceu nossa proposta e como podemos agregar valor ao seu dia a dia. Agora, queremos conhecer mais sobre as suas necessidades e desafios específicos.</p>
    </div>
  );
}
export default Process;
