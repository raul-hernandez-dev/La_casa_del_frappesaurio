import { FaMugHot } from "react-icons/fa";
import MenuSection from "./MenuSection";
import { useTranslation } from "react-i18next";
import { chocolateMenu } from "../services/chocolateData";
import { milkOptions } from "../services/coffeeData";

export default function ChocolateMenu({ defaultOpen }) {

  const { t } = useTranslation("menu");

  return (
    <MenuSection
      title={t("menu.items.chocolate")}
      icon={<FaMugHot className="text-primary" />}
      items={chocolateMenu}
      milkOptions={milkOptions}
      defaultOpen={defaultOpen}
    />
  );
}