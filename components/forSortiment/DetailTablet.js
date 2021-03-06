import { Button, Text } from "@mantine/core";
import Link from "next/link";


export default function DetailTablet(props){

    return(
      <>
        <div style={{marginTop: "10vh", justifyContent: "center", textAlign: "center", padding: "0 5vw 3vw 5vw"}}>
        <Text
        component="h1"
       size="xl"
       sx={{
         color: "black",
         fontSize: props.data.nadpis.length < 40 ?  "10vw" : "2vw",
         marginTop: "0",
         padding: "5vw 5vw 2vw 5vw",
         fontWeight: "600",
         textAlign: "center",
       }}
     >
       {props.data.nadpis}
     </Text>
            <Text weight={600}>{props.data.datum}</Text>
            <Text sx={{textAlign: "left"}}>{props.data.text}</Text>
            
        </div>
        {props.data.priloha && <a download href={props.data.priloha.url}><Button color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw"}}>{props.data.priloha.filename}</Button></a>}
        <Link href="/aktuality"><Button color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw"}}>Zpět na sortiment</Button></Link>
        </>
    )
}