import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Box mt="50px" bgColor={"blackAlpha.800"} color="white">
        <br/>
        <Heading fontSize={"30px"} textAlign={"center"}>
          Thanks For Visiting Our Store
        </Heading>
        <Heading fontSize={"30px"} textAlign={"center"} mt="60px">
          For Stay Tuned Subscribe Us On Social Media
        </Heading>
        <Flex justifyContent={"center"} gap="10px" mt="30px">
          <Image src="https://img.icons8.com/?size=48&id=19318&format=png" />
          <Image src="https://img.icons8.com/?size=48&id=118497&format=png" />
          <Image src="https://img.icons8.com/?size=48&id=13963&format=png" />
          <Image src="https://img.icons8.com/?size=48&id=118640&format=png" />
        </Flex>
        <br />
      </Box>
    </>
  );
}

export default Footer;
