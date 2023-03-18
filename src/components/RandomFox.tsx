// import type { FunctionComponent, FC } from "react";
import Image from "next/image";

type Props = {
  image: string;
};

export const RandomFox = ({ image }: Props): JSX.Element => {
  return (
    <Image
      src={image}
      alt="Fox Image"
      width={320}
      height={320}
      className={"rounded"}
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
