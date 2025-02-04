import { ItemsFooter } from "@/components/ItemsFooter";
import { Container } from "./Container";
import Image from "next/image";

import Facebook from '@/assets/facebook.svg'
import Instagram from '@/assets/instagram.svg'
import Linkedin from '@/assets/linkedin.svg'
import Twitter from '@/assets/twitter.svg'

export function Footer() {
  return (
    <footer className="bg-primary-white text-second-green">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#dddddd]  lg:py-7 max-lg:pt-7 max-lg:text-center">
        <Container>
          <h1 className="text-white lg:text-4xl text-3xl mb-6 lg:leading-normal font-semibold lg:w-2/5 max-lg:w-full">
            <span className="text-second-green font-semibold">
              Quer saber das novidades?
            </span>{" "}
            Assine nossa newsletter
          </h1>
          <div className="max-lg:hidden">
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button className="bg-second-green hover:bg-[#3cad42] font-bold duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
              Enviar
            </button>
          </div>
        </Container>
      </div>
      <div className="flex flex-col items-center gap-4 lg:hidden bg-[#dddddd] pb-7">
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              className="text-gray-800 w-[70%]  py-2.5 rounded px-2 focus:outline-none"
            />
            <button className="bg-second-green hover:bg-[#3cad42] font-bold duration-300 px-5 py-2.5 rounded-md text-white w-[70%]">
              Enviar
            </button>
          </div>
      <Container>
        <ItemsFooter />
      </Container>
      <div className="flex flex-col gap-8 text-center text-txt-gray text-sm pb-8">
        <p className="flex gap-4 mx-auto">
          <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center hover:opacity-70">
              <Image src={Facebook} alt="Logo do Facebook"/>
          </a>
          <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center hover:opacity-70">
              <Image src={Instagram} alt="Logo do Instagram"/>
          </a>
          <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center hover:opacity-70">
              <Image src={Linkedin} alt="Logo do LinkedIn"/>
          </a>
          <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center hover:opacity-70">
              <Image src={Twitter} alt="Logo do Twitter"/>
          </a>
        </p>
        <span>Termos de Uso · Política de Privacidade</span>
      </div>
    </footer>
  );
}
