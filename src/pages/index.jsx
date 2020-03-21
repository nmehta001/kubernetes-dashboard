import React from "react";
import { Helmet } from "react-helmet";
import Homepage from "../blocks/Homepage";

const IndexPage = () => (
  <>
    <Helmet>
      <title>Seldon - Kubernetes Dashboard</title>
      <meta property="og:title" content="Seldon - Kubernetes Dashboard" />
    </Helmet>
    <Homepage />
  </>
);

export default IndexPage;
