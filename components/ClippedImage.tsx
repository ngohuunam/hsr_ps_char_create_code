// components/ClippedImage.js

import Image from "next/image"

interface Props {
  src: string
  alt: string
  width: number
  height: number
  top: number
  left: number
  scale: number
}

const ClippedImage: React.FC<Props> = ({ src, alt, width, height, top, left, scale }) => {
  return (
    <div className="relative overflow-hidden w-full h-52 sm:h-full">

      <Image
        src={src}
        alt={alt}
        width="500" height="500" priority
        className="absolute left-0 transform"
        style={{ top: top, left: left, transform: `scale(${scale})` }}
      />
    </div>
  );
};

export default ClippedImage;