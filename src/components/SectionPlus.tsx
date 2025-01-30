import { Container } from "./Container";
import Image from "next/image";

import WomanWhite from '@/assets/woman-white.svg'
import Pay from '@/assets/icon-pay.svg'
import CardPlus from '@/assets/icon-card-plus.svg'
import Graphic from '@/assets/icon-graphic.svg'
import Security from '@/assets/icon-security.svg'

export function SectionPlus() {
    return (
        <section className="w-full flex items-center h-[900px] bg-primary-white">
            <Container>
                <Image
                    src={WomanWhite}
                    alt="Mulher sorrindo com um celular e um cartão de crédtio na mão"
                />
                <div className="flex-1 max-w-[480px] mx-auto text-center">
                    <span className="block text-primary-white text-sm font-bold uppercase mb-10 border-solid bg-second-green border-second-green border-2 px-5 py-3 rounded-2xl max-w-[14.2rem] shadow-xl ml-auto text-right">Infinitas possibilidades</span>
                    <h1 className="text-primary-gray text-[56px] font-bold leading-none mb-6 text-right">Um ecossistema completo de soluções financeiras</h1>
                    <p className="text-lg max-w-[554px] text-second-gray text-right mb-16">Com a Connect Bank, você tem acesso a uma plataforma inovadora de serviços bancários, oferecendo tudo o que precisa para gerenciar seu dinheiro de forma inteligente e sem limites.</p>

                    <ul className="grid grid-cols-2 gap-6 mt-8 max-w-[554px] mx-auto text-right text-txt-gray">
                        <li className="flex items-center gap-3 justify-end ">
                            <span className="w-10 h-10 flex items-center justify-center bg-second-green rounded-full">
                            <Image
                            src={Pay}
                            alt="Carteira com dinheiro dentro"
                            className="text-primary-white w-6 h-6" />
                            </span>
                            Pagamentos rápidos
                        </li>
                        <li className="flex items-center gap-3 justify-center pl-[.1rem]">
                            <span className="w-10 h-10 flex items-center justify-center bg-second-green rounded-full">

                            <Image
                            src={CardPlus}
                            alt="Carteira com dinheiro dentro"
                            className="text-primary-white w-6 h-6" />

                            </span>
                            Cartão digitalizado
                        </li>
                        <li className="flex items-center gap-3 justify-end pr-[.75rem]">
                            <span className="w-10 h-10 flex items-center justify-center bg-second-green rounded-full">

                            <Image
                            src={Security}
                            alt="Carteira com dinheiro dentro"
                            className="text-primary-white w-6 h-6" />

                            </span>
                            Segurança robusta
                        </li>
                        <li className="flex items-center gap-3 justify-center">
                            <span className="w-10 h-10 flex items-center justify-center bg-second-green rounded-full">

                            <Image
                            src={Graphic}
                            alt="Carteira com dinheiro dentro"
                            className="text-primary-white w-6 h-6" />

                            </span>
                            Rendimentos altos
                        </li>
                    </ul>





                </div>
            </Container>
        </section>
    )
}