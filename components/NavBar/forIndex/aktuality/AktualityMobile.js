import { Button, Card, Grid, Text } from "@mantine/core";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
export default function AktualityMobile(props) {
console.log(props);
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
            fontSize: "6vw",
            marginTop: "0",
            padding: "5vw 5vw 2vw 5vw",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
           Aktuality
        </Text>
        <Text
          size="xl"
          sx={{
            color: "black",
              fontSize: "3vw",
              marginTop: "0",
              padding: "0 5vw 0 5vw",
              fontWeight: "400",
          }}
        >
          {props.text}
        </Text>
      </div>
      <div
        style={{
          padding: "0 5vw 0 5vw",
          marginTop: "10vh",
          aspectRatio: 1 / 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
      <Grid>
        {props.data &&
          props.data.map((aktualita) => {
            return (
              <Grid.Col span={6} sx={{ padding: "2vh 1vh 2vw 1vh" }}>
                <Card
                  shadow="md"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    textAlign: "left",
                  }}
                >
                  <Text size="lg" weight={700} sx={{ width: "100%" }}>
                    {aktualita.nadpis.slice(0, 30)}
                  </Text>
                  <Text>{aktualita.text.slice(0, 150)}</Text>
                 
                  <Link href={"/aktuality/" + aktualita.id}>
                  <Button sx={{ aspectRatio: 1, marginTop: "3vh" }}>
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
              width: "100%",
              margin: "2vh 0 2vh 0",
              minWidth: "fit-content",
            }}
          >
            Aktuality
          </Button>
        </Link>
      </div>
    </>
  );
}
