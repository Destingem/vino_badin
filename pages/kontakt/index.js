import { Text } from "@mantine/core";
import { MdAccountTree, MdAlternateEmail } from "react-icons/md";
import Footer from "../../components/NavBar/UI/Footer";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";
import styles from "./kontakt.module.css";
import {BsPersonCircle} from "react-icons/bs"
import {FaMapMarker} from "react-icons/fa"
export default function Kontakt() {
  return (
    <>
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
           <Text size="xl">František Badin</Text>
           </div>
           <div className={styles.textWithIcon}>
           <FaMapMarker style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">Moravské Bránice č.p. 383</Text>
           </div>
           <div className={styles.textWithIcon}>
           <MdAccountTree style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">IČ: 46912126</Text>
           </div>
           <div className={styles.textWithIcon}>
           <MdAlternateEmail style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">info@vinarstvibadin.cz</Text>
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
            Víno prodáváme ve vlastním sklepě v Moravských Bránicích od roku
            2008. V roce 2020 jsme sklep rekonstruovali. V nabídce máme prodej
            vín v lahvích, v bag in boxech a stáčených do PET lahví.
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
                sx={{ color: "white", fontSize: "13vw", textAlign: "center" }}
              >
                Kontakt
              </Text>
            </div>
          </section>
        <div style={{display: "flex"}}>
        <section className={styles.section_3_tablet}>
           <Text size="xl"  weight={600} sx={{fontSize: "8vw", whiteSpace: "nowrap" }}>Vinařství Badin</Text>
           <div className={styles.textWithIcon}>
           <BsPersonCircle style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">František Badin</Text>
           </div>
           <div className={styles.textWithIcon}>
           <FaMapMarker style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">Moravské Bránice č.p. 383</Text>
           </div>
           <div className={styles.textWithIcon}>
           <MdAccountTree style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">IČ: 46912126</Text>
           </div>
           <div className={styles.textWithIcon}>
           <MdAlternateEmail style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">info@vinarstvibadin.cz</Text>
           </div>
          </section>
          <section className={styles.section_2_tablet}>
            
            <Text>
            Víno prodáváme ve vlastním sklepě v Moravských Bránicích od roku
            2008. V roce 2020 jsme sklep rekonstruovali. V nabídce máme prodej
            vín v lahvích, v bag in boxech a stáčených do PET lahví.
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
                sx={{ color: "white", fontSize: "6rem", textAlign: "center" }}
              >
                Kontakt
              </Text>
            </div>
          </section>
          <div style={{display: "flex"}}>
          <section className={styles.section_3_laptop}>
           <Text size="xl"  weight={600} sx={{fontSize: "4.125vw"}}>Vinařství Badin</Text>
           <div className={styles.textWithIcon}>
           <BsPersonCircle style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">František Badin</Text>
           </div>
           <div className={styles.textWithIcon}>
           <FaMapMarker style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">Moravské Bránice č.p. 383</Text>
           </div>
           <div className={styles.textWithIcon}>
           <MdAccountTree style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">IČ: 46912126</Text>
           </div>
           <div className={styles.textWithIcon}>
           <MdAlternateEmail style={{color: "rgb(147, 37, 37)", marginTop: "0.5vh", marginRight: "2vw"}}/> 
           <Text size="xl">info@vinarstvibadin.cz</Text>
           </div>
          </section>
          <section className={styles.section_2_laptop}>
            
            <Text>
            Víno prodáváme ve vlastním sklepě v Moravských Bránicích od roku
            2008. V roce 2020 jsme sklep rekonstruovali. V nabídce máme prodej
            vín v lahvích, v bag in boxech a stáčených do PET lahví.
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
