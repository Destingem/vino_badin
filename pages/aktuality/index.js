import { Button, Grid, Paper, Text } from "@mantine/core";
import Head from "next/head";
import { useState } from "react";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";
import dayjs from "dayjs";
import Footer from "../../components/NavBar/UI/Footer";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
export default function Aktuality(props) {
  console.log("", props);
  var data = []
  
  return (
    <>
      <Head>
        <title>Aktuality | Vinarštví Badinovi</title>
        <meta name="description" content="Aktuality z našeho vinařství" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Media between={["zero", "mobile"]}>
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
                component="h1"
              >
                Aktuality
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
              {props.data &&
                props.data.map((novinka) => {
                  return (
                    <div>
                      <Paper shadow="xl" p={10} sx={{display: "flex", flexDirection: "column"}}>
                        <div
                          style={{
                            display: "flex",
                         
                            gap: "5%",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: "#A54E4E",
                              color: "#fff",
                              height: "100%",
                              flexDirection: "column",
                              padding: "2% 5% ",
                              borderRadius: "3px",
                            }}
                          >
                            <Text
                              size="xl"
                              sx={{ fontWeight: "700", fontSize: "1.5rem" }}
                            >
                              {dayjs(novinka.datum, "D-M-YYYY").format("D")}
                            </Text>
                            <div style={{ display: "flex" }}>
                              <Text
                                size="xl"
                                sx={{ fontWeight: "400", fontSize: "1rem" }}
                              >
                                {dayjs(novinka.datum).format("M")}
                              </Text>
                              <Text
                                size="xl"
                                sx={{ fontWeight: "400", fontSize: "1rem" }}
                              >
                                {dayjs(novinka.datum).format("YYYY")}
                              </Text>
                            </div>
                          </div>
                          <Text
                            size="xl"
                            sx={{ fontWeight: "600", fontSize: "2rem" }}
                          >
                            {novinka.nadpis.slice(0, 30)}
                          </Text>
                        </div>
                        <Text>{novinka.text.slice(0, 250)}</Text>
                        <Link href={"/aktuality/" + novinka.id}>
                        <Button
                          sx={{
                            backgroundColor: "rgb(147, 37, 37)",
                            aspectRatio: 1,
                            textAlign: "right",
                            aspectRatio: 1,
                            marginTop: "3vh",
                            alignSelf: "flex-end",
                          }}
                          color="red"
                        >
                         
                          <MdArrowForwardIos />
                        </Button>
                        </Link>
                      </Paper>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </Media>
      <Media between={["mobile", "tablet"]}>
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
                Aktuality
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
              {props.data &&
                props.data.map((novinka) => {
                  return (
                    
                     <Grid.Col span={6}>
                     <Paper shadow="xl" p={10} sx={{display: "flex", flexDirection: "column"}}>
                        <div
                          style={{
                            display: "flex",
                          
                            gap: "5%",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: "#A54E4E",
                              color: "#fff",
                              height: "100%",
                              flexDirection: "column",
                              padding: "2% 5% ",
                              borderRadius: "3px",
                            }}
                          >
                            <Text
                              size="xl"
                              sx={{ fontWeight: "700", fontSize: "1.5rem" }}
                            >
                              {dayjs(novinka.datum, "D-M-YYYY").format("D")}
                            </Text>
                            <div style={{ display: "flex" }}>
                              <Text
                                size="xl"
                                sx={{ fontWeight: "400", fontSize: "1rem" }}
                              >
                                {dayjs(novinka.datum).format("M")}
                              </Text>
                              <Text
                                size="xl"
                                sx={{ fontWeight: "400", fontSize: "1rem" }}
                              >
                                {dayjs(novinka.datum).format("YYYY")}
                              </Text>
                            </div>
                          </div>
                          <Text
                            size="xl"
                            sx={{ fontWeight: "400", fontSize: "2rem" }}
                          >
                            {novinka.nadpis.slice(0,50)}
                          </Text>
                        </div>
                        <Text>{novinka.text.slice(0, 250)}</Text>
                        <Link href={"/aktuality/" + novinka.id}>
                        <Button
                          sx={{
                            backgroundColor: "rgb(147, 37, 37)",
                            aspectRatio: 1,
                            textAlign: "right",
                            aspectRatio: 1,
                            marginTop: "3vh",
                            alignSelf: "flex-end",
                          }}
                          color="red"
                        >
                         
                          <MdArrowForwardIos />
                        </Button>
                        </Link>
                      </Paper>
                     </Grid.Col>
                   
                  );
                })}
                </Grid>
            </div>
          </section>
        </div>
      </Media>
      <Media between={["tablet", "laptop"]}>
      <div>
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
                Aktuality
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
                minHeight: "100vh"
              }}
            >
            <Grid>
              {props.data &&
                props.data.map((novinka) => {
                  return (
                    
                     <Grid.Col span={4} key={novinka.id}>
                     <Paper shadow="xl" p={10} sx={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
                        <div
                          style={{
                            display: "flex",
                          
                            gap: "5%",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: "#A54E4E",
                              color: "#fff",
                              height: "fit-content",
                              flexDirection: "column",
                              padding: "2% 5% ",
                              borderRadius: "3px",
                            }}
                          >
                            <Text
                              size="xl"
                              sx={{ fontWeight: "700", fontSize: "1.5rem" }}
                            >
                              {dayjs(novinka.datum.replace("-", "/"), "D-M-YYYY").format("D") !== "Invalid Date" ? dayjs(novinka.datum.replace("-", "/"), "D-M-YYYY").format("D") : novinka.datum}
                            </Text>
                            <div style={{ display: "flex" }}>
                              <Text
                                size="xl"
                                sx={{ fontWeight: "400", fontSize: "1rem" }}
                              >
                                {dayjs(novinka.datum.replace("-", "/")).format("M") !== "Invalid Date" && dayjs(novinka.datum.replace("-", "/")).format("M")}
                              </Text>
                              <Text
                                size="xl"
                                sx={{ fontWeight: "400", fontSize: "1rem" }}
                              >
                                {dayjs(novinka.datum.replace("-", "/")).format("YYYY") !== "Invalid Date" && dayjs(novinka.datum.replace("-", "/")).format("YYYY")}
                              </Text>
                            </div>
                          </div>
                          <Text
                            size="xl"
                            sx={{ fontWeight: "400", fontSize: "2.5rem" }}
                          >
                            {novinka.nadpis.slice(0,35)}
                          </Text>
                        </div>
                        <Text>{novinka.text.slice(0, 250)}</Text>
                        <Link href={"/aktuality/" + novinka.id}>
                        <Button
                          sx={{
                            backgroundColor: "rgb(147, 37, 37)",
                            aspectRatio: 1,
                            textAlign: "right",
                            aspectRatio: 1,
                            marginTop: "3vh",
                            alignSelf: "flex-end",
                          }}
                          color="red"
                        >
                         
                          <MdArrowForwardIos />
                        </Button>
                        </Link>
                      </Paper>
                     </Grid.Col>
                   
                  );
                })}
                </Grid>
            </div>
          </section>
        </div>
      </Media>
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/aktuality")
  const posts = await res.json()
  var data = []
  for (let aktualita in posts){
    data.unshift({nadpis: posts[aktualita].title.rendered , datum:  posts[aktualita].x_date, text:  posts[aktualita].content.rendered.replace("<p>", "").replace("</p>", ""), image: posts[aktualita].acf.fotka, priloha: posts[aktualita].acf.priloha, id: posts[aktualita].id})
  }
  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}