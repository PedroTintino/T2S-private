import { FaRegLightbulb, FaBrain } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
import { GrTechnology, GrDocumentPerformance } from "react-icons/gr";
import { GiStorkDelivery } from "react-icons/gi";
import { PiUserFocus } from "react-icons/pi";

function Benefits() {
  return (
    <div id="Benefits" className="min-h-screen w-full flex flex-col items-center p-10">
        <div className="benefitsFlag px-3 bg-gradient-to-r from-cyan to-neonBlue text-white mt-2 rounded-xl flex border items-center">
          <FaRegLightbulb />
          Benefícios
        </div>
        <h2 className="text-3xl font-semibold p-2">A praticidade e modernidade que só a IA pode te trazer</h2>
        <p className="text-lightGray">Alguns motivos pelos quais você deve optar por este serviço.</p>
        <div className="benefitsGridContainer py-4 px-32 grid grid-cols-3 grid-rows-2 gap-2">
          <div className="flex flex-col bg-aliceBlue rounded items-center px-5 py-12">
            <div className="icon w-8 h-8 mb-2 bg-neonBlue text-white text-center flex items-center justify-center p-2 text-lg rounded">
              <FaBrain />
            </div>
            <div className="text flex flex-col text-center">
              <p className="font-semibold">Experiência</p>
              <p>Mais de duas décadas fornecendo soluções tecnológicas sob medida.</p>
            </div>
          </div>
          <div className="flex flex-col bg-aliceBlue rounded items-center px-5 py-12">
            <div className="icon w-8 h-8 mb-2 bg-neonBlue text-white text-center flex items-center justify-center p-2 text-lg rounded">
              <IoAnalytics />
            </div>
            <div className="text flex flex-col text-center">
              <p className="font-semibold">Análise</p>
              <p>Identificação criteriosa de aplicações de IA que realmente agregam valor ao seu negócio.</p>
            </div>
          </div>
          <div className="flex flex-col bg-aliceBlue rounded items-center px-5 py-12">
            <div className="icon w-8 h-8 mb-2 bg-neonBlue text-white text-center flex items-center justify-center p-2 text-lg rounded">
              <GrTechnology />
            </div>
            <div className="text flex flex-col text-center">
              <p className="font-semibold">Framework Adaptável</p>
              <p>Utilização de várias metodologias para um serviço personalizado.</p>
            </div>
          </div>
          <div className="flex flex-col bg-aliceBlue rounded items-center px-5 py-12">
            <div className="icon w-8 h-8 mb-2 bg-neonBlue text-white text-center flex items-center justify-center p-2 text-lg rounded">
              <GiStorkDelivery />
            </div>
            <div className="text flex flex-col text-center">
              <p className="font-semibold">Entregas Constantes</p>
              <p>Desenvolvimento em ciclos contínuos, permitindo ajustes rápidos e entregas eficientes.</p>
            </div>
          </div>
          <div className="flex flex-col bg-aliceBlue rounded items-center px-5 py-12">
            <div className="icon w-8 h-8 mb-2 bg-neonBlue text-white text-center flex items-center justify-center p-2 text-lg rounded">
              <GrDocumentPerformance />
            </div>
            <div className="text flex flex-col text-center">
              <p className="font-semibold">Alta Performance</p>
              <p>Equipe altamente qualificada, selecionada a partir de nossa articulação acadêmica.</p>
            </div>
          </div>
          <div className="flex flex-col bg-aliceBlue rounded items-center px-5 py-12">
            <div className="icon w-8 h-8 mb-2 bg-neonBlue text-white text-center flex items-center justify-center p-2 text-lg rounded">
              <PiUserFocus />
            </div>
            <div className="text flex flex-col text-center">
              <p className="font-semibold">Foco no Cliente</p>
              <p>Prioridade à experiência do usuário, desde o planejamento até a entrega final.</p>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Benefits;
