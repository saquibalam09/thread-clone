import { Container } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }) => {
  return <div className="container max-w-[620px] mx-auto">{children}</div>;
};

export default Layout;
