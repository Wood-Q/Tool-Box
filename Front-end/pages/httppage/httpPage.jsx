import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 引入插件
import "./httpPage.css";

function HttpPage() {
  const content = `
  # Git HTTP状态码大全
  ## 1xx（信息性状态码）
  - 100 Continue：继续，客户端应继续其请求
  - 101 Switching Protocols：切换协议，服务器根据客户端的请求切换协议
  - 102 Processing：处理中，服务器已收到请求，但尚未完成处理
---
  ## 2xx（成功状态码）
  - 200 OK：请求成功
  - 201 Created：已创建，请求成功并且服务器创建了新的资源
  - 202 Accepted：已接受，服务器已接受请求，但尚未处理
---
  ## 3xx（重定向状态码）
  - 301 Moved Permanently：永久移动，请求的资源已被永久移动到新位置
  - 302 Found：临时移动，请求的资源临时被移动到新位置
  - 303 See Other：查看其他位置，请求的资源可在另一个 URI 下找到
  - 304 Not Modified：未修改，所请求的资源未修改，服务器返回此状态码时，不会返回任何资源
---
  ## 4xx（客户端错误状态码）
  - 400 Bad Request：错误请求，服务器无法理解请求的语法
  - 401 Unauthorized：未授权，请求需要用户认证
  - 403 Forbidden：禁止，服务器拒绝请求
  - 404 Not Found：未找到，服务器无法找到请求的资源
---
  ## 5xx（服务器错误状态码）
  - 500 Internal Server Error：内部服务器错误，服务器遇到意外情况
  - 501 Not Implemented：未实现，服务器不支持请求的功能
  - 502 Bad Gateway：网关错误，服务器作为网关或代理，从上游服务器收到无效响应
  - 503 Service Unavailable：服务不可用，服务器目前无法处理请求
  - 504 Gateway Timeout：网关超时，服务器作为网关或代理，未及时从上游服务器收到响应
  - 505 HTTP Version Not Supported：HTTP版本不受支持，服务器不支持请求的HTTP版本
  ---
  
  `;

  return (
    <div className="contents">
      <Markdown className="center" remarkPlugins={[remarkGfm]}>
        {content}
      </Markdown>
    </div>
  );
}

export default HttpPage;
