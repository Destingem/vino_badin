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
 console.log(props);
  return (
    <>
      <Head>
        <title>Vinarštví Badinovi</title>
        <meta name="description" content="Rodinné vinařství v Moravský Bránicích" />
        <link rel="icon" href="/images/logo.png" />
        
      </Head>

      <Media between={["tablet", "tv"]}>
      
        <div className={styles.main_laptop}>
          <section className={styles.firstSection_laptop}>
         <NavBar backgroundColor="#eeeeeee2" />
            <Text
              size="xl"
              sx={{ color: "#C4C4C4", fontSize: "6.5vw", marginTop: "17%" }}
              component="h1"
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
           <OnasLaptop text={props.texty.o_nas}/>
          </section>
          <section className={styles.thirdSection_laptop}>
            <SortimentLaptop vina={props.vina.slice(0, 4)} text={props.texty.vina}/>
          </section>
          <section className={styles.fourthSection_laptop}>
            <AktualityLaptop data={props.aktuality} text={props.texty.aktuality}/>
          </section>
          <section className={styles.fifthSection_laptop}>
            <KdeLaptop text={props.texty.kde}/>
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
              component="h1"
            >
              Vinařství
            </Text>
            <Text
              size="xl"
              sx={{ color: "#C4C4C4", fontSize: "20vw"}}
              component="h1"
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
              component="h1"
            >
              Vinařství
            </Text>
            <Text
              size="xl"
              sx={{ color: "#C4C4C4", fontSize: "15vw"}}
              component="h1"
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
           <OnasMobile text={props.texty.o_nas} />
          </section>
          <section className={styles.thirdSection_mobile}>
           <SortimentMobile vina={props.vina.slice(0, 2)} vinaTablet={props.vina.slice(0, 4)} text={props.texty.vina}/>
          </section>
          <section className={styles.fourthSection_mobile}>
            <AktualityMobile data={props.aktuality} text={props.texty.aktuality}/>
          </section>
          <section className={styles.fifthSection_mobile}>
            <KdeMobile text={props.texty.kde}/>
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
  var aktuality = []
  for (let aktualita in posts){
    aktuality.push({nadpis: posts[aktualita].title.rendered , datum:  posts[aktualita].x_date, text:  posts[aktualita].content.rendered.replace(/(<([^>]+)>)/gi, ""), image: posts[aktualita].acf.fotka, priloha: posts[aktualita].acf.priloha, id: posts[aktualita].id})
  }
  aktuality = aktuality.slice(0, 4)

  const res_vina = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/sortiment")
  const raw_vina = await res_vina.json()
  var vina = []
  for(let vino in raw_vina){
    if (raw_vina[vino].acf.na_hlavni_strane == true) {
      vina.push({image: raw_vina[vino].acf.hlavni_obrazek, nazev: raw_vina[vino].title.rendered, text: raw_vina[vino].acf.kratky_popis.replace(/(<([^>]+)>)/gi, ""), rocnik: raw_vina[vino].acf.rocnik, cena: raw_vina[vino].acf.cena,  id: raw_vina[vino].id})
    
    }
  }
 ;
 const res_texty = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/text")
 const raw_texty = await res_texty.json()
 var texty = {}
 for( let text in raw_texty){
   let thisText = raw_texty[text]
   if (!thisText || !thisText.acf || !thisText.acf.stranka || thisText.acf.stranka !== "hlavni_strana") {
    
   } 
   switch (thisText.slug) {
     case "kde-nas-najdete":
       texty = {...texty, kde: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
       break;
    case "aktuality":
      texty = {...texty, aktuality: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
        break;
    case "vina":
      texty = {...texty, vina: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
       break;
    case "o-nas":
      texty = {...texty, o_nas: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
       break;
    
     default:
       
       break;
   }
 }
  return {
    props: {
     aktuality,
     vina,
     texty,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}