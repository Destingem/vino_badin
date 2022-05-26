import { Button, Card, Grid, Text } from "@mantine/core";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
export default function AktualityLaptop(props) {

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
          Aktuality
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
         {props.text}
        </Text>
      </div>
      <Grid
        sx={{
          padding: "0 5vw 0 5vw",
          marginTop: "10vh",
          aspectRatio: 1 / 1
        }}
      >
        {props.data &&
          props.data.map((aktualita) => {
            return (
              <Grid.Col span={3} sx={{ padding: "2vh 1vh 2vw 1vh"}}>
                <Card shadow="md" sx={{ display: "flex", flexDirection: "column" ,alignItems: "flex-end", textAlign: "left", width: "100%", height: "100%",  }}>
                  <Text size="lg" weight={700} sx={{width: "100%"}}>{aktualita.nadpis.slice(0, 30)}</Text>
                  <Text sx={{marginBottom: "3vh"}}>{aktualita.text.slice(0, 200)}</Text>
                  <Link href={"/aktuality/" + aktualita.id}>
                  <Button sx={{ aspectRatio: 1, marginTop: "3vh" , position: "absolute",
              bottom: "3vh"}}>
                    <MdArrowForwardIos />
                  </Button>
                  </Link>
                </Card>
                
              </Grid.Col>
            );
          })}
      </Grid>
      <Link href="/aktuality">
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
            Aktuality
          </Button>
          </Link>
    </>
  );
}
