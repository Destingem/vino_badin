import { Anchor, Breadcrumbs, Button, Image, Spoiler, Text } from "@mantine/core";
import Link from "next/link";
import { useEffect } from "react";
import  {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function DetailLaptop(props){
    function executeOnClick(){

    }
  const items = [
    { title: 'Sortiment', href: '/sortiment' },
    { title: props.data.nadpis.slice(0, 30) + " " + props.data.rocnik, href: '#' },
  ].map((item, index) => (
    <Link href={item.href}>
        <Anchor  key={index}>
      {item.title}
    </Anchor>
    </Link>
  ));

    return(
      <>
        <div style={{marginTop: "10vh", justifyContent: "center", textAlign: "left", padding: "0 5vw 3vw 5vw"}}>
       <Breadcrumbs>{items}</Breadcrumbs>
        <div style={{display: "flex"}}>
          <div style={{width: "60%"}}>
          <Text
          size="xl"
          sx={{
            color: "black",
            fontSize: props.data.nadpis.length < 20 ?  "3vw" : "1vw",
            marginTop: "0",
          
            fontWeight: "600",
          
          }}
        >
          {props.data.nadpis}
        </Text>
               <Text weight={600}>{props.data.datum}</Text>
             <Spoiler maxHeight={220} showLabel="Zobrazit celý popis" hideLabel="Skrýt celý popis">
             <Text size="xl" sx={{textAlign: "left"}}>{props.data.text}</Text>
             </Spoiler>
            
             <div style={{ marginTop: "20%"}}>
             {props.data.cena &&  <Text size="xl" weight={600} sx={{fontSize: "4vh"}}>{props.data.cena} Kč</Text>}
             {props.data.cenaBezDPH &&  <Text size="xl" weight={300} sx={{fontSize: "2vh"}}>Cena bez DPH {props.data.cenaBezDPH} Kč</Text>}
             </div>
          </div>
          <div style={{width: "40%"}}>
          <Carousel showArrows={true}>
         <div>
         { props.data.hlavniObrazek ? <img src={ props.data.hlavniObrazek.sizes.medium_large} width={props.data.hlavniObrazek.sizes["medium_large-width"]} height={props.data.hlavniObrazek.sizes["medium_large-height"]}
                   
                  /> : <img  src="/images/vinoplaceholder.svg"   width="546px"
              height="375px"
                  />}
         </div>
         <div>
         {props.data.obrazek2 ? <img src={ props.data.obrazek2.sizes.medium_large} /> : <img  src="/images/vinoplaceholder.svg"   width="546px"
              height="375px"
                  />}
         </div>
         <div>
         {props.data.obrazek3 ? <img src={ props.data.obrazek3.sizes.medium_large} /> : <img  src="/images/vinoplaceholder.svg"   width="546px"
              height="375px"
                  />}
         </div>
         <div>
         {props.data.obrazek4 ? <img src={ props.data.obrazek4.sizes.medium_large} /> : <img  src="/images/vinoplaceholder.svg"   width="546px"
              height="375px"
                  />}
         </div>
         <div>
         {props.data.obrazek5 ? <img src={ props.data.obrazek5.sizes.medium_large} /> : <img  src="/images/vinoplaceholder.svg"   width="546px"
              height="375px"
                  />}
         </div>
          </Carousel>
          </div>
        </div>
      </div>
           {props.data.priloha &&  <a download href={props.data.priloha.url}><Button color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw"}}>{props.data.priloha.filename}</Button></a>}
        <Link href="/sortiment"><Button href="#" color="gray" sx={{backgroundColor: "rgb(147, 37, 37)", margin: "0 5vw 3vw 5vw"}}>Zpět na sortiment</Button></Link>
        </>
    )
}