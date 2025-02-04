import { Container } from "./Container";
import Image from "next/image";

import ImgAppleStore from '@/assets/btn-apple-store.svg';
import ImgGooglePlay from '@/assets/btn-google-play.svg';
import Arrow from '@/assets/arrow-explorer.svg';
import Woman from '@/assets/woman-green-shadow.svg';

export function SectionHero() {
    return (
        <section className="w-full h-[704px] bg-img-bg-hero bg-no-repeat bg-center bg-cover flex items-center max-[1250px]:h-full">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-8 max-[1250px]:mt-10 max-[1250px]:mx-auto">
                    <div className="flex-1 max-w-[500px] text-center lg:text-left">
                        <h1 className="text-white text-6xl font-bold mb-6 max-[1250px]:text-4xl max-[1250px]:px-6">Tenha o controle do seu banco na ponta dos dedos</h1>
                        <p className="text-white max-lg:mx-auto text-xl max-w-[408px] mb-8 max-[1250px]:px-6 max-[1250px]:text-lg">Tudo o que você precisa em um único lugar.</p>
                        <div className="flex justify-center lg:justify-start gap-4 mb-24 max-[1250px]:px-6">
                            <button>
                                <Image 
                                    src={ImgAppleStore}
                                    alt="Logo da Apple Store"
                                    className="shadow-xl"
                                /> 
                            </button>
                            <button>
                                <Image 
                                    src={ImgGooglePlay}
                                    alt="Logo da Google Play"
                                    className="shadow-xl"
                                /> 
                            </button>
                        </div>
                        <button className="flex items-center gap-3 justify-center lg:justify-start max-[1250px]:mt-[-3rem] max-[1250px]:mx-auto">
                            <Image 
                                src={Arrow} 
                                alt="Seta para baixo" 
                            />
                            <span className="text-white text-sm font-bold">Continue explorando</span>
                        </button>
                    </div>
                    <Image 
                        src={Woman}
                        alt="Mulher sorrindo com um celular nas mãos"
                        className="mt-8 max-[1250px]:mt-[-.2rem]"
                    />
                </div>
            </Container>
        </section>
    );
}
