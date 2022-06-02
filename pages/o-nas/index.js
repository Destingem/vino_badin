import { Text } from "@mantine/core";
import Head from "next/head";
import KdeMobile from "../../components/NavBar/forIndex/Kde/KdeMobile";
import Footer from "../../components/NavBar/UI/Footer";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";
import styles from "./index.module.css";

export default function Onas() {
  var historiePopis = ` Malé rodinné vinařství Badinovi bylo založeno v roce 1992.
    Navázali jsme na zkušenosti našich rodičů a prarodičů, kteří
    se věnovali vínu již od roku 1960. Snažíme se o produkci vín z
    hroznů vypěstovaných převážně ve vlastních vinicích.`;
  var soucasnostPopis = `Víno pěstujeme ve vinohradech na rozloze 3 ha. Vinařství se nachází v oblasti znojemské ve vinařské obci Moravské Bránice.`;

  return (
    <>
      <Head>
        <title>O nás | Vinarštví Badinovi</title>
        <meta name="description" content="O rodinném Vinařství Badinovi" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Media between={["zero", "mobile"]}>
         <div className={styles.main_mobile}>
          <section
            className={styles.first_mobile}
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
            <NavBar backgroundColor="#fff" />
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
                O nás
              </Text>
            </div>
          </section>
          <section
            className={styles.second_mobile}
            style={{
              width: "100%",
              height: "50vh",
              backgroundColor: "#EEEEEE",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              minHeight: "fit-content",
            }}
          >
            <Text
              size="xl"
              sx={{
                color: "black",
                fontSize: "10vw",
                marginTop: "0",
                padding: "5vw 5vw 2vw 5vw",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Historie
            </Text>
            <Text
              size="xl"
              sx={{
                color: "black",
                fontSize: "5vw",
                marginTop: "0",
                padding: "0 5vw 2vw 5vw",
                fontWeight: "400",
              }}
            >
              {historiePopis}
            </Text>
          </section>
          <section
            className={styles.third_mobile}
            style={{
              width: "100%",
              height: "fit-content",
              paddingBottom: "5vh",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              minHeight: "fit-content",
            }}
          >
            <Text
              size="xl"
              sx={{
                color: "black",
                fontSize: "10vw",
                marginTop: "0",
                padding: "5vw 5vw 2vw 5vw",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Současnost
            </Text>
            <Text
              size="xl"
              sx={{
                color: "black",
                fontSize: "5vw",
                marginTop: "0",
                padding: "0 5vw 2vw 5vw",
                fontWeight: "400",
              }}
            >
              {soucasnostPopis}
            </Text>
          </section>
          <section
            className={styles.third_mobile}
            style={{
              width: "100%",
              height: "fit-content",
              paddingBottom: "5vh",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              minHeight: "fit-content",
              backgroundColor: "#eeeeee",
            }}
          >
            <KdeMobile />
          </section>
          <Footer />
        </div>
      </Media>
      <Media between={["mobile", "tablet"]}>
      <div className={styles.main_mobile}>
          <section
            className={styles.first_mobile}
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
            <NavBar backgroundColor="#fff" />
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
                O nás
              </Text>
            </div>
          </section>
          <section
            className={styles.second_mobile}
            style={{
              width: "100%",
              height: "50vh",
              backgroundColor: "#EEEEEE",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              minHeight: "fit-content",
            }}
          >
            <Text
              size="xl"
              sx={{
                color: "black",
                fontSize: "6vh",
                marginTop: "0",
                padding: "5vw 5vw 2vw 5vw",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Historie
            </Text>
            <Text
              size="xl"
              sx={{
                color: "black",
                fontSize: "3vh",
                marginTop: "0",
                padding: "0 5vw 2vw 5vw",
                fontWeight: "400",
              }}
            >
              {historiePopis}
            </Text>
          </section>
          <section
            className={styles.third_mobile}
            style={{
              width: "100%",
              height: "fit-content",
              paddingBottom: "5vh",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              minHeight: "fit-content",
            }}
          >
            <Text
              size="xl"
              sx={{
                color: "black",
                fontSize: "6vh",
                marginTop: "0",
                padding: "5vw 5vw 2vw 5vw",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Současnost
            </Text>
            <Text
              size="xl"
              sx={{
                color: "black",
                fontSize: "3vh",
                marginTop: "0",
                padding: "0 5vw 2vw 5vw",
                fontWeight: "400",
              }}
            >
              {soucasnostPopis}
            </Text>
          </section>
          <section
            className={styles.third_mobile}
            style={{
              width: "100%",
              height: "fit-content",
              paddingBottom: "5vh",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              minHeight: "fit-content",
              backgroundColor: "#eeeeee",
              fontSize: "3rem"
            }}
          >
            <KdeMobile />
          </section>
          <Footer />
        </div>
      </Media>
      <Media between={["tablet", "laptop"]}>
        <div className={styles.main_laptop}>
         
            <section
            className={styles.first_mobile}
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
            <NavBar backgroundColor="#fff" />
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
                sx={{ color: "white", fontSize: "15vh", textAlign: "center" }}
              >
                O nás
              </Text>
            </div>
          </section>
          <section style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#eeeeee"
              
          }}>
                  <Text
        size="xl"
        sx={{
          color: "black",
          fontSize: "4.125vw",
          marginTop: "0",
          padding: "5vw 5vw 2vw 5vw",
          fontWeight: "600",
          
        }}
      >
        Historie
      </Text>
          </section>
          <section style={{
              width: "100%",
              height: "100vh"
              
          }}>
                  <Text
        size="xl"
        sx={{
          color: "black",
          fontSize: "4.125vw",
          marginTop: "0",
          padding: "5vw 5vw 2vw 5vw",
          fontWeight: "600",
        }}
      >
        Současnost
      </Text>
          </section>
            <Footer />
         
        </div>
      </Media>
    </>
  );
}
