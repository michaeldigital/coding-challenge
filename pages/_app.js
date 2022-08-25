import "../styles/globals.css";
import ReduxProvider from "../src/components/common/ReduxProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
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
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
