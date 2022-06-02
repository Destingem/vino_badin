import { Button, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/NavBar/UI/Footer";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";

export default function FotoDetail(props){
console.log(props);
console.log(props.data[0].acf.fotografie.sizes);
    return(
<>
<Head>
        <title>{props.data[0].title.rendered.replace(/(<([^>]+)>)/gi, "")} - Galerie | Vinarštví Badinovi</title>
        <meta name="description" content="Rodinné vinařství v Moravský Bránicích" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
    <Media between={["zero", "mobile"]}>
        <div style={{display: "flex", flexDirection: "row"}}>
            <NavBar />
            <div style={{marginTop: "10vh", textAlign: "center", alignItems: "center", width: "100%"}}>
                
                <Image src={props.data[0].acf.fotografie.sizes.large} width={props.data[0].acf.fotografie.sizes["large-width"]} height={props.data[0].acf.fotografie.sizes["large-height"]}></Image>
                <Text component="h1">{props.data[0].title.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
                <Text>{props.data[0].content.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
                <Link href="/galerie"><Button>Zpět na Galerii</Button></Link>
            </div>
        </div>
    </Media>
    <Media between={["mobile", "tablet"]}>
    <div style={{display: "flex", flexDirection: "row"}}>
            <NavBar />
            <div style={{marginTop: "10vh", textAlign: "center", alignItems: "center", width: "100%"}}>
                
                <Image src={props.data[0].acf.fotografie.sizes.large} width={props.data[0].acf.fotografie.sizes["large-width"]} height={props.data[0].acf.fotografie.sizes["large-height"]}></Image>
                <Text component="h1">{props.data[0].title.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
                <Text>{props.data[0].content.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
                <Link href="/galerie"><Button>Zpět na Galerii</Button></Link>
            </div>
        </div>
    </Media>
    <Media between={["tablet", "tv"]}>
    <div style={{display: "flex", flexDirection: "row"}}>
            <NavBar />
            <div style={{marginTop: "10vh", textAlign: "center", alignItems: "center", width: "100%"}}>
            <Text component="h1" size="xl" sx={{color: "rgb(147, 37, 37)", fontWeight: 600, fontSize: "3rem"}}>{props.data[0].title.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
            <Text>{props.data[0].content.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
                <Image src={props.data[0].acf.fotografie.sizes.large} width={props.data[0].acf.fotografie.sizes["large-width"]} height={props.data[0].acf.fotografie.sizes["large-height"]}></Image>
                
                <div style={{display: "flex", flexDirection: "row", textAlign: "center", alignItems: "center", justifyContent: "center", gap: "5%", marginBottom: "5vh"}}>
                
                <Link href={props.data[0].acf.fotografie.sizes.large}><Button sx={{backgroundColor: "rgb(147, 37, 37)"}}>Stáhnout</Button></Link>
                <Link href="/galerie"><Button sx={{backgroundColor: "rgb(147, 37, 37)"}}>Zpět na Galerii</Button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </Media>
</>
    )
}

export async function getStaticProps(props) {
    const res = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/galerie/");
    const posts = await res.json();
    var data = posts.filter((post) => {
      console.log(props.params.foto);
      console.log(post.id);
      if (props.params.foto == post.id) {
        return post;
      }
    });
    console.log(data);
    if (!data || data.length == 0 || !data[0]) {
      return {
        notFound: true,
      };
    }
  
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
    const res = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/galerie/");
  
    const posts = await res.json();
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { foto: post.id + "" },
    }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true };
  }