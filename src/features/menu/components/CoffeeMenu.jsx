import { FaCoffee } from "react-icons/fa";
import MenuSection from "./MenuSection";
import { useTranslation } from "react-i18next";
import { coffeeMenu, milkOptions } from "../services/coffeeData";


export default function CoffeeMenu({ defaultOpen }) {

  const { t } = useTranslation("menu");

  return (
    <MenuSection
      title={t("menu.items.coffee")} 
      icon={<FaCoffee className="text-primary" />}
      items={coffeeMenu}
      milkOptions={milkOptions}
      defaultOpen={defaultOpen}
    />
  );
}