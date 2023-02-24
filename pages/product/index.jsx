import React from "react";
import Link from "next/link";

export default function ProductList() {
  return (
    <div>
      <Link href="/">
        <h5>Go to home</h5>
      </Link>
      <h1>
        <Link href="/product/1">
          <h2>Product 1</h2>
        </Link>
      </h1>
      <h1>
        <Link href="/product/2">
          <h2>Product 2</h2>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3">
          <h2>Product 3</h2>
        </Link>
      </h1>
    </div>
  );
}
