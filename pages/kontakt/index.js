import { Text } from "@mantine/core";
import { MdAccountTree, MdAlternateEmail } from "react-icons/md";
import Footer from "../../components/NavBar/UI/Footer";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";
import styles from "./kontakt.module.css";
import {BsPersonCircle,BsFillTelephoneFill } from "react-icons/bs"
import {FaMapMarker} from "react-icons/fa"
import Head from "next/head";
export default function Kontakt(props) {
  return (
    <>
     <Head>
        <title>Kontakt | Vinarštví Badinovi</title>
        <meta name="description" content="Kontaktní informace" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Media between={["zero", "mobile"]}>
        <div className={styles.main_mobile}></div>
        <NavBar backgroundColor="#fff" />
        <div className={styles.content_mobile}>
          <section
            className={styles.section_1}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
               
              }}
            >
              <Text
                component="h1"
                size="xl"
                sx={{ color: "white", fontSize: "13vw", textAlign: "center" }}
              >
                Kontakt
              </Text>
            </div>
          </section>
          <section className={styles.section_3_mobile}>
           <Text size="xl"  weight={600} sx={{fontSize: "8vw"}}>Vinařství Badin</Text>
           <div className={styles.textWithIcon}>
           <BsPersonCircle style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.osoba}</Text>
           </div>
           <div className={styles.textWithIcon}>
           <FaMapMarker style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.adresa}</Text>
           </div>
           <div className={styles.textWithIcon}>
           <MdAccountTree style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.ic}</Text>
           </div>
           {props.texty.tel && <div className={styles.textWithIcon}><BsFillTelephoneFill style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}} /> <Text size="xl">{props.texty.tel}</Text></div>}
           <div className={styles.textWithIcon}>
           <MdAlternateEmail style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.email}</Text>
           </div>
          </section>
          <section className={styles.section_2_mobile}>
            <Text
              size="xl"
              sx={{ color: "black", fontSize: "10vw", textAlign: "center" }}
            >
              Kde nás najdete
            </Text>
            <Text>
            {props.texty.text}
            </Text>
            <div class="gmap_canvas" style={{width: "100%", height: "100%", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <iframe
              style={{ borderRadius: "3px" }}
              width={window.innerWidth}
              height={window.innerHeight * 0.4}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Vina%C5%99stv%C3%AD%20Badinovi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
          </section>
         

          <Footer />
        </div>
      </Media>
      <Media between={["mobile", "tablet"]}>
      <div className={styles.main_tablet}></div>
        <NavBar backgroundColor="#fff" />
        <div className={styles.content_tablet}>
          <section
            className={styles.section_1}
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
                component="h1"
                sx={{ color: "white", fontSize: "13vw", textAlign: "center" }}
              >
                Kontakt
              </Text>
            </div>
          </section>
        <div style={{display: "flex"}}>
        <section className={styles.section_3_tablet}>
           <Text size="xl"  weight={600} sx={{fontSize: "8vw", whiteSpace: "nowrap" }}>Vinařství Badin</Text>
           {props.texty.osoba && <div className={styles.textWithIcon}>
           <BsPersonCircle style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.osoba}</Text>
           </div>}
           {props.texty.adresa && <div className={styles.textWithIcon}>
           <FaMapMarker style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.adresa}</Text>
           </div>}
           {props.texty.ic && <div className={styles.textWithIcon}>
           <MdAccountTree style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.ic}</Text>
           </div>}
           {props.texty.tel && <div className={styles.textWithIcon}><BsFillTelephoneFill style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}} /> <Text size="xl">{props.texty.tel}</Text></div>}
           {props.texty.email && <div className={styles.textWithIcon}>
           <MdAlternateEmail style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.email}</Text>
           </div>}
           
          </section>
          <section className={styles.section_2_tablet}>
            
            <Text>
            {props.texty.text}
            </Text>
            
          </section>
        </div>
        <div class="gmap_canvas" style={{width: "100%", height: "100%", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <iframe
              style={{ borderRadius: "3px" }}
              width={window.innerWidth}
              height={window.innerHeight * 0.4}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Vina%C5%99stv%C3%AD%20Badinovi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>

          <Footer />
        </div>
       
      </Media>
      <Media between={["tablet", "tv"]}>
      <div className={styles.main_mobile}></div>
        <NavBar backgroundColor="#fff" />
        <div className={styles.content_mobile}>
          <section
            className={styles.section_1}
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
                component="h1"
                sx={{ color: "white", fontSize: "6rem", textAlign: "center" }}
              >
                Kontakt
              </Text>
            </div>
          </section>
          <div style={{display: "flex"}}>
          <section className={styles.section_3_laptop}>
           <Text size="xl"  weight={600} sx={{fontSize: "4.125vw"}}>Vinařství Badin</Text>
           { props.texty.osoba &&<div className={styles.textWithIcon}>
           <BsPersonCircle style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.osoba}</Text>
           </div>}
           {props.texty.adresa && <div className={styles.textWithIcon}>
           <FaMapMarker style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.adresa}</Text>
           </div>}
           {props.texty.ic && <div className={styles.textWithIcon}>
           <MdAccountTree style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.ic}</Text>
           </div>}
           {props.texty.tel && <div className={styles.textWithIcon}><BsFillTelephoneFill style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}} /> <Text size="xl">{props.texty.tel}</Text></div>}
           

           {props.texty.email && <div className={styles.textWithIcon}>
           <MdAlternateEmail style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">{props.texty.email}</Text>
           </div>}
          </section>
          <section className={styles.section_2_laptop}>
            
            <Text>
            {props.texty.text}
            </Text>
            
          </section>
          </div>
          <div class="gmap_canvas" style={{width: "100%", height: "100%", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <iframe
              style={{}}
              width={window.innerWidth * 0.989}
              height={window.innerHeight * 0.5}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Vina%C5%99stv%C3%AD%20Badinovi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>

          <Footer />
        </div>
      </Media>
    </>
  );
}
// <section className={styles.section}></section>
export async function getStaticProps(){
  const res_texty = await fetch("https://138.68.106.100:1338/wp-json/wp/v2/text")
  const raw_texty = await res_texty.json()
  var texty = {}
  for( let text in raw_texty){
    let thisText = raw_texty[text]
    if (!thisText || !thisText.acf || !thisText.acf.stranka || thisText.acf.stranka !== "kontakt") {
     
    } 
    switch (thisText.slug) {
      case "email":
        texty = {...texty, email: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
        break;
     case "ic":
       texty = {...texty, ic: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
         break;
     case "adresa":
       texty = {...texty, adresa: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
        break;
     case "kontaktni-osoba":
       texty = {...texty, osoba: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
        break;
        case "kontakt-text":
          texty = {...texty, text: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
           break;
        case "tel":
          texty = {...texty, tel: thisText.content.rendered.replace(/(<([^>]+)>)/gi, "")}
          break;
     
      default:
        
        break;
    }
  }
  return {
    props: {
    
     texty,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}
