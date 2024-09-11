import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 引入插件
import "./gitpage.css";

function Gitpage() {
  const content = `
  # Git 命令查询
  ### Git 配置用户信息
  \`\`\`
  git config --global user.name "[name]"
  git config --global user.email "[email]"
  \`\`\`
  ---
  ### Git 初始化仓库
  \`\`\`
  git init
  \`\`\`
  ---
  ### Git 添加文件到暂存区
  \`\`\`
  git add [file]
  \`\`\`
  ---
  ### Git 提交文件到仓库
  \`\`\`
  git commit -m "[message]"
  \`\`\`
  ---
  ### Git 克隆远程仓库
  \`\`\`
  git clone [url]
  \`\`\`
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

export default Gitpage;
