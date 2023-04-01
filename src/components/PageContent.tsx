import React from "react";
import type { NextPage } from "next";

const PageContent: NextPage = (): JSX.Element => {
  return (
    <div className="pt-10 pb-4 px-4 sm:px-6 lg:px-8">
      <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Course React with TypeScript
      </p>
      <h3 className="mt-2 text-3xl text-center dark:text-white leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Component Lazy Image
      </h3>
      <div className="max-w-xl mx-auto text-xl text-center text-gray-500 leading-7">
        <p className="mt-4">
          Un componente genérico de React para cargar imágenes con lazy loading.
        </p>
        <p className="mt-4">✨✨</p>
        <p className="mt-4 text-center">
          Las imágenes agregadas no se descargarán hasta que sean visibles en la
          pantalla
        </p>
        <p className="mt-4">✨✨</p>
      </div>
    </div>
  );
};

export default PageContent;
