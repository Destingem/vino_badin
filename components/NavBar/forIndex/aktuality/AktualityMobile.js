import { Button, Card, Grid, Text } from "@mantine/core";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
export default function AktualityMobile() {
  const [data, setData] = useState([
    {
      nadpis: "This is a header",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    },
    {
      nadpis: "This is a header",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    },
    {
      nadpis: "This is a header",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      nadpis: "This is a header",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
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
           Aktuality
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
          Aktuality z našeho vinařství
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
        {data &&
          data.map((aktualita) => {
            return (
              <div style={{ padding: "2vh 1vh 2vw 1vh" }}>
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
                    {aktualita.nadpis}
                  </Text>
                  <Text>{aktualita.text}</Text>
                  <Button sx={{ aspectRatio: 1, marginTop: "3vh" }}>
                    <MdArrowForwardIos />
                  </Button>
                </Card>
              </div>
            );
          })}
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
