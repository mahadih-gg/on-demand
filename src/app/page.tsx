"use client"

import ServiceCard from "@/components/common/ServiceCard";
import ServiceCategoryCard from "@/components/common/ServiceCategoryCard";
import HeroSlider from "@/components/home/HeroSlider";
import ServiceSearch from "@/components/ServiceSearch";
import { categories } from "@/data/categories";

export default function Home() {
  return (
    <main>

      {/* ===============  Hero section ============= */}
      <header className="container p-section grid grid-cols-2 gap-20">
        <div>
          <h1 className="heading-hero">One-stop solution for your services.</h1>
          <ServiceSearch />
        </div>
        <div className="h-full">
          <HeroSlider />
        </div>
      </header>

      {/* ===============  Service Category section ============= */}
      <section className="bg-light p-section">
        <div className="container">
          <h2 className="heading-section">Service Category</h2>
          <div className="flex justify-start items-center flex-wrap gap-5">
            {
              categories.map((item: any, i: number) => {
                return (
                  <ServiceCategoryCard key={i} item={item} />
                )
              })
            }
          </div>
        </div>
      </section>

      {/* ===============  Top Service section ============= */}
      <section className="">
        <h1>Top Services</h1>
        <div>
          {
            [1, 2, 3, 4, 5, 6].map((item: any, i: number) => {
              return (
                <ServiceCard key={i} />
              )
            })
          }
        </div>
      </section>


      {/* ===============  Work Process section ============= */}
      {/* ===============  Why choose section ============= */}

    </main>
  );
}
