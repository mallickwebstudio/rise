import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const productsData = [
  {
    productHref: "#",
    productImageSrc: "/perfume-bottle.svg",
    name: "Miracle",
    quantity:"20ml",
    description: "Pocket size",
    price: "$99"
  },
  {
    productHref: "#",
    productImageSrc: "/perfume-bottle.svg",
    name: "Miracle",
    quantity:"50ml",
    description: "Daily use",
    price: "$99"
  },
  {
    productHref: "#",
    productImageSrc: "/perfume-bottle.svg",
    name: "Miracle",
    quantity:"100ml",
    description: "Rise every day",
    price: "$99"
  },
];

export default function ProductList() {
  return (
    <section
      className="relative bg-background"
      role="region"
      aria-labelledby="product-card-section-heading"
    >
      <h2 id="product-card-section-heading" className="sr-only">
        Product Grid
      </h2>

      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {productsData.map((item, index) => (
            <article
              key={item.name + index + "ProductCardTwo"}
              itemScope
              itemType="https://schema.org/Product"
              aria-labelledby={`product-title-${index}`}
            >
              <figure itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                <Image
                  className="w-full aspect-square object-contain select-none pointer-events-none"
                  src={item.productImageSrc}
                  width={400}
                  height={400}
                  alt={item.name}
                />
                <meta itemProp="url" content={item.productImageSrc} />
              </figure>

              <header className="mt-2 flex flex-col items-center justify-center text-center">
                <h3
                  id={`product-title-${index}`}
                  className="mt-2 font-vogue text-lg font-medium hover:underline line-clamp-2"
                  itemProp="name"
                >
                  <Link href={item.productHref}>
                    <span itemProp="url">{item.name}</span>
                  </Link>
                </h3>
                <p
                  className="text-muted-foreground text-sm line-clamp-3"
                  itemProp="description"
                >
                  {item.description}
                </p>
                <div
                  className="font-bold"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span itemProp="priceCurrency" content="USD" />
                  {/* <span itemProp="price">{item.price}</span> */}
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                </div>
                <Button
                  className="mt-2 cursor-pointer"
                  variant="outline"
                  size="sm"
                  aria-label={`Add ${item.name} to cart`}
                >
                  {/* Add to cart */}
                  Comming Soon
                </Button>
              </header>
            </article>
          ))}
        </div>
      </div>

      {/*
      JSON-LD Structured Data for SEO (Uncomment and customize as needed)
      Example usage:
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": productsData.map((item, index) => ({
          "@type": "Product",
          "name": item.name,
          "image": item.productImageSrc,
          "description": item.description,
          "url": item.productHref,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": item.price,
            "availability": "https://schema.org/InStock",
          }
        }))
      }

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    */}
    </section>
  );
}
