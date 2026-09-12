import { Montserrat, Fraunces, Archivo, Space_Mono } from "next/font/google";

export const montserratLight = Montserrat({
  weight: "300",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const fraunces = Fraunces({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-display",
});

export const archivo = Archivo({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-body",
});

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
