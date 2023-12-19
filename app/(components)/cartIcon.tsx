// Example in React functional component using useEffect and useState
// Example in React functional component using useEffect and useState
import { useEffect, useState } from "react";
import axios from "axios";
import { BiCart } from "react-icons/bi";
import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";

const CartIcon = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart data when the component mounts
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:8020/gettingCart");
        // Ensure that 'findedData' is an array before setting the state
        const cartData = response.data.findedData || [];
        setCart(cartData);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  // Render your cart icon and display the number of items in the cart
  return (
    <Link href="/cart">
      <Flex>
        Cart <Icon as={BiCart} boxSize={6}/> ({cart.length || 0}) 
      </Flex>
    </Link>
  );
};

export default CartIcon;
