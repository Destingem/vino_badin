import Link from "next/link"
import { Button, Text } from "@mantine/core"
import Image from "next/image"

export default function OnasLaptop(){

    return(
       <>
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
              fontSize: "1.2vw",
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
              width: "12vw",
              minWidth: "fit-content",
            }}
          >
            O nás
          </Button>
          </Link>
        </div>
        <Image
          src="/images/vinecko.jpg"
          width={800}
          height={800}
          style={{ borderRadius: "3px" }}
        />
      </div>
       </>
    )
}
