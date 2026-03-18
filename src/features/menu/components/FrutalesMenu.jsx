import { FaGlassWater } from "react-icons/fa6";
import MenuSection from "./MenuSection";
import { useTranslation } from "react-i18next";
import { frutalesMenu } from "../services/frutalesData";

export default function FrutalesMenu({ defaultOpen }) {

  const { t } = useTranslation("menu");

  return (
    <MenuSection
      title={t("menu.items.fruit")}
      icon={<FaGlassWater className="text-primary" />}
      items={frutalesMenu}
      defaultOpen={defaultOpen}
    />
  );
}