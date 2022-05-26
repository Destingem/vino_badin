import { Card, Grid, Image, Text } from "@mantine/core";
import Link from "next/link";
import NavBar from "../NavBar/UI/Navbar";


export default function GalerieTablet(props){

    return(
        <div style={{display: "flex", flexDirection: "column"}}>
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
                Galerie
              </Text>
            </div>
          </section>
          <section  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                padding: "5vh "
              }}>
          <Grid>
              {props.data && props.data[0] && props.data.map(item => {
                  return(
                      <Grid.Col span={4}>
                      <Link href={"/galerie/" + item.id}>
                        <Card sx={{width: "100%", height: "100%", border: "1px solid #C9C9C9", justifyContent: "center", alignItems: "center", display: "flex"}}>
                        <Image  src={item.fotografie.sizes["medium"]} width={100} height={100} layout="responsive"/>
                            
                            

                          
                        </Card>
                        </Link>
                      </Grid.Col>
                  )
              })}
              </Grid>
          </section>
        </div>
    )
}