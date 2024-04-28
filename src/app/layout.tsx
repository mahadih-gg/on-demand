import type { Metadata } from "next";
import "@/styles/globals.scss";
import "@/styles/styles.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "@/styles/overwrite.scss";
import { Poppins } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import AntdStyledComponentsRegistry from "@/common/provider/AntdProviderRegistry";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "On Demand Site",
  description: "On Demand Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <AntdStyledComponentsRegistry>

        <body className={poppins.className}>
          <Navbar />
          <>
            {children}
          </>
        </body>
      </AntdStyledComponentsRegistry>
    </html>
  );
}
