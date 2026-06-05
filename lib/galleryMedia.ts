import type { StaticImageData } from "next/image";

import loadMachineOperation from "@/images/load/WhatsApp Image 2026-06-04 at 18.18.14.jpeg";
import loadPreparation from "@/images/load/WhatsApp Image 2026-06-04 at 18.18.15.jpeg";
import loadWrappedCargo from "@/images/load/WhatsApp Image 2026-06-04 at 18.18.19.jpeg";
import loadRolls from "@/images/load/WhatsApp Image 2026-06-04 at 18.18.04.jpeg";
import fleetTwoBack from "@/images/trucks/2 bakc.jpeg";
import fleetTwoFrontA from "@/images/trucks/2 front.jpeg";
import fleetTwoFrontB from "@/images/trucks/2front.jpeg";
import fleetTwoFrontC from "@/images/trucks/2front2.jpeg";
import ivecoFront from "@/images/trucks/iveco-front.jpeg";
import ivecoFrontOne from "@/images/trucks/iveco-front1.jpeg";
import ivecoFrontTwo from "@/images/trucks/iveco-front2.jpeg";
import ivecoFrontThree from "@/images/trucks/iveco-front3.jpeg";
import manFront from "@/images/trucks/man-front.jpeg";
import manFrontOne from "@/images/trucks/man-front1.jpeg";
import manFrontTwo from "@/images/trucks/man-front2.jpeg";
import manFrontThree from "@/images/trucks/man-front3.jpeg";
import manFrontFour from "@/images/trucks/man-front4.jpeg";
import manFrontFive from "@/images/trucks/man-front5.jpeg";

export type GalleryCategory = "trucks" | "loading";

export type GalleryMediaItem = {
  id: string;
  type: "image";
  src: StaticImageData;
  category: GalleryCategory;
  caption: string;
  alt: string;
};

export const galleryMedia: GalleryMediaItem[] = [
  {
    id: "fleet-two-front-a",
    type: "image",
    src: fleetTwoFrontA,
    category: "trucks",
    caption: "MAN ve IVECO birlikte",
    alt: "MAN ve IVECO araclarin onde birlikte gorunumu"
  },
  {
    id: "fleet-two-front-b",
    type: "image",
    src: fleetTwoFrontB,
    category: "trucks",
    caption: "Iki arac on cephe",
    alt: "Iki cekicinin on cepheden goruntusu"
  },
  {
    id: "fleet-two-front-c",
    type: "image",
    src: fleetTwoFrontC,
    category: "trucks",
    caption: "Iki arac filo gorunumu",
    alt: "Iki aracin birlikte park halinde goruntusu"
  },
  {
    id: "fleet-two-back",
    type: "image",
    src: fleetTwoBack,
    category: "trucks",
    caption: "Iki arac arka aci",
    alt: "Iki aracin arka acidan birlikte goruntusu"
  },
  {
    id: "man-front",
    type: "image",
    src: manFront,
    category: "trucks",
    caption: "MAN cekici",
    alt: "Beyaz MAN cekicinin yol kenarinda on gorunumu"
  },
  {
    id: "man-front-one",
    type: "image",
    src: manFrontOne,
    category: "trucks",
    caption: "MAN arac gorunumu",
    alt: "MAN cekicinin dis saha goruntusu"
  },
  {
    id: "man-front-two",
    type: "image",
    src: manFrontTwo,
    category: "trucks",
    caption: "MAN on cephe",
    alt: "MAN cekicinin on cepheden yakin goruntusu"
  },
  {
    id: "man-front-three",
    type: "image",
    src: manFrontThree,
    category: "trucks",
    caption: "MAN yol gorunumu",
    alt: "MAN cekici ve dorsenin yol uzerindeki goruntusu"
  },
  {
    id: "man-front-four",
    type: "image",
    src: manFrontFour,
    category: "trucks",
    caption: "MAN detay",
    alt: "MAN cekicinin detayli on gorunumu"
  },
  {
    id: "man-front-five",
    type: "image",
    src: manFrontFive,
    category: "trucks",
    caption: "MAN saha gorunumu",
    alt: "MAN cekicinin saha icindeki goruntusu"
  },
  {
    id: "iveco-front",
    type: "image",
    src: ivecoFront,
    category: "trucks",
    caption: "IVECO cekici",
    alt: "Gumus renkli IVECO cekicinin on gorunumu"
  },
  {
    id: "iveco-front-one",
    type: "image",
    src: ivecoFrontOne,
    category: "trucks",
    caption: "IVECO on cephe",
    alt: "IVECO cekicinin onde park halinde goruntusu"
  },
  {
    id: "iveco-front-two",
    type: "image",
    src: ivecoFrontTwo,
    category: "trucks",
    caption: "IVECO detay",
    alt: "IVECO cekicinin yakin on cephe goruntusu"
  },
  {
    id: "iveco-front-three",
    type: "image",
    src: ivecoFrontThree,
    category: "trucks",
    caption: "IVECO yol gorunumu",
    alt: "IVECO cekici ve dorsenin yatay goruntusu"
  },
  {
    id: "loading-rolls",
    type: "image",
    src: loadRolls,
    category: "loading",
    caption: "Ambalajli rulo yuk",
    alt: "Dorse icinde ambalajli rulo yuklerin goruntusu"
  },
  {
    id: "loading-machine-operation",
    type: "image",
    src: loadMachineOperation,
    category: "loading",
    caption: "Makine yukleme operasyonu",
    alt: "Kapali dorsede endustriyel ekipman yukleme operasyonu"
  },
  {
    id: "loading-preparation",
    type: "image",
    src: loadPreparation,
    category: "loading",
    caption: "Yukleme hazirligi",
    alt: "Tenteli dorse acik halde yukleme hazirligi goruntusu"
  },
  {
    id: "loading-wrapped-cargo",
    type: "image",
    src: loadWrappedCargo,
    category: "loading",
    caption: "Etiketli ambalajli yuk",
    alt: "Dorse icinde etiketli ambalajli ve paletli yuklerin goruntusu"
  }
];
