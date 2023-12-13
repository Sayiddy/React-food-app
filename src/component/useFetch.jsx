import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setdata] = useState()

    useEffect(()=>{
        fetch(url, {method: "GET"})
        .then(res => res.json())
        .then(json => setdata(json))
    }, [url])

    return data;
};
