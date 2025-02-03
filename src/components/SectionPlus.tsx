import { Container } from "./Container";
import Image from "next/image";

import WomanWhite from '@/assets/woman-white.svg';
import Pay from '@/assets/icon-pay.svg';
import CardPlus from '@/assets/icon-card-plus.svg';
import Graphic from '@/assets/icon-graphic.svg';
import Security from '@/assets/icon-security.svg';

export function SectionPlus() {
    return (
        <section className="w-full flex items-center h-[1000px] bg-primary-white max-[1250px]:h-full max-[1250px]:flex-col max-[1250px]:justify-center max-[1250px]:pt-[3.5rem] pb-4 max-[1250px]:pb-[2.5rem]">
            <Container>
                <div className="flex items-center gap-2 max-[1250px]:flex-col max-[1250px]:text-center max-[1250px]:w-full">
                    {/* img fica a esquerda no desktop e embaixo no mobile */}
                    <div className="max-[1250px]:order-2 max-[1250px]:flex max-[1250px]:justify-center max-[1250px]:w-full">
                        <Image
                            src={WomanWhite}
                            alt="Mulher sorrindo com um celular e um cartão de crédito na mão"
                            className="max-[1250px]:mx-auto w-[753px] ml-[-1rem]"
                        />
                    </div>
                    {/* txt e lista de benefícios */}
                    <div className="flex-1 max-w-[480px] max-[1250px]:w-full max-[1250px]:text-center">
                        <span className="block text-primary-white text-sm font-bold uppercase mb-10 border-solid bg-second-green border-second-green border-2 px-5 py-3 rounded-2xl max-w-[14.2rem] shadow-xl ml-auto max-[1250px]:mx-auto">
                            Infinitas possibilidades
                        </span>
                        <h1 className="text-primary-gray text-[56px] font-bold leading-none mb-6 text-right max-[1250px]:text-center max-[1250px]:text-[42px] max-[1250px]:px-3 max-[1250px]:text-4xl max-[1250px]:leading-[1.2]">
                            Um ecossistema completo de soluções financeiras
                        </h1>
                        <p className="text-lg max-w-[554px] text-second-gray text-right mb-16 max-[1250px]:text-center max-[1250px]:px-6">
                            Com a Connect Bank, você tem acesso a uma plataforma inovadora de serviços bancários, oferecendo tudo o que precisa para gerenciar seu dinheiro de forma inteligente e sem limites.
                        </p>
                        <ul className="grid grid-cols-2 gap-6 mt-8 max-w-[554px] ml-auto text-right text-txt-gray max-[1250px]:grid-cols-1 max-[1250px]:text-center max-[1250px]:mx-auto">
                            <li className="flex items-center gap-3 justify-end mr-[-.5rem] max-[1250px]:justify-center max-[1250px]:mr-[-.6rem]">
                                <span className="w-10 h-10 flex items-center justify-center bg-second-green rounded-full">
                                    <Image src={Pay} alt="Pagamentos rápidos" className="text-primary-white w-6 h-6" />
                                </span>
                                Pagamentos rápidos
                            </li>
                            <li className="flex items-center gap-3 justify-center mr-[-1rem] max-[1250px]:mr-0">
                                <span className="w-10 h-10 flex items-center justify-center bg-second-green rounded-full">
                                    <Image src={CardPlus} alt="Cartão digitalizado" className="text-primary-white w-6 h-6" />
                                </span>
                                Cartão digitalizado
                            </li>
                            <li className="flex items-center gap-3 justify-end pr-[.75rem] max-[1250px]:justify-center mr-[-.5rem] max-[1250px]:mr-[-.6rem]">
                                <span className="w-10 h-10 flex items-center justify-center bg-second-green rounded-full">
                                    <Image src={Security} alt="Segurança robusta" className="text-primary-white w-6 h-6" />
                                </span>
                                Segurança robusta
                            </li>
                            <li className="flex items-center gap-3 justify-center mr-[-.8rem] max-[1250px]:mr-[.1rem]">
                                <span className="w-10 h-10 flex items-center justify-center bg-second-green rounded-full">
                                    <Image src={Graphic} alt="Rendimentos altos" className="text-primary-white w-6 h-6" />
                                </span>
                                Rendimentos altos
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
