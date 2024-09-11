import "./randomPorts.css"
import { useState } from "react"

function RandomPortsPage() {
    const [ports, setPorts] = useState(0)

    return <div className="contentss">
        <h1>端口号:{ports}</h1>
        <button onClick={()=>setPorts(Math.floor(Math.random()*65535))}>生成随机端口</button>
    </div>
}

export default RandomPortsPage