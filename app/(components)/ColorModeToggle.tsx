// pages/color-mode-page.js
import {
  Box,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

const ColorModePage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "black");
  return (
    <IconButton
      color={color}
      bgColor={bg}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      ml="2"
    />
  );
};

export default ColorModePage;
