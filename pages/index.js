import { Button, Text } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/NavBar/UI/Footer";
import NavBar from "../components/NavBar/UI/Navbar";
import styles from "./index.module.css";
import { Media } from "./Media";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import OnasLaptop from "../components/NavBar/forIndex/o-nas/OnasLaptop";
import SortimentLaptop from "../components/NavBar/forIndex/sortiment/sortimentLaptop";
import AktualityLaptop from "../components/NavBar/forIndex/aktuality/AktualityLaptop";
import KdeLaptop from "../components/NavBar/forIndex/Kde/KdeLaptop";
import OnasMobile from "../components/NavBar/forIndex/o-nas/OnasMobile";
import SortimentMobile from "../components/NavBar/forIndex/sortiment/sortimentMobile";
import AktualityMobile from "../components/NavBar/forIndex/aktuality/AktualityMobile";
import KdeMobile from "../components/NavBar/forIndex/Kde/KdeMobile";
import { useState } from "react";
import Loader from "../components/Loader";
import Router from "next/router"
export default function Home(props) {
 
  return (
    <>
      <Head>
        <title>Vinarštví Badinovi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Media between={["tablet", "tv"]}>
        <div className={styles.main_laptop}>
          <section className={styles.firstSection_laptop}>
         <NavBar backgroundColor="#eeeeeee2" />
            <Text
              size="xl"
              sx={{ color: "#C4C4C4", fontSize: "6.5vw", marginTop: "17%" }}
            >
              Vinařství Badinovi
            </Text>
            <div
              style={{
                display: "flex",
                gap: "10%",
                justifyContent: "center",
                marginTop: "10%",
                paddingBottom: "5%",
              }}
            >
              <Link href="/sortiment">
              <Button
                variant="outline"
                size="xl"
                radius="sm"
                sx={{
                  color: "white",
                  borderColor: "white",
                  width: "12vw",
                  minWidth: "fit-content",
                }}
                rightIcon={<MdArrowForwardIos />}
              >
                Sortiment
              </Button>
              </Link>
              <Link href="/o-nas">
              <Button
                variant="filled"
                size="xl"
                radius="sm"
                sx={{
                  color: "black",
                  borderColor: "white",
                  backgroundColor: "white",
                  width: "12vw",
                  minWidth: "fit-content",
                }}
              >
                O nás
              </Button>
              </Link>
            </div>
          </section>
          <section className={styles.secondSection_laptop}>
           <OnasLaptop />
          </section>
          <section className={styles.thirdSection_laptop}>
            <SortimentLaptop vina={props.vina.slice(0, 4)} />
          </section>
          <section className={styles.fourthSection_laptop}>
            <AktualityLaptop data={props.aktuality} />
          </section>
          <section className={styles.fifthSection_laptop}>
            <KdeLaptop />
          </section>
        </div>
      </Media>
      <Media between={["zero", "tablet"]}>
        <div className={styles.main_mobile}>
          <section className={styles.firstSection_mobile}>
            <NavBar backgroundColor="white" />
            <Media between={["zero", "mobile"]}>
            <Text
              size="xl"
              sx={{ color: "#C4C4C4", fontSize: "13vw", marginTop: "14vh" }}
            >
              Vinařství
            </Text>
            <Text
              size="xl"
              sx={{ color: "#C4C4C4", fontSize: "20vw"}}
            >
              Badinovi
            </Text>
            <div
              style={{
                display: "flex",
                gap: "10%",
                justifyContent: "center",
                marginTop: "10%",
                paddingBottom: "5%",
              }}
            >
              <Link href="/sortiment">
              <Button
                variant="outline"
                size="xl"
                radius="sm"
                sx={{
                  color: "white",
                  borderColor: "white",
                  width: "12vw",
                  minWidth: "min-content",
                }}
                rightIcon={<MdArrowForwardIos />}
              >
                <Text sx={{fontsize: "10vw"}}>Sortiment</Text>
              </Button>
              </Link>
              <Link href="/o-nas">
              <Button
                variant="filled"
                size="xl"
                radius="sm"
                sx={{
                  color: "black",
                  borderColor: "white",
                  backgroundColor: "white",
                  width: "12vw",
                  minWidth: "min-content",
                  padding: "fit-content"
                }}
              >
                <Text sx={{fontsize: "10vw"}}>O nás</Text>
              </Button>
              </Link>
            </div>
            </Media>
            <Media between={["mobile", "tablet"]}>
            <Text
              size="xl"
              sx={{ color: "#C4C4C4", fontSize: "10vw", marginTop: "15vh" }}
            >
              Vinařství
            </Text>
            <Text
              size="xl"
              sx={{ color: "#C4C4C4", fontSize: "15vw"}}
            >
              Badinovi
            </Text>
            <div
              style={{
                display: "flex",
                gap: "10%",
                justifyContent: "center",
                marginTop: "10%",
                paddingBottom: "5%",
              }}
            >
              <Link href="/sortiment">
              <Button
                variant="outline"
                size="xl"
                radius="sm"
                sx={{
                  color: "white",
                  borderColor: "white",
                  width: "30vw",
                  minWidth: "min-content",
                  height: "10vh"
                }}
                rightIcon={<MdArrowForwardIos />}
              >
                Sortiment
              </Button>
              </Link>
              <Link href="/o-nas">
              <Button
                variant="filled"
                size="xl"
                radius="sm"
                sx={{
                  color: "black",
                  borderColor: "white",
                  backgroundColor: "white",
                  width: "20vw",
                  width: "30vw",
                  minWidth: "min-content",
                  height: "10vh",
                }}
              >
                O nás
              </Button>
              </Link>
            </div>
            </Media>
          </section>
          <section className={styles.secondSection_mobile}>
           <OnasMobile />
          </section>
          <section className={styles.thirdSection_mobile}>
           <SortimentMobile vina={props.vina.slice(0, 2)} vinaTablet={props.vina.slice(0, 4)}/>
          </section>
          <section className={styles.fourthSection_mobile}>
            <AktualityMobile data={props.aktuality}/>
          </section>
          <section className={styles.fifthSection_mobile}>
            <KdeMobile />
          </section>
        </div>
      </Media>
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://vinarstvibadin.cz/api/data", {
    method: "POST",
    body: {url:"http://206.189.56.129:1337/wp-json/wp/v2/aktuality"}
  })
  const posts = await res.json()
  var aktuality = []
  for (let aktualita in posts){
    aktuality.push({nadpis: posts[aktualita].title.rendered , datum:  posts[aktualita].x_date, text:  posts[aktualita].content.rendered.replace(/(<([^>]+)>)/gi, ""), image: posts[aktualita].acf.fotka, priloha: posts[aktualita].acf.priloha, id: posts[aktualita].id})
  }
  aktuality = aktuality.slice(0, 4)

  const res_vina = await fetch("https://vinarstvibadin.cz/api/data", {
    method: "POST",
    body: {url:"http://206.189.56.129:1337/wp-json/wp/v2/sortiment"}
  })
  const raw_vina = await res_vina.json()
  var vina = []
  for(let vino in raw_vina){
    if (raw_vina[vino].acf.na_hlavni_strane == true) {
      vina.push({image: raw_vina[vino].acf.hlavni_obrazek, nazev: raw_vina[vino].title.rendered, text: raw_vina[vino].acf.kratky_popis.replace(/(<([^>]+)>)/gi, ""), rocnik: raw_vina[vino].acf.rocnik, cena: raw_vina[vino].acf.cena,  id: raw_vina[vino].id})
    
    }
  }
 ;
  return {
    props: {
     aktuality,
     vina,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}