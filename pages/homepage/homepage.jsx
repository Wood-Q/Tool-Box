import Block from "../../components/block/block"
import "./homepage.css"

function Homepage() {
    return (
        <div className="content">
            <Block target="/gitpage"  content="Git查询"/>
            <Block target="/randomPorts" content="随机端口号"/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
        </div>
    )
}

export default Homepage