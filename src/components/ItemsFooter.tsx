import { RECURSOS, PRODUTOS, EMPRESA, SUPORTE } from "@/components/MenuFooter";
import ItemFooter from "@/components/ItemFooter";

export function ItemsFooter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0 sm:mr-[-3rem] px-5 py-16 w-full mx-auto">
      <ItemFooter Links={PRODUTOS} title="PRODUTOS" />
      <ItemFooter Links={RECURSOS} title="RECURSOS" />
      <ItemFooter Links={EMPRESA} title="EMPRESA" />
      <ItemFooter Links={SUPORTE} title="SUPORTE" />
    </div>
  );
}
