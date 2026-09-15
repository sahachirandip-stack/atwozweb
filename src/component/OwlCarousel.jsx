"use client";

import { useEffect } from "react";

export default function OwlCarousel() {
  useEffect(() => {
    const initOwl = async () => {
      const $ = (await import("jquery")).default;

      window.$ = $;
      window.jQuery = $;

      await import("owl.carousel");

      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
      });
    };

    initOwl();
  }, []);

  return null;
}