import { Container } from "./Container";
import Image from "next/image";

import ImgAppleStore from '@/assets/btn-apple-store.svg'
import ImgGooglePlay from '@/assets/btn-google-play.svg'
import Arrow from '@/assets/arrow-explorer.svg'
import Woman from '@/assets/woman-green-test.svg'


export function SectionHero() {
    return (
        <section className="w-full h-[704px] bg-img-bg-hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex-1 max-w-[500px]">
                    <h1 className="text-white text-6xl font-bold mb-6">Tenha o controle do seu banco na ponta dos dedos</h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">Tudo o que você precisa em um único lugar.</p>
                    <div className="flex gap-4 mb-24">
                        <button>
                            <Image 
                                src={ImgAppleStore}
                                alt="Logo da Apple Store"
                            /> 
                        </button>
                        <button>
                            <Image 
                                src={ImgGooglePlay}
                                alt="Logo da Google Play"
                            /> 
                        </button>
                    </div>
                    <button>
                        <button className="flex items-center gap-3">
                            <Image 
                                src={Arrow} 
                                alt="Seta para baixo" 
                            />
                            <span className="text-white text-sm font-bold ">Continue explorando</span>
                        </button>
                    </button>
                </div>
                <Image 
                    src={Woman}
                    alt="Mulher sorrindo com um celular nas mãos"
                    className="mr-[-41px]"
                />
            </Container>
        </section>
    )
}
