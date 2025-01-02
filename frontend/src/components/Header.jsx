import { Flex, Image, useColorMode, Link, Button } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import { Link as RouterLink } from "react-router-dom";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);

  return (
    <Flex justifyContent="space-between" mt={6} mb="12">
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24} />
        </Link>
      )}
      {!user && (
        <Link
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("login")}
        >
          Login
        </Link>
      )}
      <Image
        cursor={"pointer"}
        w={6}
        alt="logo"
        onClick={toggleColorMode}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
      />
      {user && (
        <Flex alignItems={"center"} gap={4}>
          <Link as={RouterLink} to={`/${user.username}`}>
            <RxAvatar size={24} />
          </Link>

          <Button size={"xs"} onClick={logout} position={"fixed"} right={4}>
            <FiLogOut size={20} />
          </Button>
        </Flex>
      )}

      {!user && (
        <Link
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("signup")}
        >
          Sign up
        </Link>
      )}
    </Flex>
  );
};

export default Header;
