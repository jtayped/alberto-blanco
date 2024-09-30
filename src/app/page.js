"use client";
import Header from "@/components/home/header/header";
import Links from "@/components/home/links/links";
import Gallery from "@/components/home/gallery/gallery";
import Services from "@/components/home/services/services";
import Loader from "@/components/home/loader/loader";
import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import Scroll from "@/components/ui/scroll";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <LayoutGroup>
          <Loader setLoading={setLoading} />
        </LayoutGroup>
      ) : (
        <>
          <main className="grid gap-6 pb-10">
            <header>
              <LayoutGroup>
                <Header />
              </LayoutGroup>
            </header>
            <section id="links">
              <Links />
            </section>
            <div className="grid gap-16 mt-6">
              <section id="gallery">
                <Gallery />
              </section>
              <section id="services">
                <Services />
              </section>
            </div>
          </main>
          <Scroll />
        </>
      )}
    </>
  );
}
