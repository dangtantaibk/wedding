import { useEffect, useState } from "react";
import foto1 from "~/images/foto1.jpeg";
import foto2 from "~/images/foto2.jpeg";
import foto3 from "~/images/foto3.jpeg";
import foto4 from "~/images/foto4.jpeg";
import foto5 from "~/images/foto5.jpeg";
import foto6 from "~/images/foto6.jpeg";
import foto7 from "~/images/foto7.jpeg";
import foto8 from "~/images/foto8.jpeg";
import foto9 from "~/images/foto9.jpeg";
import foto10 from "~/images/foto10.jpeg";
import foto11 from "~/images/foto11.jpeg";
import foto12 from "~/images/foto12.jpeg";
import foto13 from "~/images/foto13.jpeg";
import foto14 from "~/images/foto14.jpeg";
import foto15 from "~/images/foto15.jpeg";
import foto16 from "~/images/foto16.jpeg";
import foto17 from "~/images/foto17.jpeg";
import foto18 from "~/images/foto18.jpeg";
import foto19 from "~/images/foto19.jpeg";
import foto20 from "~/images/foto20.jpeg";
import foto21 from "~/images/foto21.jpeg";
import foto22 from "~/images/foto22.jpeg";
import foto23 from "~/images/foto23.jpeg";
import foto24 from "~/images/foto24.jpeg";
import foto25 from "~/images/foto25.jpeg";
import Gallery from "./Gallery";
import type { IPhoto } from "./Gallery";

const photos: IPhoto[] = [
  {
    src: foto1,
    width: 3,
    height: 2,
    alt: "pic 1",
  },
  {
    src: foto3,
    width: 3,
    height: 2,
    alt: "pic 2",
  },
  {
    src: foto2,
    width: 3,
    height: 2,
    alt: "pic 3",
  },
  {
    src: foto6,
    width: 3,
    height: 2,
    alt: "pic 4",
  },
  {
    src: foto5,
    width: 3,
    height: 2,
    alt: "pic 5",
  },
  {
    src: foto4,
    width: 3,
    height: 2,
    alt: "pic 6",
  },
  {
    src: foto9,
    width: 3,
    height: 2,
    alt: "pic 7",
  },
  {
    src: foto8,
    width: 3,
    height: 2,
    alt: "pic 8",
  },
  {
    src: foto7,
    width: 3,
    height: 2,
    alt: "pic 9",
  },
  {
    src: foto10,
    width: 3,
    height: 2,
    alt: "pic 10",
  },
  {
    src: foto11,
    width: 3,
    height: 2,
    alt: "pic 11",
  },
  {
    src: foto12,
    width: 3,
    height: 2,
    alt: "pic 12",
  },
  {
    src: foto13,
    width: 3,
    height: 2,
    alt: "pic 13",
  },
  {
    src: foto14,
    width: 3,
    height: 2,
    alt: "pic 14",
  },
  {
    src: foto15,
    width: 3,
    height: 2,
    alt: "pic 15",
  },
  {
    src: foto7,
    width: 3,
    height: 2,
    alt: "pic 9",
  },
  {
    src: foto16,
    width: 3,
    height: 2,
    alt: "pic 16",
  },
  {
    src: foto17,
    width: 3,
    height: 2,
    alt: "pic 17",
  },
  {
    src: foto18,
    width: 3,
    height: 2,
    alt: "pic 18",
  },
  {
    src: foto19,
    width: 3,
    height: 2,
    alt: "pic 19",
  },
  {
    src: foto20,
    width: 3,
    height: 2,
    alt: "pic 20",
  },
  {
    src: foto21,
    width: 3,
    height: 2,
    alt: "pic 21",
  },
  {
    src: foto22,
    width: 3,
    height: 2,
    alt: "pic 22",
  },
  {
    src: foto23,
    width: 3,
    height: 2,
    alt: "pic 23",
  },
  {
    src: foto24,
    width: 3,
    height: 2,
    alt: "pic 24",
  },
  {
    src: foto25,
    width: 3,
    height: 2,
    alt: "pic 25",
  }
];

let isHydrating = true;

const GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = useState(!isHydrating);

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700">
        Bộ sưu tập
      </h4>
      {isHydrated ? (
        <div className="w-full overflow-auto">
          <Gallery photos={photos} />
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPhotos;
