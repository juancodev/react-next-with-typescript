// import type { FunctionComponent, FC } from "react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

type Props = {
  image: string;
};

export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    // new observable
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // onIntersection
        if (entry.isIntersecting) {
          setSrc(image);
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
  }, [image]);

  return (
    <Image
      src={src}
      ref={node}
      alt="Fox Image"
      width={320}
      height={320}
      className={"rounded bg-gray-300"}
    />
  );
};

// Helper of React

// export const RandomFox = (): FunctionComponent => {
//   return <img src="" alt="" />;
// };

// export const RandomFox: FC = () => {
//   return <img src="" alt="" />;
// };
