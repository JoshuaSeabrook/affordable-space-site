import Feature from "../../components/Feature";
import Pricing from "../../components/Pricing";
import SemilongPage from "../../components/Properties/SemilongPage";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";

export default function Properties() {
  return (
    <>
      <SeoHead title='Affordable Space' />
      <Layout>
        <SemilongPage />
      </Layout>
    </>
  );
}