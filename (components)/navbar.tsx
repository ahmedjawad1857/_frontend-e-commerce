import {
  Flex,
  Link,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      h="300"
      color="white"
      backgroundImage="url(https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg?w=740&t=st=1699538256~exp=1699538856~hmac=206793bc26a7bb155586be7ed40356f4ed38ae3d78aa56629e06eebd42fa4098)"
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Flex justifyContent={"space-around"}>
        <Link mt="20px" href="/">
          Logo
        </Link>
        <Flex mt="20px" gap="20px">
          <Link href="/">Home</Link>
          <Link href="/bedsheet">Bedsheets</Link>
          <Menu>
            <MenuButton as={Link}>Clothing</MenuButton>
            <MenuList color={"black"}>
              <Link href="/clothing/menClothing">
                <MenuItem>Men's Clothing </MenuItem>
              </Link>
              <Link href="/clothing/womenClothing">
                <MenuItem>Women's Clothing</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Link}>Decoration</MenuButton>
            <MenuList color={"black"}>
              <Link href="/decoration/homeDecor">
                <MenuItem>Home Decor </MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Link}>Religious Content</MenuButton>
            <MenuList color={"black"}>
              <Link href="/religiousContent/namaz">
                <MenuItem>Jai Namaz</MenuItem>
              </Link>
              <Link href="/religiousContent/tasbeeh">
                <MenuItem>Tasbeeh</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Button>
            <Link href="/admin">Admin</Link>
          </Button>
        </Flex>
      </Flex>
      <Box color="blackAlpha.700" mt="70px" textAlign={"center"}>
        <Heading>Welcome to our e-commerce store</Heading>
      </Box>
    </Box>
  );
}
