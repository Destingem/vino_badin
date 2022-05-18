import { Badge, Button, Card, Grid, Group, Paper, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
export default function SortimentLaptop(props) {

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
        {props.vina &&
          props.vina[0] &&
          props.vina.map((vino) => {
            return (
              <Grid.Col span={3} sx={{aspectRatio: 1}}>
                <Card shadow="md" sx={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                  <Card.Section>
                    <Image  src={vino.image.sizes.medium_large}
                      layout="responsive"
                      width={vino.image.sizes["medium_large-width"]}
                      height={vino.image.sizes["medium_large-height"]}
                      placeholder='blur'
                      />
                  </Card.Section>
                  <Group sx={{justifyContent: "space-between"}}>
                    <Text weight={700} size="lg" >{vino.nazev}</Text>
                    <Badge>{vino.rocnik}</Badge>
                  </Group>
                  <Text>{vino.text}</Text>
                  <Text weight={600} size="xl" sx={{position: "absolute", bottom: "5%"}}>{vino.cena} Kč</Text>
                  <Link href={"/sortiment/" + vino.id}>
                  <Button sx={{ aspectRatio: 1, marginTop: "3vh", textAlign: "right", alignSelf: "flex-end" }}>
                  
                    <MdArrowForwardIos />
                  </Button>
                  </Link>
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
