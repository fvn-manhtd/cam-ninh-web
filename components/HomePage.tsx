import { dictionaries, type Locale } from "@/content/dictionaries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { QualityPolicy } from "@/components/sections/QualityPolicy";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { Effects } from "@/components/ui/Effects";

/** The whole one-page site for a locale; `/` renders it in Vietnamese and `/en/` in English. */
export function HomePage({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  return (
    <>
      <Header locale={locale} nav={dict.nav} />
      <main id="main">
        <Hero dict={dict.hero} />
        <About locale={locale} dict={dict.about} />
        <WhyUs why={dict.why} message={dict.message} />
        <QualityPolicy dict={dict.message} />
        <Services locale={locale} dict={dict} />
        <Process dict={dict.process} />
        <Projects locale={locale} dict={dict.projects} />
        <Partners dict={dict} />
        <Contact locale={locale} dict={dict.contact} />
      </main>
      <Footer locale={locale} dict={dict} />
      <Effects />
    </>
  );
}
