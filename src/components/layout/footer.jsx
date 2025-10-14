import React from "react";
import Link from "next/link";
import Image from "next/image";

const linkList = [
  { label: "Features", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-background border-t"
      aria-labelledby="footer-heading"
      role="region"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        <div className="flex flex-col gap-6 items-center justify-center">
          {/* Logo */}
          <div className="justify-self-center lg:justify-self-start">
            <Link className="block h-8" href="#" aria-label="Home">
              <span className="font-vogue text-3xl">RISE</span>
            </Link>
          </div>

          {/* Navigation Links */}
          {/* <nav
            className="justify-self-center lg:justify-self-center"
            aria-label="Footer navigation"
          >
            <ul className="flex flex-col gap-4 sm:flex-row items-center">
              {linkList.map((link) => (
                <li key={link.label + "FooterFive"}>
                  <Link
                    className="text-sm text-nowrap hover:underline underline-offset-4"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}
        </div>

        {/* Bottom Bar */}
        {/* <div className="border-t mt-8 pt-8 md:mt-12 md:pt-12 flex gap-4 flex-col md:flex-row-reverse md:justify-between md:items-center text-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link
              className="underline underline-offset-2 hover:underline-offset-4"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="underline underline-offset-2 hover:underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="underline underline-offset-2 hover:underline-offset-4"
              href="#"
            >
              Cookies Settings
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </p>
        </div> */}
      </div>

      {/*
      JSON-LD Structured Data for SEO (Uncomment and customize as needed)
      Example :
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Your Company",
        url: "https://yourdomain.com",
        logo: "https://yourdomain.com/logo.svg",
        sameAs: [
          "https://twitter.com/yourcompany",
          "https://facebook.com/yourcompany",
          "https://instagram.com/yourcompany",
          "https://linkedin.com/company/yourcompany"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          email: "support@yourdomain.com"
        }
      }

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    */}
    </footer>
  );
}
