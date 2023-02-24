import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing your order");
    router.push("/product");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link legacyBehavior href={"/blog"}>
        <a>Go to blog page</a>
      </Link>
      <br />
      <Link legacyBehavior href={"/product"}>
        <a>Go to products page</a>
      </Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}
