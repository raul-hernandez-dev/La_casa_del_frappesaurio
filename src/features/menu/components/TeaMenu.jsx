import { FaLeaf } from "react-icons/fa";
import MenuSection from "./MenuSection";
import { useTranslation } from "react-i18next";
import { teaMenu } from "../services/teaData";

export default function TeaMenu({ defaultOpen }) {
  const { t } = useTranslation("menu")
  return (
    <MenuSection
      title={t("menu.items.tea")}
      icon={<FaLeaf className="text-primary" />}
      items={teaMenu}
      defaultOpen={defaultOpen}
    />
  );
}