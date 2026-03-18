import { GiCoffeeBeans } from "react-icons/gi";
import MenuSection from "./MenuSection";
import { useTranslation } from "react-i18next";
import { coffeeBeansMenu } from "../services/coffeeBeansData";

export default function CoffeeBeansMenu({ defaultOpen }) {

  const { t } = useTranslation("menu");
 
  return ( 
    <MenuSection
      title={t("menu.items.beans")}
      icon={<GiCoffeeBeans className="text-primary" />}
      items={coffeeBeansMenu}
      defaultOpen={defaultOpen}
    />
  );
} 