export interface QueryPhotoParams {
  current: number;
  size: number;
}

export interface PhotoData {
  url: string;
  title: string;
  date: string;
  location: string;
  aspectRatio: number;
}

export interface QueryPhotoData extends QueryPhotoParams {
  data: PhotoData[];
  total: number;
}
