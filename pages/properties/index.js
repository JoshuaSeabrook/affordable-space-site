import Feature from "../../components/Feature";
import Pricing from "../../components/Pricing";
import PropertyHeader from "../../components/PropertyHeader";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";

export default function Properties() {
  return (
    <>
      <SeoHead title='Affordable Space' />
      <Layout>
        <PropertyHeader />
      </Layout>
    </>
  );
}