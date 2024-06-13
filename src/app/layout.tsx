import type { Metadata } from "next";
import { PT_Serif as Font } from "next/font/google";
import "./globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { ModalsProvider } from "@mantine/modals";
import Head from "next/head";

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
    <html lang="fr">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/public/assets/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/public/assets/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/public/assets/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/public/assets/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/public/assets/favicon/safari-pinned-tab.svg" color="#000202"/>
        <meta name="msapplication-TileColor" content="#000000"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <MantineProvider theme={{...theme}} defaultColorScheme="dark">
        <ModalsProvider>
          <Notifications />
          <body className={inter.className} 
          style={{
            backgroundImage: `url('/assets/images/bghero-light.webp')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          >
            {children}
          </body>
        </ModalsProvider>
      </MantineProvider>
    </html>
  );
}
