import { SiOnlyfans, SiX, SiTelegram } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import Manvids from "@/components/icons/manyvids";

const iconSize = 20;
const links = [
  {
    text: "OnlyFans",
    secondaryText: "@albertoblancox",
    icon: <SiOnlyfans size={iconSize} />,
    href: "https://onlyfans.com/albertoblancox",
  },
  {
    text: "ManyVids",
    secondaryText: "@albertoblanco",
    icon: <Manvids size={iconSize} />,
    href: "https://www.manyvids.com/Profile/1008729346/albertoblanco/Store/Videos",
  },
  {
    text: "Instagram",
    secondaryText: "@albertito.b",
    icon: <RiInstagramFill size={iconSize} />,
    href: "https://www.instagram.com/albertito.b?igsh=cGk5azUxNTE3NDdl",
  },
  {
    text: "X",
    secondaryText: "@AlbertoBlancoX",
    icon: <SiX size={iconSize} />,
    href: "https://x.com/AlbertoBlancoX",
  },
  {
    text: "Telegram",
    secondaryText: "@Albertoblancox",
    icon: <SiTelegram size={iconSize} />,
    href: "https://t.me/+Clk5dJg__lhlMTg0",
  },
];

export default links;
