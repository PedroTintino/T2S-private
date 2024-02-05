import { useState } from "react"; 
import Loader from "./Loader";

function Form(){
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleFakeSubmit = () => {
        setLoading(true);

        setTimeout(() =>  {
            setLoading(false);
            setMessage('Cadastro realizado com sucesso!')
    }, 2000);
};

    return(
        <div className="mainContainer w-full flex flex-col justify-center items-center p-16 text-black">
            <div className="formContainer w-[70%] h-96 bg-aliceBlue text-center rounded-lg p-14">
                <h2 className="text-3xl font-semibold">Estamos ansiosos para saber mais sobre como podemos te ajudar!</h2>
                <p className="p-3">Nos diga seu principal email como meio de contato abaixo.</p>
                <form className="p-5">
                    <input type="email" className="p-2 w-[250px] rouded" placeholder="exemplo: meuemail@email.com"/>
                    <button 
                        type="button" 
                        class="text-white mt-3 bg-gradient-to-r from-cyan to-neonBlue hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={handleFakeSubmit}
                        disabled={loading}>
                            Cadastrar
                    </button>
                </form>
                {loading && <Loader />}
                {message && <p className="text-lightGray">{message}</p>}
                <p className="text-lightGray">Desde já, agradecemos por ter chegado até aqui! Sinta-se livre para cadastrar outro email.</p>
            </div>
        </div>
    )
}
export default Form;