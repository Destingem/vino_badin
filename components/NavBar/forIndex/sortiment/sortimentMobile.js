import { useState } from "react";
import { Text, Grid, Card, Group, Badge, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export default function SortimentMobile() {
  const [data, setData] = useState([
    {
      img: "/images/mplahev.png",
      nazev: "Modrý portugal",
      popis:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      cena: "139",
      rocnik: "2018",
    },
    {
      img: "/images/svatovav.png",
      nazev: "Svatovavřinecké",
      popis:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      cena: "249",
      rocnik: "2018",
    },
   
  ]);
  return (
    <>
      <div
        style={{
          padding: "0 2vw 0 5vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          size="xl"
          sx={{
            color: "black",
            fontSize: "10vw",
            marginTop: "0",
            padding: "5vw 5vw 2vw 5vw",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Vína
        </Text>
        <Text
          size="xl"
          sx={{
            color: "black",
              fontSize: "5vw",
              marginTop: "0",
              padding: "0 5vw 0 5vw",
              fontWeight: "400",
          }}
        >
          Malé rodinné vinařství Badinovi bylo založeno v roce 1992. Navázali
          jsme na zkušenosti našich rodičů a prarodičů, kteří se věnovali vínu
          již od roku 1960. Snažíme se o produkci vín z hroznů vypěstovaných
          převážně ve vlastních vinicích.
        </Text>
      </div>
      <Grid
        sx={{
          padding: "0 5vw 0 5vw",
          
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "5vh",
          alignItems: "center",
          margin: 0,
          marginTop: "10vh",
        }}
      >
        {data &&
          data[0] &&
          data.map((vino) => {
            return (
              <div style={{justifyContent: "center"}}>
                <Card
                  shadow="md"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  <Card.Section>
                    <Image
                      src={vino.img}
                      layout="responsive"
                      width={1536}
                      height={1024}
                    />
                  </Card.Section>
                  <Group sx={{ justifyContent: "space-between" }}>
                    <Text weight={700} size="lg">
                      {vino.nazev}
                    </Text>
                    <Badge>{vino.rocnik}</Badge>
                  </Group>
                  <Text>{vino.popis}</Text>
                  <Button
                    sx={{
                      aspectRatio: 1,
                      marginTop: "3vh",
                      textAlign: "right",
                      alignSelf: "flex-end",
                    }}
                  >
                    <MdArrowForwardIos />
                  </Button>
                </Card>
              </div>
            );
          })}
          <Link href="/sortiment">
          <Button
            color="gray"
            variant="outline"
            radius="sm"
            size="xl"
            sx={{
              color: "black",
              borderColor: "black",
              width: "100%",
              minWidth: "fit-content",
              
            }}
          >
            Sortiment
          </Button>
          </Link>
      </Grid>
      
    </>
  );
}
