import AnimatedProduct from "@/components/AnimatedProduct";
import Feature from "./feature";
import Hero from "./hero";
import ProductList from "./product-list";
import AdditionalData from "./additional-data";
import Temp from "./temp";

export default function Home() {
  return (
    <>
      <AnimatedProduct>
        <Hero />
        {/* <Feature /> */}
      </AnimatedProduct>
      <ProductList />
      <AdditionalData />
      {/* <Temp />   */}
    </>
  );
}
