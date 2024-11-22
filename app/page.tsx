import { ThemeProvider } from "@/theme";
import { getAppHost } from "@/utils/header";
import styles from "@/styles/homepage.module.scss";

export default async function Homepage() {
  const pageData = await getPageData();
  return (
    <ThemeProvider>
      <p className={styles.one}>{pageData.one}</p>
    </ThemeProvider>
  );
}

async function getPageData() {
  const pageData = { one: "云去山如画。" };
  const host = await getAppHost();
  if (!host) return pageData;
  const one = await fetch(`${host}/api/one`, {});
  if (one.status === 200) {
    const json = await one.json();
    pageData.one = json?.data ?? "云去山如画。";
  }
  return pageData;
}
