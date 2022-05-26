import { Text, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
export default function KdeLaptop(props) {
  return (
    <>
      <Text
        size="xl"
        sx={{
          color: "black",
          fontSize: "4.125vw",
          marginTop: "0",
          padding: "2vw 5vw 2vw 5vw",
          fontWeight: "600",
        }}
      >
        Kde nás najdete
      </Text>
      <div style={{ display: "flex", padding: "0 5vw 0 0" }}>
        <div
          style={{
            padding: "0 2vw 0 5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
            {props.text}
          </Text>
          <Link href="/kontakt">
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
              Kontakt
            </Button>
          </Link>
        </div>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              style={{ borderRadius: "3px" }}
              width="600"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Vina%C5%99stv%C3%AD%20Badinovi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
