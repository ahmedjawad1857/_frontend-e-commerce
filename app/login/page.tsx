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
  useToast,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { warning } from "framer-motion";

export default function User() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const toast = useToast();
  const sendingData = async () => {
    try {
      const sendingUser = await axios.post(`http://localhost:8020/signIn`, {
        email: email,
        password: password,
      });

      //   const token = sendingUser.data;
      console.log("authentication passed");
      console.log("sending user", sendingUser.data);
      //   console.log("token", token);
      const isAdmin = sendingUser.data.isAdmin;
      const token = sendingUser.data.token;
      console.log("token", token);

      localStorage.setItem("token", token);
      //   localStorage.setItem("token", token);
      if (isAdmin == "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
      toast({
        title: ` ${sendingUser.data.title}`,
        description: ` ${sendingUser.data.description}`,
        status: "error",
        duration: 3000, // Duration in milliseconds
        isClosable: true,
      });
    } catch (e) {
      console.log("authentication error", e);
    }
  };

  const color = useColorModeValue("white", "black");
  const bg = useColorModeValue("black", "white");

  return (
    <>
      <Heading>Sign In form</Heading>
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
        <FormControl w={{ base: "100%", md: "50%" }} mt="20px">
          <Button
            w="100%"
            color={color}
            bgColor={bg}
            onClick={() => sendingData()}
          >
            Sign In
          </Button>
        </FormControl>
      </form>
      <br />
      <Link href="/signUp" color={"blue"}>
        Don't have an account? SignUp
      </Link>
    </>
  );
}
