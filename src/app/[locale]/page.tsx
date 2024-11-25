import Count from "@/components/Count";
import { Banner } from "@/components/landing/Banner";
import Feature from "@/components/landing/Feature";
import Global from "@/components/landing/Global";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("Website");
  return (
    <div>
      <Banner
        SubTitle={t("HomePage.SubTitle")}
        Title={t("HomePage.Title")}
        Description={t("HomePage.Description")}
        ButtonOne={t("HomePage.ButtonOne")}
        ButtonTwo={t("HomePage.ButtonTwo")}
      />
      <Count
        CountOne={t("HomePage.CountOne")}
        CountTwo={t("HomePage.CountTwo")}
        CountThree={t("HomePage.CountThree")}
        CountFour={t("HomePage.CountFour")}
      />
      <Feature
        Title={t("features.Title")}
        Description={t("features.Description")}
        Item1={t("features.Item1")}
        Item2={t("features.Item2")}
        Item3={t("features.Item3")}
        Item4={t("features.Item4")}
      />
      <Global Title={t("Global.Title")} Description={t("Global.Description")} />
    </div>
  );
}
