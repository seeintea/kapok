import type { PhotoParams, PhotoResponse } from "@/types/photo";
import { LocationFilled } from "@/components/icons";
import { getApiBaseUrl } from "@/utils/header";
import styles from "@/scss/photo.module.scss";

export default async function Photo() {
  const photos = await getPhoto({ current: 1, size: 10 });
  return (
    <section className={styles["ph-list"]}>
      {photos?.data?.map((photo) => (
        <article key={photo.url} className={styles["ph-item"]}>
          {photo.title && <header>{photo.title}</header>}
          <section className={styles["ph-image"]} style={{paddingBottom: `${(1/photo.aspectRatio) * 100}%`}}>
            <img src={photo.url} alt={photo.title} />
          </section>
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

async function getPhoto(params: PhotoParams): Promise<PhotoResponse> {
  const baseUrl = await getApiBaseUrl();
  const ret = await fetch(`${baseUrl}/api/photo`, {
    method: "POST",
    body: JSON.stringify(params),
  });
  return await ret.json();
}
