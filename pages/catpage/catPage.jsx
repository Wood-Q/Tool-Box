import "./catPage.css"
import { useEffect,useState} from "react";

function CatPage() {
    const [cat,setCat]=useState("");

    useEffect(() => {
        async function fetchCat() {
            const res=await fetch(
                "https://api.thecatapi.com/v1/images/search?api_key=live_eFLPtGh6hZ9Lmg8dRZwdoYzIe5TSyMvKuSUfYs6rtI8cj9i5iWctxYD3jhUp9Pkl"
            );
            const data =await res.json();
            setCat(data[0].url);
            console.log(data);
        }
        fetchCat()
    },[])


    return <div className="contents">
        <img src={cat} alt="cat" />
    </div>
}

export default CatPage