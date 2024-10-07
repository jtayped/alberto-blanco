import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      <Analytics />
    </>
  );
};

export default Providers;
