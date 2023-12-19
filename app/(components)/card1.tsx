"use client";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Card, Text, Box, Link, GridItem } from "@chakra-ui/react";

export default function Card1(props: any) {
  return (
    <>
      <GridItem>
        <Card
          bgImage={props.bg}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          h="400px"
          display="flex"
          justifyContent="center"
          textAlign={"center"}
        >
          <Link
            href={props.link}
            _hover={{
                textDecorationLine:"underline",
              textDecorationColor: "white",
            }}
          >
            <Text fontSize={"25px"} color={"white"}>
              <ArrowForwardIcon boxSize={"30px"} /> {props.text} Collection
            </Text>
          </Link>
        </Card>
      </GridItem>
    </>
  );
}
