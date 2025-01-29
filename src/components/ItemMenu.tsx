import Image from "next/image";

import Arrow from "@/assets/arrow-down.svg";

type Props = {
    name: string
}

export function ItemMenu({ name } : Props) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-[#646464] text-sm font-medium tracking-widest uppercase">{name}</span>
      <Image src={Arrow} alt="Seta para baixo" />
    </button>
  );
}
