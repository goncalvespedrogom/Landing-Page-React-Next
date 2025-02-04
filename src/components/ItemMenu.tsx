"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Arrow from "@/assets/arrow-down.svg";

interface ItemMenuProps {
  name: string;
  items?: string[];
}

export function ItemMenu({ name, items = [] }: ItemMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <li
      className="relative group"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      {/* botão com seta svg */}
      <button className="flex items-center gap-3">
        <span className="text-[#646464] text-sm font-medium tracking-widest uppercase hover:text-second-green transition">
          {name}
        </span>
        <Image
          src={Arrow}
          alt="Seta para baixo"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} // faz a seta girar ao abrir
        />
      </button>

      {/* dropdown */}
      {items.length > 0 && isOpen && (
        <div
          className="absolute left-0 mt-2 w-52 bg-primary-white shadow-xl rounded-md overflow-hidden z-10 border border-gray-200"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          <ul className="py-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 text-second-green hover:bg-second-green hover:text-primary-white cursor-pointer transition font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
