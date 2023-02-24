import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      <h1>
        review {reviewId} of product {productId}
      </h1>
    </div>
  );
}
