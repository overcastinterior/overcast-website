import { Outfit as Cal, Golos_Text as Golos, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const calSans = Cal({
  subsets: ["latin"],
  variable: "--font-cal",
  weight: ["400"],
  // fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'], // fallback is optional but good
});
const golosText = Golos({
  subsets: ["latin"],
  variable: "--font-golos",
});

export { inter, calSans, golosText };