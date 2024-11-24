import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export const Banner = ({
  SubTitle,
  Title,
  Description,
  ButtonOne,
  ButtonTwo,
}: {
  SubTitle: string;
  Title: string;
  Description: string;
  ButtonOne: string;
  ButtonTwo: string;
}) => (
  <div
    className="max-w-7xl mx-auto px-6 lg:px-8"
    style={{ paddingTop: "96px" }}
  >
    <div className="text-center">
      <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-50/20 p-1 pr-2">
        <span className="rounded-full text-blue-600 dark:bg-gray-900 dark:text-blue-400 px-3 py-0.5 text-sm font-semibold leading-5">
          {SubTitle}
        </span>
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 dark:text-white">
        {Title}
      </h1>
      <div className="bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500"></div>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
        {Description}
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <Link href="/fun_facts">
          <Button variant="default" size="lg" className="text-white">
            {ButtonOne}
          </Button>
        </Link>
        <Button variant="outline" size="lg">
          {ButtonTwo}
        </Button>
      </div>
    </div>
  </div>
);
