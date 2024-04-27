import React, { Suspense } from "react";
import ProductList from '@/components/productList';
import CategoryList from '@/components/categoryList';

async function getProducts() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const products = await res.json();
  return products;
}

async function getCategories() {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories');
  const categories = await res.json();
  return categories;
}

const ProductsPage = () => {
  // Use React.useState or React.useEffect for data loading in non-Concurrent Mode apps
  // This code assumes your app is configured for Concurrent Mode
  const products = getProducts();
  const categories = getCategories();

  return (
    <>
      <Suspense fallback={<p>Loading Categories...</p>}>
        <CategoryList categories={categories} />
      </Suspense>
      <Suspense fallback={<p>Loading Products...</p>}>
        <ProductList products={products} />
      </Suspense>
    </>
  );
}

export default ProductsPage;
