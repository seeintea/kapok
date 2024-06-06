import { LocationIcon } from "@kapok/icons";
import { photos } from "@/config";
import { PhotoContent } from "@kapok/theme";

export default function Photos() {
	return (
		<section className="flex flex-col justify-center items-center">
			{photos.map((photo) => (
				<PhotoContent key={photo.url} {...photo} width={550} icon={<LocationIcon width={14} height={14} />} />
			))}
		</section>
	);
}
