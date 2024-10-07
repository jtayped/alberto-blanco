import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
      <Analytics />
    </>
  );
};

export default Providers;
