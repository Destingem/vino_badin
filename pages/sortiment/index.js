import { Button, Grid, Paper, Text } from "@mantine/core";
import Head from "next/head";
import { useState } from "react";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";
import dayjs from "dayjs";
import Footer from "../../components/NavBar/UI/Footer";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import MobileSortiment from "../../components/forSortiment/MobileSortiment";
import TabletSortiment from "../../components/forSortiment/TabletSortiment";
import LaptopSortiment from "../../components/forSortiment/LaptopSortiment";
export default function Sortiment(props) {
  console.log("", props);
  var data = []
  
  return (
    <>
      <Head>
        <title>Sortiment | Vinarštví Badinovi</title>
        <meta name="description" content="Sortiment vín a dalších produktů" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Media between={["zero", "mobile"]}>
      <MobileSortiment vina={props.vina}/>
      </Media>
      <Media between={["mobile", "tablet"]}>
     <TabletSortiment  vina={props.vina} />
      </Media>
      <Media between={["tablet", "laptop"]}>
    <LaptopSortiment vina={props.vina} />
      </Media>
      <Footer />
    </>
  );
}
export async function getStaticProps() {

  const res_vina = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/sortiment")
  const raw_vina = await res_vina.json()
  var vina = []
  for(let vino in raw_vina){
    if (raw_vina[vino].acf.na_hlavni_strane == true) {
      vina.push({image: raw_vina[vino].acf.hlavni_obrazek, nazev: raw_vina[vino].title.rendered, text: raw_vina[vino].acf.kratky_popis.replace(/(<([^>]+)>)/gi, ""), rocnik: raw_vina[vino].acf.rocnik, cena: raw_vina[vino].acf.cena, id: raw_vina[vino].id})
  
    }
  }
  for(let vino in raw_vina){
    if (raw_vina[vino].acf.na_hlavni_strane == false) {
      vina.push({image: raw_vina[vino].acf.hlavni_obrazek, nazev: raw_vina[vino].title.rendered, text: raw_vina[vino].acf.kratky_popis.replace(/(<([^>]+)>)/gi, ""), rocnik: raw_vina[vino].acf.rocnik, cena: raw_vina[vino].acf.cena,  id: raw_vina[vino].id})
    }
  }
 ;
  return {
    props: {
     vina,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}