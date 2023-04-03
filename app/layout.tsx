import Link from "next/link";
import {ChakraProvider} from "@chakra-ui/react";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
    <head><title></title></head>
    <body>
    <ChakraProvider>
      <header>
        <h1>
          <Link href="/">ブログ</Link>
        </h1>
        <Link href="/articles/new">記事を書く</Link>
      </header>
      {children}
      <footer>
        <small>© 2023 azukiazusa</small>
      </footer>
    </ChakraProvider>
    </body>
    </html>
  );
}