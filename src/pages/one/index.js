import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <title>One</title>
      <StaticImage src="../../images/one.jpg" alt="One" />
      <StaticImage src="../../images/new.jpg" alt="New" />
    </main>
  );
};

export default IndexPage;
