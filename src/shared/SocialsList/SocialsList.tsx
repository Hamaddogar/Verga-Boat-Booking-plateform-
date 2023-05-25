import { SocialType } from "shared/SocialsShare/SocialsShare";
import React, { FC } from "react";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  { name: "Facebook", icon: "lab la-facebook-square", href: "https://www.facebook.com/verganautic.isoletremiti.gargano/" },
  { name: "Instagram", icon: "lab la-instagram", href: "https://www.instagram.com/verga_nautic_jet/" },
  { name: "Youtube", icon: "lab la-youtube", href: "https://www.youtube.com/channel/UCAPTikqsIu6EhnDdqafDHdw/videos" },
  { name: "Email", icon: "las la-envelope", href: "mailto:verganauticjet@gmail.com" },
  { name: "WhatsApp", icon: "lab la-whatsapp", href: "https://api.whatsapp.com/send?phone=393510531005" },
  { name: "Messenger", icon: "lab la-facebook-messenger", href: "https://m.me/verganauticjet/" },
  
  
];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block",
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
