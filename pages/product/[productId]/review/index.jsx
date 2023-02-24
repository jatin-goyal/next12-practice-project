import React from "react";
import { useRouter } from "next/router";

export default function Reviews() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Reviews of Product {productId}</h1>
    </div>
  );
}
