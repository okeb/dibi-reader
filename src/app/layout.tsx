import type { Metadata } from "next";
import { PT_Serif as Font } from "next/font/google";
import "./globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { ModalsProvider } from "@mantine/modals";

const inter = Font({ weight: ['400', '700'], subsets: ['latin-ext'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: "The bible Reader",
  description: "The Holy Bible Reader App",
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MantineProvider theme={{...theme}} defaultColorScheme="dark">
        <ModalsProvider>
          <Notifications />
          <body className={inter.className} 
          style={{
            backgroundColor: "#010101",
            color:"white",
            backgroundImage: `url('/assets/images/bghero-light.webp')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          >{children}</body>
        </ModalsProvider>
      </MantineProvider>
    </html>
  );
}
