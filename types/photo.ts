export interface PhotoParams {
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

export interface PhotoResponse extends PhotoParams {
  data: PhotoData[];
  total: number;
}
