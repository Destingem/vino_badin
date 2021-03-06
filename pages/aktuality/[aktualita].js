import { Button, Text } from "@mantine/core";
import Footer from "../../components/NavBar/UI/Footer";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";
import { Breadcrumbs, Anchor } from '@mantine/core';
import Link from "next/link";
import Head from "next/head";

export default function Aktualita(props){
    if (!props  || !props.data ||!props.data[0]) {
        return(
            <></>
        )
        
    }
    var data =  {nadpis: props.data[0].title.rendered , datum:  props.data[0].x_date, text:  props.data[0].content.rendered.replace("<p>", "").replace("</p>", "").replace(".</p>", ""), image: props.data[0].acf.fotka, priloha: props.data[0].acf.priloha, id: props.data[0].id}
    const items = [
        { title: 'Aktuality', href: '/aktuality' },
        { title: data.nadpis.slice(0, 30), href: '#' },
      ].map((item, index) => (
        <Link href={item.href}>
            <Anchor  key={index}>
          {item.title}
        </Anchor>
        </Link>
      ));
  
   console.log(props);
   console.log(data);
   return(
       <>
       <Head>
        <title>{data.nadpis} - Aktuality | Vinarštví Badinovi</title>
        <meta name="description" content={"Aktualita " + data.nadpis} />
        <link rel="icon" href="/images/logo.png" />
      </Head>

       <div style={{display: "flex", flexDirection: "column", minHeight: "92vh"}}>
       <NavBar backgroundColor="#eeeeee" />
       <Media between={["zero", "mobile"]}>
           <div style={{marginTop: "10vh", justifyContent: "center", textAlign: "center", padding: "0 5vw 3vw 5vw"}}>
           <Text
          size="xl"
          component="h1"
          sx={{
            color: "black",
            fontSize: data.nadpis.length < 20 ?  "10vw" : "4vw",
            marginTop: "0",
            padding: "5vw 5vw 2vw 5vw",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {data.nadpis}
        </Text>
               <Text weight={600}  >{data.datum}</Text>
               <Text sx={{textAlign: "left"}}>{data.text}</Text>
           </div>
          {data.priloha &&  <a  download href={data.priloha.url}><Button color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw", width: "90%"}}>{data.priloha.filename}</Button></a>}
           <Link href="/aktuality"><Button  href="#" color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw", width: "90%"}}>Zpět na aktuality</Button></Link>
       </Media>
       <Media between={["mobile", "tablet"]}>
       <div style={{marginTop: "10vh", justifyContent: "center", textAlign: "center", padding: "0 5vw 3vw 5vw"}}>
           <Text
          size="xl"
          sx={{
            color: "black",
            fontSize: data.nadpis.length < 40 ?  "10vw" : "2vw",
            marginTop: "0",
            padding: "5vw 5vw 2vw 5vw",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {data.nadpis}
        </Text>
               <Text weight={600}>{data.datum}</Text>
               <Text sx={{textAlign: "left"}}>{data.text}</Text>
               
           </div>
           {data.priloha &&  <a download href={data.priloha.url}><Button color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw"}}>{data.priloha.filename}</Button></a>}
           <Link href="/aktuality"><Button color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw"}}>Zpět na aktuality</Button></Link>
        
       </Media>
       <Media between={["tablet", "tv"]}>
       <div style={{marginTop: "10vh", justifyContent: "center", textAlign: "left", padding: "0 5vw 3vw 5vw"}}>
       <Breadcrumbs>{items}</Breadcrumbs>
           <Text
          size="xl"
          sx={{
            color: "black",
            fontSize: data.nadpis.length < 20 ?  "3vw" : "1vw",
            marginTop: "0",
          
            fontWeight: "600",
          
          }}
        >
          {data.nadpis}
        </Text>
               <Text weight={600}>{data.datum}</Text>
               <Text size="xl" sx={{textAlign: "left"}}>{data.text}</Text>
           </div>
           {data.priloha &&  <a download href={data.priloha.url}><Button color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw"}}>{data.priloha.filename}</Button></a>}
           <Link href="/aktuality"><Button href="#" color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw"}}>Zpět na aktuality</Button></Link>
           </Media>
       </div>
       
       <Footer />
       </>
   )
}


export async function getStaticProps(props) {
    const res = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/aktuality")
    const posts = await res.json()
    var data = posts.filter((post)=> { 
        console.log(props.params.aktualita);
        console.log( post.id);
        if (props.params.aktualita == post.id) {
            return post
        }
    })
    console.log(data);
    if (!data || data.length == 0 || !data[0]) {
        return {
          notFound: true
        }
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
    }
  }

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://138.68.106.100:1338/wp-json/wp/v2/aktuality')
    
    const posts = await res.json()
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { aktualita: post.id + "" },
    }))
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
  }