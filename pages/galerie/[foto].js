import { Button, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";

export default function FotoDetail(props){
console.log(props);
console.log(props.data[0].acf.fotografie.sizes);
    return(
<>
    <Media between={["zero", "mobile"]}>
        <div style={{display: "flex", flexDirection: "row"}}>
            <NavBar />
            <div style={{marginTop: "10vh", textAlign: "center", alignItems: "center", width: "100%"}}>
                
                <Image src={props.data[0].acf.fotografie.sizes.large} width={props.data[0].acf.fotografie.sizes["large-width"]} height={props.data[0].acf.fotografie.sizes["large-height"]}></Image>
                <Text>{props.data[0].title.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
                <Text>{props.data[0].content.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
                <Link href="/galerie"><Button>Zpět na Galerii</Button></Link>
            </div>
        </div>
    </Media>
    <Media between={["mobile", "tablet"]}>
    <div style={{display: "flex", flexDirection: "row"}}>
            <NavBar />
        </div>
    </Media>
    <Media between={["tablet", "tv"]}>
    <div style={{display: "flex", flexDirection: "row"}}>
            <NavBar />
        </div>
    </Media>
</>
    )
}

export async function getStaticProps(props) {
    const res = await fetch("http://206.189.56.129/wp-json/wp/v2/galerie/");
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
    const res = await fetch("http://206.189.56.129/wp-json/wp/v2/galerie/");
  
    const posts = await res.json();
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { foto: post.id + "" },
    }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true };
  }