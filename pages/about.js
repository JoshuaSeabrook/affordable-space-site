import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function About() {
  return (
    <>
      <SeoHead title='Affordable Space' />
      <Layout>
        <AboutUs />
      </Layout>
    </>
  );
}
