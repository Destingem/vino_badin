import { Text } from "@mantine/core";
import Footer from "../../components/NavBar/UI/Footer";
import NavBar from "../../components/NavBar/UI/Navbar";
import { Media } from "../Media";

export default function Sortiment() {
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <div>
          <section
            style={{
              width: "100%",
              height: "50vh",
              backgroundImage: 'url("images/wineshop.jpg")',
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
                Aktuality
              </Text>
            </div>
          </section>
          <section
            style={{
              width: "100%",
              height: "50vh",
              backgroundColor: "white",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              minHeight: "fit-content",
            }}
          >
        <div>
            
        </div>
          </section>
        </div>
      </Media>
      <Media between={["mobile", "tablet"]}>
        <div>
          <section
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
                Aktuality
              </Text>
            </div>
          </section>
        </div>
      </Media>
      <Media between={["tablet", "tv"]}>C</Media>
      <Footer />
    </>
  );
}
