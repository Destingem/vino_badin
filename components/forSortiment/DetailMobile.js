import { Breadcrumbs, Button, Spoiler, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function DetailMobile(props){

    return(
      <>
      <div style={{marginTop: "10vh", justifyContent: "center", textAlign: "left", padding: "0 5vw 3vw 5vw", justifySelf: "center"}}>
   
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{textAlign: "center"}}>
        <Text
        size="xl"
        sx={{
          color: "black",
          fontSize: props.data.nadpis.length < 20 ?  "10vw" : "3vw",
          marginTop: "0",
        
          fontWeight: "600",
        
        }}
      >
        {props.data.nadpis}
      </Text>
      </div>
      <div style={{}}>
        <Carousel showArrows={true}>
       <div>
       { props.data.hlavniObrazek ? <Image src={ props.data.hlavniObrazek.sizes.medium_large} width={100} height={100} layout="responsive"
                 
                /> : <img  src="/images/vinoplaceholder.svg"   width="546px"
            height="375px"
                />}
       </div>
       <div>
       {props.data.obrazek2 && <img src={ props.data.obrazek2.sizes.medium_large}
          
                 />}
       </div>
       <div>
       {props.data.obrazek3 && <img src={ props.data.obrazek3.sizes.medium_large}
                 />}
       </div>
       <div>
       {props.data.obrazek4 && <img src={ props.data.obrazek4.sizes.medium_large}
                />}
       </div>
       <div>
       {props.data.obrazek5 && <img src={ props.data.obrazek5.sizes.medium_large}
               />}
       </div>
        </Carousel>
        </div>
        <div>
            
           <Spoiler maxHeight={220} showLabel="Zobrazit celý popis" hideLabel="Skrýt celý popis">
           <Text size="xl" sx={{textAlign: "left"}}>{props.data.text}</Text>
           </Spoiler>
          
           <div style={{ marginTop: "20%"}}>
           {props.data.cena &&  <Text size="xl" weight={600} sx={{fontSize: "4vh"}}>{props.data.cena} Kč</Text>}
           {props.data.cenaBezDPH &&  <Text size="xl" weight={300} sx={{fontSize: "2vh"}}>Cena bez DPH {props.data.cenaBezDPH} Kč</Text>}
           </div>
        </div>
       
      </div>
    </div>
         {props.data.priloha &&  <a download href={props.data.priloha.url}><Button color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw"}}>{props.data.priloha.filename}</Button></a>}
      <Link href="/sortiment"><Button href="#" color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw", width: "100%"}}>Zpět na sortiment</Button></Link>
      </>
    )
}