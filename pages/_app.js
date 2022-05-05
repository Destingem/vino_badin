import '../styles/globals.css'
import {MantineProvider} from "@mantine/core"
import { MediaContextProvider } from './Media'
import { useEffect, useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else{
  return (
    <MediaContextProvider>
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: "light",
    }}
  >
  <Component {...pageProps} />
  </MantineProvider>
  </MediaContextProvider>
  )
}
}

export default MyApp
