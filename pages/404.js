import { Text } from "@mantine/core";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Head from "next/head";
export default function NotFound() {
  const [cas, setCas] = useState(7);
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCas((cas) => {
        if (cas == 7) {
          return 6;
        } else {
          return cas - 1;
        }
      });
      clearTimeout(timeout);
    }, 1000);
  }, [cas]);
  if (cas < 1) {
    router.replace("/");
  }

  return (
    <>
      <Head>
        <title>Stránka nenalezena</title>
        <meta
          name="description"
          content="Stránka nebyla nalezena"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div>
        <Text size="lg" component="h1">Stránka nenalezena</Text>
        <Text size="md">Budete přesměrováni během {cas} sekund</Text>
      </div>
    </>
  );
}
