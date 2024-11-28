import { TwitterOutlined, GithubOutlined, MailOutlined } from "./dynamic-icons";
import BlogFilled from "@/public/icons/blog.svg";
import NoteFilled from "@/public/icons/note.svg";
import PhotoFilled from "@/public/icons/photo.svg";

export default {
  navigator: {
    contacts: [
      {
        title: "X",
        path: "https://x.com/levie_gu",
        icon: <TwitterOutlined />,
      },
      {
        title: "Github",
        path: "https://github.com/seeintea",
        icon: <GithubOutlined />,
      },
      {
        title: "Mail",
        path: "mailto:leviegu@gmail.com",
        icon: <MailOutlined />,
      },
    ],
    routes: [
      {
        title: "BLOG",
        path: "/blog",
        icon: <BlogFilled />,
      },
      {
        title: "PHOTO",
        path: "/photo",
        icon: <PhotoFilled />,
      },
      {
        title: "NOTE",
        path: "/note",
        icon: <NoteFilled />,
      },
    ],
  },
  footer: {
    referLinks: [
      {
        title: "CC BY-NC-SA 4.0",
        path: "https://creativecommons.org/licenses/by-nc-sa/4.0",
      },
      {
        title: "苏ICP备19014503号-2",
        path: "https://beian.miit.gov.cn",
      },
    ],
  },
};
