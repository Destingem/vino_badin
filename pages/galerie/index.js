import Head from "next/head";
import GalerieLaptop from "../../components/forGalerie/GalerieLaptop";
import GalerieMobile from "../../components/forGalerie/GalerieMobile";
import GalerieTablet from "../../components/forGalerie/GalerieTablet";
import { Media } from "../Media";



export default function Galerie(props){
    console.log(props);
    return(
        <>
        <Head>
        <title>Galerie | Vinarštví Badinovi</title>
        <meta name="description" content="Galerie fotek" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
            <Media between={["zero", "mobile"]}>
                <GalerieMobile data={props.data} />
            </Media>
            <Media between={["mobile", "tablet"]}>
                <GalerieTablet data={props.data}/>
            </Media>
            <Media between={["tablet", "tv"]}>
                <GalerieLaptop data={props.data}/>
            </Media>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/galerie/")
    const posts = await res.json()
    var data = []
    for (let fotografie in posts){
      data.unshift({nadpis: posts[fotografie].title.rendered , datum:  posts[fotografie].x_date, text:  posts[fotografie].content.rendered.replace("<p>", "").replace("</p>", ""), fotografie: posts[fotografie].acf.fotografie, id: posts[fotografie].id})
    }
    return {
      props: {
        data,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }