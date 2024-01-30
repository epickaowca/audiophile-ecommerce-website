type Images = {
  mobile: string;
  tablet?: string;
  desktop?: string;
};

export type DefaultProps = {
  image: Images;
  isImageLoaded: boolean;
  withoutAnimation?: boolean;
};
