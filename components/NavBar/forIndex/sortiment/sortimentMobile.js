import { useState } from "react";
import { Text, Grid, Card, Group, Badge, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { Media } from "../../../../pages/Media";

export default function SortimentMobile(props) {
console.log(props);
  return (
    <>
<Media between={["zero", "mobile"]}>
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
          {props.text}
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
        {props.vina &&
          props.vina[0] &&
          props.vina.map((vino) => {
            return (
              <div style={{justifyContent: "center"}}>
                <Card
                  shadow="md"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    width: "90vw"
                  }}
                >
                  <Card.Section>
                
                  { vino.image ? <Image  src={vino.image.sizes.medium_large}
                    layout="responsive"
                    width={vino.image.sizes["medium_large-width"]}
                    height={vino.image.sizes["medium_large-height"]}/> : <Image  src="/images/vinoplaceholder.svg"
                    layout="responsive" width={1200} height={1200} />}
                  </Card.Section>
                  <Group sx={{ justifyContent: "space-between" }}>
                    <Text weight={700} size="lg">
                      {vino.nazev}
                    </Text>
                    <Badge>{vino.rocnik}</Badge>
                  </Group>
                  <Text >{vino.text}</Text>
                  <Text weight={600} size="xl" sx={{position: "absolute", bottom: "5%"}}>{vino.cena} Kč</Text>
                  <Link href={"/sortiment/" + vino.id}>
                  <Button
                    sx={{
                      aspectRatio: 1,
                      marginTop: "3vh",
                      textAlign: "right",
                      alignSelf: "flex-end",
                    }}
                  ><MdArrowForwardIos />
                  </Button>
                  </Link>
                    
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
      
</Media>
<Media between={["mobile", "tablet"]}>
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
          Vína
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
      <Grid>
        {props.vinaTablet &&
          props.vinaTablet[0] &&
          props.vinaTablet.map((vino) => {
            return (
              <Grid.Col span={6} sx={{justifyContent: "center"}}>
                <Card
                  shadow="md"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  <Card.Section>
                
                  { vino.image ? <Image  src={vino.image.sizes.medium_large}
                    layout="responsive"
                    width={vino.image.sizes["medium_large-width"]}
                    height={vino.image.sizes["medium_large-height"]}/> : <Image  src="/images/vinoplaceholder.svg"
                    layout="responsive" width={1200} height={1200} />}
                  </Card.Section>
                  <Group sx={{ justifyContent: "space-between" }}>
                    <Text weight={700} size="lg">
                      {vino.nazev}
                    </Text>
                    <Badge>{vino.rocnik}</Badge>
                  </Group>
                  <Text >{vino.text}</Text>
                  <Text weight={600} size="xl" sx={{position: "absolute", bottom: "5%"}}>{vino.cena} Kč</Text>
                  <Link href={"/sortiment/" + vino.id}>
                  <Button
                    sx={{
                      aspectRatio: 1,
                      marginTop: "3vh",
                      textAlign: "right",
                      alignSelf: "flex-end",
                    }}
                  ><MdArrowForwardIos />
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
              width: "100%",
              minWidth: "fit-content",
              
            }}
          >
            Sortiment
          </Button>
          </Link>
      </Grid>
      
</Media>
    </>
  );
}
