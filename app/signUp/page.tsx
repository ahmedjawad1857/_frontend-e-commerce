"use client";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Button,
  useColorModeValue,
  Heading,
  Select,
  useToast,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const toast = useToast();

  const sendingData = async () => {
    try {
      const sendingUser = await axios.post(`http://localhost:8020/signUp`, {
        email: email,
        password: password,
      });

      const token = sendingUser.data;
      console.log("authentication passed");
      console.log("sending user", sendingUser);

      if (isAdmin == "admin") {
        router.push("/login");
        toast({
          title: "We,ve created account for you",
          description: "Now You can add product but  now you do sign In first",
          status: "success", // "success", "error", "warning", "info"
          duration: 3000, // Duration in milliseconds
          isClosable: true, // Whether to show a close button
        });
      } else {
        router.push("/login");
        toast({
          title: "We,ve created account for you",
          description: "Now enjoy shopping but  now you do sign In first",
          status: "success", // "success", "error", "warning", "info"
          duration: 3000, // Duration in milliseconds
          isClosable: true, // Whether to show a close button
        });
      }
    } catch (e) {
      console.log("authentication error", e);
      toast({
        title: "There was an error occuring while signing Up",
        description:
          "We are so sorry We think so that we fix the problem you will try later",
        status: "error", // "success", "error", "warning", "info"
        duration: 3000, // Duration in milliseconds
        isClosable: true, // Whether to show a close button
      });
    }
  };

  const color = useColorModeValue("white", "black");
  const bg = useColorModeValue("black", "white");

  return (
    <>
      <Heading>Sign Up Form</Heading>
      <form style={{ marginTop: "20px" }}>
        <FormControl w={{ base: "100%", md: "50%" }}>
          <FormLabel>
            Email <sup style={{ color: "red" }}>*</sup>
          </FormLabel>
          <Input
            isRequired
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mt="20px" w={{ base: "100%", md: "50%" }}>
          <FormLabel>
            Password <sup style={{ color: "red" }}>*</sup>
          </FormLabel>
          <InputGroup>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              isRequired
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
            />
            <InputRightElement
              width="4.5rem"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              <Box>{showPassword ? <ViewOffIcon /> : <ViewIcon />}</Box>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl mt="20px">
          <Select
            w={{ base: "100%", md: "50%" }}
            onChange={(e) => setIsAdmin(e.target.value)}
          >
            <option
              disabled
              selected
              hidden
              value="Select Your product category"
            >
              Select Option...
            </option>
            <option value="admin">admin</option>

            <option value="user">user</option>
          </Select>
        </FormControl>
        <FormControl w={{ base: "100%", md: "50%" }} mt="20px">
          <Button
            w="100%"
            color={color}
            bgColor={bg}
            onClick={() => sendingData()}
          >
            Sign Up
          </Button>
        </FormControl>
      </form>
      <br />
      <Link href="/login" color={"blue"} mt="20px">
        Already have an account? signIn
      </Link>
    </>
  );
}
