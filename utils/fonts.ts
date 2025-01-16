import localFont from "next/font/local";
import { Dancing_Script } from "next/font/google";

export const dancingScript = Dancing_Script({
  style: "normal",
  weight: ["400", "500", "600"],
});

export const balooDa2 = localFont({
  src: [
    {
      path: "../assets/fonts/Baloo_Da_2/BalooDa2-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/Baloo_Da_2/BalooDa2-Medium.ttf",
      style: "medium",
      weight: "500",
    },
    {
      path: "../assets/fonts/Baloo_Da_2/BalooDa2-SemiBold.ttf",
      style: "semibold",
      weight: "600",
    },
    {
      path: "../assets/fonts/Baloo_Da_2/BalooDa2-Bold.ttf",
      style: "bold",
      weight: "700",
    },
  ],
});

export const josefinSans = localFont({
  src: [
    {
      path: "../assets/fonts/Josefin_Sans/JosefinSans-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/Josefin_Sans/JosefinSans-Medium.ttf",
      style: "medium",
      weight: "500",
    },
    {
      path: "../assets/fonts/Josefin_Sans/JosefinSans-SemiBold.ttf",
      style: "semibold",
      weight: "600",
    },
    {
      path: "../assets/fonts/Josefin_Sans/JosefinSans-Bold.ttf",
      style: "bold",
      weight: "700",
    },
  ],
});

export const teko = localFont({
  src: [
    {
      path: "../assets/fonts/Teko/Teko-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/Teko/Teko-Medium.ttf",
      style: "medium",
      weight: "500",
    },
    {
      path: "../assets/fonts/Teko/Teko-SemiBold.ttf",
      style: "semibold",
      weight: "600",
    },
    {
      path: "../assets/fonts/Teko/Teko-Bold.ttf",
      style: "bold",
      weight: "700",
    },
  ],
});
