import { Text } from "@mantine/core";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";


export default function NotFound(){
const [cas, setCas] = useState(7)
const router = useRouter()
useEffect(()=> {
    const timeout = setTimeout(() => {
        setCas((cas)=> {
            if(cas == 7){
                return 6
            } else{
                return cas -1
            }
        })
        clearTimeout(timeout)
    }, 1000);
}, [cas])
if (cas < 1) {
    router.replace("/")
}

    return(
        <div>
            <Text size="lg">Stránka nenalezena</Text>
            <Text size="md">Budete přesměrováni během {cas} sekund</Text>
        </div>
    )
}