"use client";
import { useState } from "react";
import Container from "@/components/Container";
import { products } from "@/db/products.json";
import ProductCard from "@/components/ProductCard";
import FilterButton from "@/components/FilterButton";

const PRODUCTS_PER_PAGE = 8;

function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (type) => {
    setFilter(type);
    let sorted = [...products];

    switch (type) {
      case "low-to-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredProducts(sorted);
    setCurrentPage(1); // Сбросить на первую страницу при фильтрации
  };

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      <div className="text-center py-16 bg-[url(/images/shop-bg.jpg)] bg-no-repeat bg-center bg-cover">
        <h2 className="text-4xl my-2 font-medium">
          Scented Candles for Every Mood
        </h2>
        <p className="text-lg">
          Natural, hand-poured candles to fill your space with warmth and calm.
        </p>
      </div>
      <Container>
        <div className="flex py-8 items-center justify-center gap-4">
          <span>Filter Products By:</span>
          <FilterButton onClick={() => handleFilter("low-to-high")}>
            Price: Low to High
          </FilterButton>
          <FilterButton onClick={() => handleFilter("high-to-low")}>
            Price: High to Low
          </FilterButton>
          <FilterButton onClick={() => handleFilter("name-asc")}>
            Name: A-Z
          </FilterButton>
          <FilterButton
            onClick={() => {
              setFilteredProducts(products);
              setFilter("");
              setCurrentPage(1);
            }}
          >
            Reset
          </FilterButton>
        </div>

        <div className="w-full grid grid-cols-4 gap-8 mb-10">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            type="button"
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="bg-[#56B280] py-1.5 px-10 text-white rounded-sm cursor-pointer"
          >
            Previous
          </button>
          <span>
            Page <span className="text-[#56B280] font-bold">{currentPage}</span>{" "}
            of {totalPages}
          </span>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="bg-[#56B280] py-1.5 px-10 text-white rounded-sm cursor-pointer"
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
}

export default ShopPage;
