import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [res, setRes] = useState()

    useEffect(()=>{
        fetch(url, {method: "GET"})
        .then(res => res.json())
        .then(json => setRes(json))
        .catch(err => setRes("err"))
    }, [url])

    return res;
};
