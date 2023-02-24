import { useRouter } from "next/router";
import React from "react";

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <div>
        <h1>
          Viewing docs for feature {params[0]} and concept {params[1]}
        </h1>
      </div>
    );
  } else if (params.length === 1) {
    return (
      <div>
        <h1>Viewing docs for feature {params[0]}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Docs home page</h1>
    </div>
  );
}
