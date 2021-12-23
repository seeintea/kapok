import React from "react"

const Footer: React.FC = () => {
  return (
    <footer>
      ©️ {new Date().getFullYear()}, {`  `}
      <a href="https://github.com/leviegu" target={"_blank"} rel="noreferrer">
        leviegu
      </a>
      , {`  `}
      <a href="https://beian.miit.gov.cn" target={"_blank"} rel="noreferrer">
        苏ICP备19014503号
      </a>
    </footer>
  )
}

export default Footer
