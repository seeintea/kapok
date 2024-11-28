import type { QueryPhotoData, QueryPhotoParams } from "@/types/photo";
import { getAppHost } from "@/utils/header";
import LocationFilled from "@/public/icons/location.svg";
import styles from "@/styles/photo.module.scss";

export default async function Photo() {
  const photos = await getPageData({ current: 1, size: 10 });

  return (
    <section className={styles.list}>
      {photos?.data?.map((photo) => (
        <article key={photo.url} className={styles.item}>
          {photo.title && <header>{photo.title}</header>}
          <section
            className={styles["img-section"]}
            style={{
              paddingBottom: `${(1 / photo.aspectRatio) * 100}%`,
              backgroundImage: `url(${photo.url})`,
            }}
          />
          <footer>
            <LocationFilled />
            <span>{photo.location}</span>
            <span>•</span>
            <span>{photo.date}</span>
          </footer>
        </article>
      ))}
    </section>
  );
}

async function getPageData(params: QueryPhotoParams): Promise<QueryPhotoData> {
  const host = await getAppHost();
  if (!host) return { data: [], total: 0, ...params };
  const ret = await fetch(`${host}/api/photo`, {
    method: "POST",
    body: JSON.stringify(params),
  });
  return await ret.json();
}
