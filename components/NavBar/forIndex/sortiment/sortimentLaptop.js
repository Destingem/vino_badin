import { Badge, Button, Card, Grid, Group, Paper, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
export default function SortimentLaptop() {
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
    {
      img: "/images/zwei.png",
      nazev: "Zweigeltrebe",
      popis:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      cena: "199",
      rocnik: "2018",
    },
    {
      img: "/images/frankovka.png",
      nazev: "Frankovka",
      popis:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      cena: "169",
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
            fontSize: "4.125vw",
            marginTop: "0",
            padding: "5vw 0 2vw 0",
            fontWeight: "600",
          }}
        >
          Vína
        </Text>
        <Text
          size="xl"
          sx={{
            color: "black",
            fontSize: "1.2vw",
            marginTop: "0",
            padding: "0 0 2vw 0",
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
          marginTop: "10vh"
          
        }}
      >
        {data &&
          data[0] &&
          data.map((vino) => {
            return (
              <Grid.Col span={3} sx={{aspectRatio: 1}}>
                <Card shadow="md" sx={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                  <Card.Section>
                    <Image src={vino.img} layout="responsive" width={1536} height={1024} />
                  </Card.Section>
                  <Group sx={{justifyContent: "space-between"}}>
                    <Text weight={700} size="lg" >{vino.nazev}</Text>
                    <Badge>{vino.rocnik}</Badge>
                  </Group>
                  <Text>{vino.popis}</Text>
                  <Button sx={{ aspectRatio: 1, marginTop: "3vh", textAlign: "right", alignSelf: "flex-end" }}>
                    <MdArrowForwardIos />
                  </Button>
                </Card>
              </Grid.Col>
            );
          })}
        
      </Grid>
      <Link href="/sortiment">
          <Button
            color="gray"
            variant="outline"
            radius="sm"
            size="xl"
            sx={{
              color: "black",
              borderColor: "black",
              width: "12vw",
              minWidth: "fit-content",
              margin: "3vh 2vw 0 5vw",
            }}
          >
            Sortiment
          </Button>
          </Link>
    </>
  );
}
