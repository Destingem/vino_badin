import Link from "next/link"
import { Text, Button } from "@mantine/core"
import { Media } from "../../../../pages/Media"

export default function OnasMobile(){


    return(
        <>
       <Media between={["zero", "mobile"]}>
       <Text
        size="xl"
        sx={{
          color: "black",
          fontSize: "10vw",
          marginTop: "0",
          padding: "5vw 5vw 2vw 5vw",
          fontWeight: "600",
          textAlign: "center"
        }}
      >
        O nás
      </Text>
      <div style={{ display: "flex", padding: "0 5vw 0 0" }}>
        <div
          style={{
            padding: "0 2vw 0 5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Text
            size="xl"
            sx={{
              color: "black",
              fontSize: "5vw",
              marginTop: "0",
              padding: "0 0 2vw 0",
              fontWeight: "400",
            }}
          >
            Malé rodinné vinařství Badinovi bylo založeno v roce 1992.
            Navázali jsme na zkušenosti našich rodičů a prarodičů, kteří
            se věnovali vínu již od roku 1960. Snažíme se o produkci vín z
            hroznů vypěstovaných převážně ve vlastních vinicích.
          </Text>
          <Link href="/o-nas">
          <Button
            color="gray"
            variant="outline"
            radius="sm"
            size="xl"
            sx={{
              color: "black",
              borderColor: "black",
              width: "100%",
              minWidth: "fit-content",
              marginTop: "2vh"
            }}
          >
            O nás
          </Button>
          </Link>
        </div>
        </div>
       </Media>
       <Media between={["mobile", "tablet"]}>
       <Text
        size="xl"
        sx={{
          color: "black",
          fontSize: "6vw",
          marginTop: "0",
          padding: "5vw 5vw 2vw 5vw",
          fontWeight: "600",
          textAlign: "center"
        }}
      >
        O nás
      </Text>
      <div style={{ display: "flex", padding: "0 5vw 0 0" }}>
        <div
          style={{
            padding: "0 2vw 0 5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Text
            size="xl"
            sx={{
              color: "black",
              fontSize: "3vw",
              marginTop: "0",
              padding: "0 0 2vw 0",
              fontWeight: "400",
            }}
          >
            Malé rodinné vinařství Badinovi bylo založeno v roce 1992.
            Navázali jsme na zkušenosti našich rodičů a prarodičů, kteří
            se věnovali vínu již od roku 1960. Snažíme se o produkci vín z
            hroznů vypěstovaných převážně ve vlastních vinicích.
          </Text>
          <Link href="/o-nas">
          <Button
            color="gray"
            variant="outline"
            radius="sm"
            size="xl"
            sx={{
              color: "black",
              borderColor: "black",
              width: "25%",
            
              minWidth: "fit-content",
              marginTop: "2vh"
            }}
          >
            O nás
          </Button>
          </Link>
        </div>
        </div>
       </Media>
     </>
    )
}