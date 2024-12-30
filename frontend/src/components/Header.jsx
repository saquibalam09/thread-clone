import { Flex, Image, useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent={"center"} mt={6} mb="12">
      <Image
        cursor={"pointer"}
        w={6}
        alt="logo"
        onClick={toggleColorMode}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
      />
    </Flex>
  );
};

export default Header;
