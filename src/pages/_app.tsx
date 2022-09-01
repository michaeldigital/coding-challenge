import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // To fix the error about server does not match client, which happens after upgrade to React 18.
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  }
  return <Component {...pageProps} />;
}

export default MyApp;
