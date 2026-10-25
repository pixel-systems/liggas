import type { ImageMetadata } from "astro";
import type { GallerySlug } from "./site";

const modules = import.meta.glob<ImageMetadata>(
  "../assets/photos/**/*.{jpg,jpeg}",
  { eager: true, import: "default" },
);

function collect(folder: string): ImageMetadata[] {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/photos/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b, "sk", { numeric: true }))
    .map(([, image]) => image);
}

function one(suffix: string): ImageMetadata {
  const found = Object.entries(modules).find(([path]) => path.endsWith(suffix));
  if (!found) throw new Error(`Chýba fotografia ${suffix}`);
  return found[1];
}

export const hero = one("/site/hero.jpg");

export const galleries: Record<GallerySlug, ImageMetadata[]> = {
  plyn: collect("plyn"),
  voda: collect("voda"),
  kurenie: collect("kurenie"),
  teplovod: collect("teplovod"),
  kanalizacia: collect("kanalizacia"),
};

export const aboutPhoto = galleries.plyn[0];

export const certificateGroups: { title: string; note: string; images: ImageMetadata[] }[] =
  [
    {
      title: "Zváranie plastov",
      note: "Osvedčenie zvárača plastov a certifikát technológa zvárania plastov.",
      images: [one("/opravnenia/plast-1.jpg"), one("/opravnenia/plast-2.jpg")],
    },
    {
      title: "Plyn",
      note: "Oprávnenie Technickej inšpekcie na opravu, montáž a rekonštrukciu plynových zariadení.",
      images: [one("/opravnenia/plyn.jpg")],
    },
  ];
