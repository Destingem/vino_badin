import NavBar from "../NavBar/UI/Navbar";
import { Text, Grid, Card, Button, Group, Badge } from "@mantine/core";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

export default function TabletSortiment(props){


    return(
        <div>
        <section
          style={{
            width: "100%",
            height: "50vh",
            backgroundImage: 'url("images/grape.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            minHeight: "fit-content",
          }}
        >
          <NavBar backgroundColor="#fff" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text
              size="xl"
              sx={{ color: "white", fontSize: "13vw", textAlign: "center" }}
            >
              Sortiment
            </Text>
          </div>
        </section>
        <section>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5vh",
              padding: "1vh 2vw 0 2vw",
            }}
          >
             <Grid>
             {props.vina &&
        props.vina[0] &&
        props.vina.map((vino) => {
          return (
            <Grid.Col span={6} sx={{aspectRatio: 1}}>
              <Card shadow="md" sx={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                <Card.Section>
                { vino.image ? <Image  src={vino.image.sizes.medium_large}
                    layout="responsive"
                    width={vino.image.sizes["medium_large-width"]}
                    height={vino.image.sizes["medium_large-height"]}/> : <Image  src="/images/vinoplaceholder.svg"
                    layout="responsive" width={1200} height={1200} />}
                </Card.Section>
                <Group sx={{justifyContent: "space-between"}}>
                  <Text weight={700} size="lg" >{vino.nazev}</Text>
                  <Badge>{vino.rocnik}</Badge>
                </Group>
                <Text>{vino.text}</Text>
                <Text size="xl" weight={600} sx={{position: "absolute", bottom: "5%"}}>{vino.cena} Kč</Text>
                <Link href={"/sortiment/" + vino.id}><Button sx={{ aspectRatio: 1, marginTop: "3vh", textAlign: "right", alignSelf: "flex-end" }}>
                  <MdArrowForwardIos />
                </Button>
                </Link>
              </Card>
            </Grid.Col>
          );
        })}
        </Grid>
          </div>
        </section>
      </div>
    )
}