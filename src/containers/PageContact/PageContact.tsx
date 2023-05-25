import React, { FC } from "react";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SocialsList from "shared/SocialsList/SocialsList";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🕘 ORARIO",
    desc: "08:00 - 20:00",
  },
  {
    title: "💌 EMAIL",
    desc: "verganauticjet@gmail.com",
  },
  {
    title: "📱 TELEFONO",
    desc: "+39 3510531005",
  },
];

const PageContact: FC<PageContactProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title>Contatti || Verganautic Jet</title>
      </Helmet>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contatti
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Nome e cognome</Label>

                  <Input
                    placeholder="Mario Rossi"
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Indirizzo email</Label>

                  <Input
                    type="email"
                    placeholder="mario.rossi@esempio.com"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Messaggio</Label>

                  <Textarea className="mt-1" rows={6} />
                </label>
                <div>
                  <ButtonPrimary type="submit">Invia Messaggio</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      {/* <div className="container">
        <SectionSubscribe2 className="py-24 lg:py-32" />
      </div> */}

    </div>
  );
};

export default PageContact;
