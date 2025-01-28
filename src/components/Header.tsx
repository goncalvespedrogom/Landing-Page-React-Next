import Image from "next/image";

import { ItemMenu } from "./ItemMenu";

import IconUser from '@/assets/icon-user-full.svg'
import { Container } from "./Container";
import LogoConnect from '@/assets/logo-connect-bank.png'

export function Header() {
    return (
        <header className="relative flex items-center h-20 w-full bg-primary-white">
            <Container>
                <Image 
                    src={LogoConnect}
                    alt="Logo"
                    className="w-40"
                />
                <div className="flex flex-1 items-center justify-center">
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu 
                                    name="Para você"
                                />
                            </li>
                            <li>
                                <ItemMenu 
                                    name="Para empresas"
                                />
                            </li>
                            <li>
                                <ItemMenu 
                                    name="Serviços"
                                />
                            </li>
                            <li>
                                <ItemMenu 
                                    name="Ajuda"
                                />
                            </li>
                        </ul>
                    </div>
                <button className="flex items-center gap-4 border-solid border-second-green border-[2px] px-4 py-3 rounded-2xl">
                    <Image 
                        src={IconUser}
                        alt="Ícone do Usuário"
                        className="w-7"
                    />
                    <span className="text-second-green font-bold">Acessar conta</span>
                </button>
            </Container>
        </header>
    )
}