import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";



function ContactModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[80%] rounded-md bg-aliceBlue my-6 mx-auto md:w-[35%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-aliceBlue outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Contato
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-5 flex-auto">
                  <p className="flex gap-2 items-center text-xl">
                  <FaAddressBook />
                    Praça da República, 87 - Sala 111 - Centro - Santos/SP
                  </p>
                  <p className="flex gap-2 items-center text-xl">
                    <FaPhoneAlt />
                    +55 13 3329-6601
                  </p>
                  <p className="flex gap-2 items-center text-xl">
                    <MdEmail />
                    vendas@t2s.com.br 
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default ContactModal;