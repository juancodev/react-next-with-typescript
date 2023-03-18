// import type { FunctionComponent, FC } from "react";
import Image from "next/image";

const randomNumber = (): number => {
  let valueFinal: number = 123;

  const resultRandom: number = Math.floor(Math.random() * valueFinal);
  return resultRandom;
};

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${randomNumber()}.jpg`;

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
