import { Anchor, Text, Button, Breadcrumbs } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";
import Footer from "../../components/NavBar/UI/Footer";
import DetailMobile from "../../components/forSortiment/DetailMobile";
import DetailTablet from "../../components/forSortiment/DetailTablet";
import DetailLaptop from "../../components/forSortiment/DetailLaptop";

/*
            <Text>{props.data[0].title.rendered}</Text>
            <Text>{ props.data[0].content.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
            <Text>{props.data[0].acf.cena}</Text>
            <Text>{props.data[0].acf.rocnik}</Text>
      
*/
export default function VinoDetail(props) {
  if (!props || !props.data || !props.data[0]) {
    return <></>;
  }
  var data = {
    nadpis: props.data[0].title.rendered,
    datum: props.data[0].x_date,
    text: props.data[0].content.rendered.replace(/(<([^>]+)>)/gi, ""),
    id: props.data[0].id,
    rocnik: props.data[0].acf.rocnik,
    hlavniObrazek: props.data[0].acf.hlavni_obrazek,
    obrazek2: props.data[0].acf["2_obrazek"],
    obrazek3: props.data[0].acf["3_obrazek"],
    obrazek4: props.data[0].acf["4_obrazek"],
    obrazek5: props.data[0].acf["5_obrazek"],
    cena: props.data[0].acf.cena,
    cenaBezDPH: props.data[0].acf.cena_bez_dph
  };

  console.log(props);
  console.log(data);
  return (
    <>
      <Head>
        <title>
          {data.nadpis} {data.rocnik} - Sortiment | Vinarštví Badinovi
        </title>
        <meta name="description" content={"Popis produktu " + data.nadpis + " " + data.rocnik} />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "92vh", width: "100vw"}}
      >
        <NavBar backgroundColor="#eeeeee" />
        <Media between={["zero", "mobile"]} style={{width: "100%"}}>
          <DetailMobile data={data} />
        </Media>
        <Media between={["mobile", "tablet"]}>
          <DetailTablet data={data} />
        </Media>
        <Media between={["tablet", "tv"]}>
          <DetailLaptop data={data} />
        </Media>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps(props) {
  const res = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/sortiment");
  const posts = await res.json();
  var data = posts.filter((post) => {
    console.log(props.params.detail);
    console.log(post.id);
    if (props.params.detail == post.id) {
      return post;
    }
  });
  console.log(data);
  if (!data || data.length == 0 || !data[0]) {
    return {
      notFound: true,
    };
  }
  console.log(props);

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/sortiment");

  const posts = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { detail: post.id + "" },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}
