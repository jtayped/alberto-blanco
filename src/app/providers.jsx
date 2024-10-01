import { Analytics } from "@vercel/analytics/react";

const Providers = ({children}) => {
  return <Analytics>{children}</Analytics>;
};

export default Providers;
