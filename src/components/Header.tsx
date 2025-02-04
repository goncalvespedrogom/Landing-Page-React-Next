import Image from "next/image";

import { Container } from "./Container";
import { ItemMenu } from "./ItemMenu";

import IconUser from "@/assets/icon-user-full.svg";
import LogoConnect from "@/assets/logo-connect.svg";

export function Header() {
  return (
    <header className="relative flex items-center h-24 w-full bg-primary-white shadow-md">
      <Container>
        <Image src={LogoConnect} alt="Logo" className="w-44" />
        <nav className="flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-12">
            <ItemMenu name="Para você" items={["Conta Digital", "Empréstimos", "Investimentos"]} />
            <ItemMenu name="Para empresas" items={["Máquinas de Cartão", "Crédito para Empresas", "Gestão Financeira"]} />
            <ItemMenu name="Serviços" items={["Transferências", "Investimentos", "Promoções"]} />
            <ItemMenu name="Ajuda" items={["Chat", "Ouvidoria", "Central de Ajuda"]} />
          </ul>
        </nav>
        <button
          className="flex items-center gap-4 px-10 py-4 bg-second-green rounded-xl shadow-xl"
          style={{
            backgroundImage:
              "linear-gradient(to right, #53d119, #42b60d, #309700)",
          }}
        >
          <Image src={IconUser} alt="Ícone do Usuário" className="w-7" />
          <span className="text-white font-bold">Acessar conta</span>
        </button>
      </Container>
    </header>
  );
}
