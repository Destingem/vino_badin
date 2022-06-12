import { Burger, Drawer, Grid, MediaQuery, Paper, Text } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { Media } from "../../../pages/Media";
import styles from "./Navbar.module.css";
import Link from "next/link";
export default function NavBar(props) {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      <Media between={["zero", "mobile"]}>
        <div
          className={styles.main_mobile}
          style={{
            backgroundColor: props.backgroundColor,
            position: "fixed",
            zIndex: "12000",
          }}
        >
          <Link href="/">
            <div className={styles.header_mobile}>
              <Image src="/images/logo.png" width={40} height={40}  alt="logo" />
              <Text size="xl">Vinařství Badinovi</Text>
            </div>
          </Link>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
          {opened && (
            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              title="Navigace"
              padding="xl"
              size="full"
              transition="fade"
              position="right"
            >
              <div className={styles.openedMenu_mobile}>
                <Paper>
                  <Link href="/">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Hlavní strana
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/o-nas">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      O nás
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/aktuality">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Aktuality
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/sortiment">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Sortiment
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/galerie">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Galerie
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/kontakt">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Kontakt
                    </Text>
                  </Link>
                </Paper>
              </div>
            </Drawer>
          )}
        </div>
      </Media>
      <Media between={["mobile", "tablet"]}>
        <div
          className={styles.main_mobile}
          style={{
            backgroundColor: props.backgroundColor,
            position: "fixed",
            zIndex: "12000",
          }}
        >
          <Link href="/">
            <div className={styles.header_tablet}>
              <Image src="/images/logo.png" width={"40%"} height={"40%"} />
              <Link href="/">
                <Text size="xl">Vinařství Badinovi</Text>
              </Link>
              {/* sx={{cursor: "pointer"}}*/}
            </div>
          </Link>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
          {opened && (
            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              title="Navigace"
              padding="xl"
              position="right"
              transition="fade"
            >
              <div className={styles.openedMenu_tablet}>
                <Paper>
                  <Link href="/">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Hlavní strana
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/o-nas">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      O nás
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/aktuality">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Aktuality
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/sortiment">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Sortiment
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/galerie">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Galerie
                    </Text>
                  </Link>
                </Paper>
                <Paper>
                  <Link href="/kontakt">
                    <Text size="xl" sx={{ fontWeight: 400 }}>
                      Kontakt
                    </Text>
                  </Link>
                </Paper>
              </div>
            </Drawer>
          )}
        </div>
      </Media>
      <Media between={["tablet", "laptop"]}>
        <div
          className={styles.main_laptop}
          style={{
            backgroundColor: props.backgroundColor,
            position: "fixed",
            zIndex: "12000",
          }}
        >
          <div className={styles.header_laptop}>
            <Link href="/">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer"
                }}
              >
                <Image src="/images/logo.png" width={49} height={44} />
                <Text size="xl" sx={{ fontSize: "2rem" }}>
                  Vinařství Badinovi
                </Text>
              </div>
            </Link>
            <Grid
              sx={{
                margin: 0,
                width: "maxContent",
                gap: "5vh",
                paddingRight: "5%",
              }}
            >
              <Link href="/o-nas">
                <p>O nás</p>
              </Link>
              <Link href="/aktuality">
                <p>Aktuality</p>
              </Link>
              <Link href="/sortiment">
                <p>Sortiment</p>
              </Link>
              <Link href="/galerie">
                <p>Galerie</p>
              </Link>
              <Link href="/kontakt">
                <p>Kontakt</p>
              </Link>
            </Grid>
          </div>
        </div>
      </Media>
      <Media between={["laptop", "tv"]}>
        <div
          className={styles.main_tv}
          style={{ backgroundColor: props.backgroundColor }}
        >
          <Image src="/images/logo.png" width={100} height={100} />
        </div>
      </Media>
    </>
  );
}

/*
<div
          className={styles.main}
          style={{ backgroundColor: props.backgroundColor }}
        >
          <Image src="/images/logo.png" width={100} height={100} />
          <p>mobile</p>
        </div>
        */
