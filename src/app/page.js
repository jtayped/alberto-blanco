import Header from "@/components/home/header/header";
import Links from "@/components/home/links/links";
import Gallery from "@/components/home/gallery/gallery";
import Services from "@/components/home/services/services";

export default function Home() {
  return (
    <main className="grid gap-6">
      <header>
        <Header />
      </header>
      <section id="links">
        <Links />
      </section>
      <div className="grid gap-7 mt-3">
        <section id="gallery">
          <Gallery />
        </section>
        <section id="services">
          <Services />
        </section>
      </div>
    </main>
  );
}
