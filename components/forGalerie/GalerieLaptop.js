import { Card, Grid, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Footer from "../NavBar/UI/Footer";
import NavBar from "../NavBar/UI/Navbar";


export default function GalerieLaptop(props){

    return(
        <>
            <section
            style={{
              width: "100%",
              height: "100vh",
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
                sx={{ color: "white", fontSize: "6rem", textAlign: "center" }}
              >
                Galerie
              </Text>
            </div>
          </section>
          <section  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
             
                padding: "5vh "
              }}>
          <Grid>
              {props.data && props.data[0] && props.data.map(item => {
                  return(
                      <Grid.Col span={3} >
                        <Link href={"/galerie/" + item.id}>
                        <Card sx={{width: "100%", height: "100%", border: "1px solid #C9C9C9", justifyContent: "center", alignItems: "center", display: "flex", padding: "0 !important", aspectRatio: 1}}>
                        <div>
                        <Image width={item.fotografie.sizes["medium-width"]} height={item.fotografie.sizes["medium-height"]} src={item.fotografie.sizes["medium"]}   />
                        </div>
                    
                        </Card>
                        </Link>
                      </Grid.Col>
                  )
              })}
              </Grid>
          </section>
          <Footer />
        </>
    )
}