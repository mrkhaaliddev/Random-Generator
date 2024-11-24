import Count from "@/components/Count";
import { Link } from "@/i18n/routing";
import { Banner } from "@/landing/Banner";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <Banner
        SubTitle={t("SubTitle")}
        Title={t("Title")}
        Description={t("Description")}
        ButtonOne={t("ButtonOne")}
        ButtonTwo={t("ButtonTwo")}
      />
      <Count
        CountOne={t("CountOne")}
        CountTwo={t("CountTwo")}
        CountThree={t("CountThree")}
        CountFour={t("CountFour")}
      />
    </div>
  );
}
