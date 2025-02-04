import { RECURSOS, PRODUTOS, EMPRESA, SUPORTE } from "@/components/MenuFooter";
import ItemFooter from "@/components/ItemFooter";

export function ItemsFooter() {
  return (
    <div className="flex flex-col text-center sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:px-0 xl:mr-[-3rem] px-5 pt-14 pb-8 xl:py-16 w-full mx-auto">
      <ItemFooter Links={PRODUTOS} title="PRODUTOS" />
      <ItemFooter Links={RECURSOS} title="RECURSOS" />
      <ItemFooter Links={EMPRESA} title="EMPRESA" />
      <ItemFooter Links={SUPORTE} title="SUPORTE" />
    </div>
  );
}
