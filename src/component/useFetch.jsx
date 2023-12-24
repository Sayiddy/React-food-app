import { useEffect, useState } from "react";

export default function useFetch(url, method = "GET", body) {
    const [res, setRes] = useState()

    useEffect(()=>{
        if(method == "GET"){
            fetch(url, {method: "GET"})
            .then(res => res.json())
            .then(json => setRes(json))
        }else if(method == "POST"){
            fetch(url, {method: method, body: body})
            .finally(res=>res)
        }
    }, [url, method])

    return res;
};
