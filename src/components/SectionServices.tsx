import Image from "next/image";

import { Container } from "./Container";

import PhoneIcon from '@/assets/icon-phone.svg'
import SoluctionsIcon from'@/assets/icon-solutions.svg'
import OptionsIcon from '@/assets/icon-options.svg'
import CardIcon from '@/assets/icon-card.svg'

import ImagePhone from '@/assets/phone-green-test.svg'

export function SectionServices() {
    return (
        <section className="relative w-full bg-primary-white mt-[-2px] xl:pb-[10rem]">
            <Container>
                <div className="flex flex-col xl:flex-row items-start w-full mt-[-5rem] xl:mt-[4rem] xl:mb-[4rem] text-center xl:text-start">
                    {/* txt */}
                    <div className="flex-1 max-w-[594px] pt-32 px-6 xl:px-0 mx-auto xl:mx-0">
                        <span className="block text-primary-white text-sm font-bold uppercase mb-9 border-solid bg-second-green border-second-green border-2 px-5 py-3 rounded-2xl max-w-[12rem] shadow-xl mx-auto xl:mx-0">
                            Serviços para você
                        </span>
                        <h2 className="text-primary-gray font-bold leading-tight mb-6 text-4xl xl:text-[56px]">
                            Administre seu dinheiro pelo app
                        </h2>
                        <p className="text-xl max-w-[554px] mb-16 text-second-gray">
                            Descubra como cuidar das suas finanças com o app Connect de maneira prática, segura e rápida, tudo isso sem precisar sair de casa.
                        </p>
                        <ul className="flex flex-col items-start gap-9 text-sm xl:text-base">
                            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Image src={PhoneIcon} alt="Ícone de celular"/>
                                </div>
                                <p className="flex-1 text-txt-gray pr-2">Controle sua conta, realize transferências e pagamentos de onde estiver</p>
                            </li>
                            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Image src={SoluctionsIcon} alt="Ícone de celular"/>
                                </div>
                                <p className="flex-1 text-txt-gray pr-2">Encontre opções de empréstimo e renegociação para colocar suas finanças em ordem</p>
                            </li>
                            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Image src={OptionsIcon} alt="Ícone de celular"/>
                                </div>
                                <p className="flex-1 text-txt-gray pr-2">Explore diversas alternativas de investimento adequadas ao seu perfil</p>
                            </li>
                            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Image src={CardIcon} alt="Ícone de celular"/>
                                </div>
                                <p className="flex-1 text-txt-gray pr-2">Monitore a fatura do seu cartão de crédito e faça compras online com o cartão virtual</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            {/* img celular mobile */}
            <div className="w-full flex justify-center mt-8 xl:hidden bg-[#c3fdb6] py-10">
                        <Image src={ImagePhone} alt="Celular" className="w-[300px]"/>
                    </div>
            {/* img celular desktop */}
            <div className="absolute top-0 right-0 w-[32%] h-full bg-[#c3fdb6] hidden xl:flex items-center">
                <Image src={ImagePhone} alt="Celular" className="translate-x-[-50%] w-[400px]"/>
            </div>
        </section>
    );
}
