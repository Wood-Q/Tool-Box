import Block from "../../components/block/block";
import "./homepage.css";

function Homepage() {
  return (
    <div className="content">
      <Block target="/gitpage" content="Git查询" />
      <Block target="/randomPorts" content="随机端口号" />
      <Block target="/httpCode" content="http状态码" />
      <Block target="/UpLow" content="大小写转换" />
      <Block target="/weather" content="天气查询" />
      <Block target="/cat" content="随机猫猫" />
      <Block target="/todo" content="待办事项" />
      <Block content="" />
      <Block content="" />
      <Block content="" />
      <Block content="" />
      <Block content="" />
    </div>
  );
}

export default Homepage;
