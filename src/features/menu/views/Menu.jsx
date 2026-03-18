import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";import MenuLegend from "../components/MenuLegend";
import CoffeeMenu from "../components/CoffeeMenu";
import ExtrasMenu from "../components/ExtrasMenu";
import ChocolateMenu from "../components/ChocolateMenu";
import TeaMenu from "../components/TeaMenu";
import FrutalesMenu from "../components/FrutalesMenu";
import FrappesMenu from "../components/FrappesMenu";
import CoffeeBeansMenu from "../components/CoffeeBeansMenu";

export default function Menu() {
  const [params] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    if (category) {
      const element = document.getElementById(category);
      if (element) {

        element.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }
  }, [category]);

  return (
    <main className="container mx-auto max-w-4xl space-y-8">
      <MenuLegend />

      <section id="coffee" className="scroll-mt-24">
        <CoffeeMenu defaultOpen={category === "coffee"} />
      </section>

      <section id="chocolate" className="scroll-mt-24">
        <ChocolateMenu defaultOpen={category === "chocolate"} />
      </section>

      <section id="tea" className="scroll-mt-24">
        <TeaMenu defaultOpen={category === "tea"} />
      </section>

      <section id="fruit" className="scroll-mt-24">
        <FrutalesMenu defaultOpen={category === "fruit"} />
      </section>

      <section id="frappe" className="scroll-mt-24">
        <FrappesMenu defaultOpen={category === "frappe"} />
      </section>

      <section id="beans_coffee" className="scroll-mt-24">
        <CoffeeBeansMenu defaultOpen={category === "beans_coffee"} />
      </section>

      <ExtrasMenu />
    </main>
  );
}