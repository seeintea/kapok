"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { throttle } from "@/helpers/utils";
import { author, mail, zh } from "@/config/website";

const ThemeItem = {
  "0": "浅色",
  "1": "深色",
  "2": "自动",
};

type IThemeType = "0" | "1" | "2";

export default function CustomFooter() {
  const [currentTheme, setCurrentTheme] = useState<IThemeType | undefined>();

  const changeThemeRef = useRef(
    throttle(() => {
      const themeIdx = Number(
        (localStorage.getItem("_theme") as IThemeType) || "0"
      );
      const nextTheme = (
        themeIdx + 1 > 2 ? "0" : (themeIdx + 1).toString()
      ) as IThemeType;
      setCurrentTheme(nextTheme);
      localStorage.setItem("_theme", nextTheme);
    }, 300)
  );

  useLayoutEffect(() => {
    const theme = (localStorage.getItem("_theme") as IThemeType) || "0";
    setCurrentTheme(theme);
  }, []);

  return (
    <footer className="py-10">
      <div className="flex items-center justify-between text-gray-600">
        <div className="flex flex-col gap-y-1 text-sm">
          <span>
            ©<span className="px-1">{new Date().getFullYear()}</span>
            <a href={`mailto:${mail}`}>{author}</a>
          </span>
          <span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
            >
              {zh}
            </a>
            <span className="px-1 text-xs">|</span>由
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="px-1"
            >
              Next.js
            </a>
            强力驱动
          </span>
        </div>
        <div className="cursor-pointer" onClick={changeThemeRef.current}>
          {/* {currentTheme && ThemeItem[currentTheme]} */}
        </div>
      </div>
    </footer>
  );
}
