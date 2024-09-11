import "./randomPorts.css";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 引入插件

function RandomPortsPage() {
  const [ports, setPorts] = useState(0);
  const content = `
 # Git HTTP状态码大全

  | 端口号 | 服务 |
  | --- | --- |
  | 21 | FTP 文件传输协议 |
  | 22 | SSH 安全外壳协议 |
  | 23 | Telnet 远程登录协议 |
  | 25 | SMTP 简单邮件传输协议 |
  | 53 | DNS 域名系统 |
  | 80 | HTTP 超文本传输协议 |
  | 110 | POP3 邮件协议 |
  | 143 | IMAP 邮件协议 |
  | 443 | HTTPS 安全超文本传输协议 |
  | 3306 | MySQL 数据库 |
  | 3389 | 远程桌面协议 |
  | 6379 | Redis 数据库 |
  | 8080 | HTTP 代理服务器 |
`;

  return (
    <div className="contentss">
      <h1>端口号:{ports}</h1>
      <button onClick={() => setPorts(Math.floor(Math.random() * 65535))}>
        生成随机端口
      </button>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}

export default RandomPortsPage;
