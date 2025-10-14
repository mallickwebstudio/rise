import AnimatedProduct from "@/components/AnimatedProduct";
import Feature from "./feature";
import Hero from "./hero";
import Temp from "./temp";
import ProductList from "./product-list";

export default function Home() {
  return (
    <>
      <AnimatedProduct>
        <Hero />
        <Feature />
      </AnimatedProduct>
      <ProductList />
      {/* <Temp /> */}
    </>
  );
}
