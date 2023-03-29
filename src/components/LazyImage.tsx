// import type { FunctionComponent, FC } from "react";
import Image from "next/image";
import type { ImgHTMLAttributes } from "react";
import { useRef, useEffect, useState } from "react";

type PlaceholderValue = "blur" | "empty";

type LazyImageProps = {
  src: string;
  width: number;
  height: number;
  placeholder?: PlaceholderValue;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    // new observable
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // onIntersection
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      });
    });

    //observe node
    if (node.current) {
      observer.observe(node.current);
    }

    //disconnect
    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <Image src={currentSrc} ref={node} alt="Fox Image" {...imgProps} />;
};

// Helper of React

// export const RandomFox = (): FunctionComponent => {
//   return <img src="" alt="" />;
// };

// export const RandomFox: FC = () => {
//   return <img src="" alt="" />;
// };
