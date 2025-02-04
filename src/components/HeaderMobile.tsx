"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import OpenMenu from '@/assets/icon-open-menu.svg'
import CloseMenu from '@/assets/icon-close-menu.svg'
import LogoConnectMobile from "@/assets/logo-connect-mobile.svg";


export function HeaderMobile() {

  const [navbar, setNavbar] = useState(false);
    
  return (
    <div>
      <nav className="w-full bg-primary-white relative top-0 left-0 right-0 z-10 shadow-md lg:hidden">
        <div className="justify-between mx-auto">
          <div>
            <div className="flex items-center justify-between py-5 px-8">
              {/* logo */}
              <Image src={LogoConnectMobile} alt="Logo" className="w-52" />
              {/* botão de abrir menu */}
              <div>
                <button
                  className="p-2 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={CloseMenu} width={38} height={38} alt="logo" />
                  ) : (
                    <Image
                      src={OpenMenu}
                      width={38}
                      height={38}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center w-full overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight: navbar ? '10rem' : '0', // ajuste a altura máxima do menu
              }}
            >
              <ul className="h-screen items-center justify-center w-full uppercase font-semibold">
                <li className="w-full text-xl text-second-green py-1 text-center hover:bg-second-green hover:text-primary-white">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Para você
                  </Link>
                </li>
                <li className="text-xl text-second-green py-1 text-center hover:bg-second-green hover:text-primary-white">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Para empresas
                  </Link>
                </li>
                <li className="text-xl text-second-green py-1 text-center hover:bg-second-green hover:text-primary-white">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Serviços
                  </Link>
                </li>
                <li className="text-xl text-second-green py-1 text-center hover:bg-second-green hover:text-primary-white">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Ajuda
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
