import React from "react";
import { Heading, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex as="nav" bg="blue.500" color="white" p="1.5rem">
      <Heading as="h1" size="lg">
        Le-Train-Blue
      </Heading>
    </Flex>
  );
};

export default Header;
