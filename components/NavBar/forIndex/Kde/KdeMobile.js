import { Text, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
export default function KdeMobile(props) {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  return (
    <>
      <Text
        size="xl"
        sx={{
          color: "black",
          fontSize: "6vw",
          marginTop: "0",
          padding: "5vw 5vw 2vw 5vw",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Kde nás najdete
      </Text>
      <div style={{ display: "flex", padding: "0 5vw 0 0", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0", gap: "5vh" }}>
        <div
          style={{
            
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text
            size="xl"
            sx={{
              color: "black",
              fontSize: "3vw",
              marginTop: "0",
              padding: "0 5vw 0 5vw",
              fontWeight: "400",
            }}
          >
            {props.text}
          </Text>
          
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
        <Link href="/kontakt">
            <Button
              color="gray"
              variant="outline"
              radius="sm"
              size="xl"
              sx={{
                color: "black",
                borderColor: "black",
                minWidth: "fit-content",
                width: "90vw",
                marginBottom: "5vh"
  
              }}
            >
              Kontakt
            </Button>
          </Link>
      </div>
    </>
  );
}
