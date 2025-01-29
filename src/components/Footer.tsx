import { ItemsFooter } from "@/components/ItemsFooter";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-primary-white text-second-green">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#dddddd] py-7">
        <Container>
          <h1 className="text-white lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-second-green font-semibold">
              Quer saber das novidades?
            </span>{" "}
            Assine nossa newsletter
          </h1>
          <div>
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
      <Container>
        <ItemsFooter />
      </Container>
      <div className="text-center pt-2 text-txt-gray text-sm pb-8">
        <span>Termos de Uso · Política de Privacidade</span>
      </div>
    </footer>
  );
}
