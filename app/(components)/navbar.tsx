"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useBoolean,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  useColorModeValue,
 
} from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";

import ColorModeToggle from "./ColorModeToggle";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import CartIcon from "./cartIcon";
import { useRouter } from "next/navigation";
import useProduct from "../(custom-hooks)/useProduct";

export default function Navbar() {
  useEffect(() => {
    tokenHandler();
  }, []);
  const {
    handleLogout
  } = useProduct()
  const [isClicked1, setIsClicked1] = useBoolean();
  const [isClicked2, setIsClicked2] = useBoolean();
  const [isClicked3, setIsClicked3] = useBoolean();
  const [login, setLogin] = useState(false); // Use useState instead of useBoolean
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonSize = useBreakpointValue({ base: "sm", md: "md" });
  const bg = useColorModeValue("white", "black");
  const color1 = useColorModeValue("black", "white");
  const color2 = useColorModeValue("white", "black");
  const router = useRouter();
 
  const handleLogin = () => {
    router.push("/login");
  };
  const tokenHandler = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };
  return (
    <Box
      pb="90px"
      color="white"
      backgroundImage="url(https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg?w=740&t=st=1699538256~exp=1699538856~hmac=206793bc26a7bb155586be7ed40356f4ed38ae3d78aa56629e06eebd42fa4098)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
    >
      {/* Navbar for larger screens */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-evenly"
        align={{ base: "center", md: "flex-start" }}
        display={{ base: "none", md: "flex" }}
      >
        <Link mt="20px" href="/">
          Logo
        </Link>
        <Flex mt="20px" gap="20px">
          <Link href="/">Home</Link>
          <Menu>
            <MenuButton
              as={Link}
              onClick={setIsClicked1.toggle}
              fontSize={menuButtonSize}
            >
              Clothing
              {!isClicked1 ? <ChevronDownIcon /> : <ChevronUpIcon />}{" "}
            </MenuButton>
            <MenuList color={color1}>
              <Link href="/clothing/menClothing">
                <MenuItem>Men's Clothing </MenuItem>
              </Link>
              <Link href="/clothing/womenClothing">
                <MenuItem>Women's Clothing</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Link href="/bedsheet">Bedsheets</Link>
          <Menu>
            <MenuButton
              onClick={setIsClicked2.toggle}
              as={Link}
              fontSize={menuButtonSize}
            >
              Decoration
              {!isClicked2 ? <ChevronDownIcon /> : <ChevronUpIcon />}{" "}
            </MenuButton>
            <MenuList color={color1}>
              <Link href="/decoration/homeDecor">
                <MenuItem>Home Decor </MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              onClick={setIsClicked3.toggle}
              as={Link}
              fontSize={menuButtonSize}
            >
              Religious Content
              {!isClicked3 ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </MenuButton>
            <MenuList color={color1}>
              <Link href="/religiousContent/namaz">
                <MenuItem>Jai Namaz</MenuItem>
              </Link>
              <Link href="/religiousContent/tasbeeh">
                <MenuItem>Tasbeeh</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <CartIcon />
          <ColorModeToggle />
          {/* <Flex onClick={setLogin.toggle}> */}
          <Button onClick={login ? () => handleLogout() : () => handleLogin()}>
            {login ? "Log Out" : "Log in"}
          </Button>
          {/* </Flex> */}
        </Flex>
      </Flex>

      {/* Hamburger Icon and Drawer for smaller screens */}
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        p="4"
        display={{ base: "flex", md: "none" }}
      >
        <IconButton
          color={color1}
          bgColor={bg}
          icon={<HamburgerIcon />}
          aria-label="Open Navigation"
          onClick={onOpen}
        />
        <Link
          href="/"
          textAlign="center"
          fontSize="xl"
          fontWeight="bold"
          color={color2}
        >
          Logo
        </Link>
        <ColorModeToggle />
      </Flex>

      {/* Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column" align="center">
              <Link href="/">Home</Link>
              <Menu>
                <MenuButton as={Link} onClick={setIsClicked1.toggle}>
                  Clothing
                  {!isClicked1 ? <ChevronDownIcon /> : <ChevronUpIcon />}{" "}
                </MenuButton>
                <MenuList color="black">
                  <Link href="/clothing/menClothing">
                    <MenuItem>Men's Clothing </MenuItem>
                  </Link>
                  <Link href="/clothing/womenClothing">
                    <MenuItem>Women's Clothing</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
              <Link href="/bedsheet">Bedsheets</Link>
              <Menu>
                <MenuButton onClick={setIsClicked2.toggle} as={Link}>
                  Decoration
                  {!isClicked2 ? <ChevronDownIcon /> : <ChevronUpIcon />}
                </MenuButton>
                <MenuList color="black">
                  <Link href="/decoration/homeDecor">
                    <MenuItem>Home Decor </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton onClick={setIsClicked3.toggle} as={Link}>
                  Religious Content
                  {!isClicked3 ? <ChevronDownIcon /> : <ChevronUpIcon />}{" "}
                </MenuButton>
                <MenuList color="black">
                  <Link href="/religiousContent/namaz">
                    <MenuItem>Jai Namaz</MenuItem>
                  </Link>
                  <Link href="/religiousContent/tasbeeh">
                    <MenuItem>Tasbeeh</MenuItem>
                  </Link>
                </MenuList>
              </Menu>

              <CartIcon />
              <Button
                as={Link}
                onClick={login ? () => handleLogout() : () => handleLogin()}
              >
                {login ? "Log Out" : "Log in"}
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box color={{ base: "black", md: "white" }} mt="50px" textAlign="center">
        <Heading>Welcome to our e-commerce store</Heading>
      </Box>
    </Box>
  );
}
