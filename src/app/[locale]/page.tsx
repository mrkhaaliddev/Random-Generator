import Count from "@/components/Count";
import { Banner } from "@/components/landing/Banner";
import { FAQ } from "@/components/landing/FAQ";
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
      <FAQ
        Q1={t("Faq.Q1")}
        Q2={t("Faq.Q2")}
        Q3={t("Faq.Q3")}
        Q4={t("Faq.Q4")}
        Q5={t("Faq.Q5")}
        A1={t("Faq.A1")}
        A2={t("Faq.A2")}
        A3={t("Faq.A3")}
        A4={t("Faq.A4")}
        A5={t("Faq.A5")}
      />
    </div>
  );
}
