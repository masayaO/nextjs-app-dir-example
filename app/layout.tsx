import Provider from "./Provider";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title></title>
      </head>
      <body>
        <Provider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
