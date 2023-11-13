import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function TopSalesCard(props: any) {
  return (
    <>
      <Card>
        <CardHeader>
          <Image h="250px" w="600px" src={props.image} />
        </CardHeader>
        <Divider />
        <CardBody>
          <Heading>Product Title Example</Heading>
          <Text mt="30px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            adipisci rerum natus debitis quibusdam pariatur dolore? Ea, esse.
            Odio sunt, laboriosam vel eveniet nemo est id accusamus et
            voluptatibus nam?
          </Text>
          <Text mt="30px">Rs.2000</Text>
        </CardBody>
        <CardFooter>
          <Button ml="-10px">Add to cart</Button>
        </CardFooter>
      </Card>
    </>
  );
}
