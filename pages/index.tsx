import { Contact, Footer, Header, Hero, Service } from "components/oraginism";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="mx-auto">
      <Head>
        <title> Công ty TNHH DỊCH VỤ KỸ THUẬT CAM NINH</title>
        <meta
          name="description"
          content="Công ty CAM NINH"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <Hero />

      <Service />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
