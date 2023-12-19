// // "use client";
// // import axios from "axios";
// // import { useRouter } from "next/navigation";
// // import { useState } from "react";

// // export default function UseProduct() {
// //   type productType = {
// //     description?: string;
// //     image?: string;
// //     title?: string;
// //     quantity?: number | string;
// //     price?: number | string;
// //     category?: string;
// //   };
// //   var product: productType = {
// //     description: "",
// //     image: "",
// //     title: "",
// //     quantity: "",
// //     price: "",
// //     category: "",
// //   };
// //   const [isHovered, setHovered] = useState(false);
// //   const [quantity, setQuantity] = useState(1);
// //   const router = useRouter();

// //   const productStyle = {
// //     textDecorationLine: isHovered ? "none" : "none",
// //   };
// //   const increment = () => {
// //     setQuantity(quantity + 1);
// //   };
// //   const decrement = () => {
// //     if (quantity > 1) {
// //       setQuantity(quantity - 1);
// //     }
// //   };
// //   const ProductId = async (id: any) => {
// //     try {
// //       const sendingId = await axios.post("http://localhost:8020/id", {
// //         id: id,
// //       });
// //       console.log("sending id", sendingId);
// //       console.log("sending idRES", sendingId.data);
// //       console.log("id", id);
// //       product = sendingId.data;
// //       router.push("/productDetail");
// //       console.log(product);
// //     } catch (e) {
// //       console.log("getting id error", e);
// //     }
// //   };
// //   return {
// //     productStyle,
// //     isHovered,
// //     setHovered,
// //     product,
// //     ProductId,
// //     quantity,
// //     increment,
// //     setQuantity,
// //     decrement,
// //   };
// // }
// // "use client" - Assuming you're using this for Next.js

// // import axios from "axios";
// // import { useRouter } from "next/navigation";
// // import { useState } from "react";

// // export default function UseProduct() {
// //   type productType = {
// //     description?: string;
// //     image?: string;
// //     title?: string;
// //     quantity?: number | string;
// //     price?: number | string;
// //     category?: string;
// //   };

// //   const [isHovered, setHovered] = useState(false);
// //   const [quantity, setQuantity] = useState(1);
// //   //let product: productType = {
// //   const [product, setProduct] = useState<productType>({
// //     description: "",
// //     image: "",
// //     title: "",
// //     quantity: "",
// //     price: "",
// //     category: "",
// //   });
// //   const router = useRouter();

// //   const productStyle = {
// //     textDecorationLine: isHovered ? "none" : "none",
// //   };

// //   const increment = () => {
// //     setQuantity(quantity + 1);
// //   };

// //   const decrement = () => {
// //     if (quantity > 1) {
// //       setQuantity(quantity - 1);
// //     }
// //   };

// //   const navigateToProductDetail = () => {
// //     router.push("/productDetail");
// //   };

// //   const ProductId = async (id: any) => {
// //     try {
// //       const sendingId = await axios.post("http://localhost:8020/id", {
// //         id: id,
// //       });

// //       const newProduct = sendingId.data;
// //       console.log("sending id", sendingId);
// //       console.log("sending idRES", sendingId.data);
// //       console.log("id", id);
// //       setProduct(newProduct);
// //       setQuantity(1); // Reset quantity when navigating to a new product
// //       console.log(product);
// //       navigateToProductDetail();
// //     } catch (e) {
// //       console.log("getting id error", e);
// //     }
// //   };
// //   console.log(product, "product");

// //   return {
// //     productStyle,
// //     isHovered,
// //     setHovered,
// //     product,
// //     ProductId,
// //     quantity,
// //     increment,
// //     setQuantity,
// //     decrement,
// //   };
// // }
// // "use client" - Assuming you're using this for Next.js

// "use client";

// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function UseProduct() {
//   const [product, setProduct] = useState([
//     {
//       title: "",
//       description: "",
//       category: "",
//       image: "",
//       price: 0.0,
//       quantity: 1,
//     },
//   ]);
//   const router = useRouter();

//   const productStyle = {
//     textDecorationLine: isHovered ? "none" : "none",
//   };

//   // useEffect(() => {
//   //   if (shouldNavigate) {
//   //     navigateToProductDetail();
//   //   }
//   // }, [shouldNavigate]);

//   const ProductId = async (idd: any) => {
//     try {
//       const sendingId = await axios.post("http://localhost:8020/id", {
//         id: idd,
//       });

//       const id = sendingId.data;
//       setProduct(id);
//       console.log("id", id);
//       console.log("sendingId", sendingId.data);

//       setQuantity(1);
//       // router.push("/productDetail", id);
//     } catch (e) {
//       console.log("getting id error", e);
//     }
//   };
//   // console.log("product", product);

//   return {
//     productStyle,
//     isHovered,
//     setHovered,
//     product,
//     ProductId,

//   };
// }
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useProduct() {
  const [cart, setCart] = useState([]);

  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
    setCart([])
  };

  return {
    handleLogout,
    cart,
    setCart,
  };
}
