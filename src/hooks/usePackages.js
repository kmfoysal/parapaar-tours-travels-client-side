import { useEffect, useState } from "react"


const usePackages = () =>{
    const [packages, setPackages] = useState([])

    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])

    return [packages];
}

export default usePackages ;