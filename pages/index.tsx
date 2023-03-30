import { useState } from "react";
import type { MouseEventHandler } from "react";
import Head from "next/head";
import { LazyImage } from "../src/components/LazyImage";
import { v4 as uuid } from "uuid";

const randomNumber = (): number => {
  let valueFinal: number = 123;

  const resultRandom: number = Math.floor(Math.random() * valueFinal);
  return resultRandom;
};

export default function Home() {
  // const [images, setImages] = useState<string[]>([]); other
  const [images, setImages] = useState<Array<IFoxImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: IFoxImageItems = {
      id: uuid(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <>
      <Head>
        <title>React With Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={addNewFox}>Add new Fox</button>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <LazyImage
              src={url}
              width={320}
              height={320}
              className={"rounded bg-gray-300"}
            />
          </div>
        ))}
      </main>
    </>
  );
}
