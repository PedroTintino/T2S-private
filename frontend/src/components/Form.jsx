import { useState } from "react"; 
import Loader from "./Loader";
import * as yup from 'yup';

function Form(){
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFakeSubmit = () => {
        // Validar o e-mail
        validationSchema.validate({ email })
            .then(() => {
                setErrorMessage(false);
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    setMessage('Cadastro realizado com sucesso!');
                }, 2000);
            })
            .catch((error) => {
                console.error(error.message);
                setErrorMessage('Por favor. insira um email válido!')
            });
    };

    const validationSchema = yup.object().shape({
        email: yup.string().email('Digite um email válido').required('O campo de email é obrigatório'),
    });

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    return(
        <div className="mainContainer w-full flex flex-col justify-center items-center p-16 text-black">
            <div className="formContainer  bg-aliceBlue text-center rounded-lg md:w-[70%] h-auto p-14">
                <h2 className="text-3xl font-semibold">Estamos ansiosos para saber mais sobre como podemos te ajudar!</h2>
                <p className="p-3">Nos diga seu principal email como meio de contato abaixo.</p>
                <form className="p-5">
                    <input 
                        type="email" 
                        className="p-2 w-[250px] rouded" 
                        placeholder="exemplo: meuemail@email.com"
                        value={email}
                        onChange={handleEmailChange}    
                    />
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
                {errorMessage && <p className="text-lightGray">{errorMessage}</p>}
                <p>Desde já, agradecemos por ter chegado até aqui!</p>
            </div>
        </div>
    )
}
export default Form;