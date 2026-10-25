export const company = {
  name: "LigGas",
  legalName: "LigGas s.r.o.",
  phoneDisplay: "+421 911 716 136",
  phoneHref: "tel:+421911716136",
  email: "stefan.ligyak@liggas.sk",
  ico: "36 741 809",
  street: "Záhradná 590/34",
  postalCode: "900 23",
  locality: "Viničné",
  country: "Slovensko",
  registerHref: "https://www.orsr.sk/vypis.asp?ID=92220&SID=2&P=1",
  registerLabel: "Obchodný register",
  since: 2002,
  lat: 48.2688445,
  lon: 17.3017633,
} as const;

export const services = [
  {
    title: "Plyn",
    text: "Výstavba a rekonštrukcia plynovodov vrátane prípojok, merania a ochrany potrubia.",
    items: [
      "Plynovody NTL, STL, VTL a prípojky",
      "Rekonštrukcia plynovodov",
      "Regulačné stanice a meranie",
      "Aktívna a pasívna ochrana",
      "Opravy a údržba plynových zariadení",
      "Odborné prehliadky a skúšky",
    ],
  },
  {
    title: "Voda",
    text: "Vodovody a prípojky z materiálov, ktoré si vyžaduje projekt.",
    items: [
      "PE, PVC, oceľ a liatina",
      "Vodovodné prípojky",
      "Rekonštrukcia vodovodov",
      "Aktívna a pasívna ochrana vodovodov",
    ],
  },
  {
    title: "Kanalizácia",
    text: "Gravitačné aj tlakové kanalizácie, vrátane objektov na trase.",
    items: [
      "Kanalizačné stoky a prípojky",
      "Tlaková aj gravitačná kanalizácia",
      "Prečerpávacie stanice a šachty",
    ],
  },
  {
    title: "Kúrenie a teplovody",
    text: "Vykurovanie pre domácnosti a organizácie aj vonkajšie teplovodné rozvody.",
    items: [
      "Podlahové, radiátorové a solárne vykurovanie",
      "Výstavba teplovodov",
    ],
  },
  {
    title: "Zemné práce",
    text: "Práce, ktoré otvoria trasu a po uložení sietí ju znova uzavrú.",
    items: [
      "Zemné práce",
      "Búracie a demolačné práce",
      "Realizácia komunikácií",
      "Pneumatické pretláčanie pod komunikácie do priemeru 130 mm",
    ],
  },
  {
    title: "Poradenstvo",
    text: "Príprava stavby predtým, ako sa začne kopať.",
    items: ["Poradenstvo, projektová a inžinierska činnosť"],
  },
] as const;

export type GallerySlug =
  | "plyn"
  | "voda"
  | "kurenie"
  | "teplovod"
  | "kanalizacia";

export const references: {
  slug: GallerySlug;
  title: string;
  summary: string;
  cover: number;
}[] = [
  {
    slug: "plyn",
    title: "Plyn",
    summary: "Plynovody, prípojky a zvary na stavenisku.",
    cover: 16,
  },
  {
    slug: "voda",
    title: "Voda",
    summary: "Vodovodné potrubia, uzávery a prípojky.",
    cover: 3,
  },
  {
    slug: "kurenie",
    title: "Kúrenie",
    summary: "Podlahové vykurovanie počas montáže.",
    cover: 0,
  },
  {
    slug: "teplovod",
    title: "Teplovod",
    summary: "Teplovodné rozvody a izolované potrubie.",
    cover: 1,
  },
  {
    slug: "kanalizacia",
    title: "Kanalizácia",
    summary: "Výkopy, šachty a kanalizačné vetvy.",
    cover: 13,
  },
];

export function pageHref(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path === "/") return base;
  return `${base}${path.replace(/^\//, "")}`;
}

export function isCurrent(pathname: string, path: string): boolean {
  const target = pageHref(path);
  const current = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const normalized = target.endsWith("/") ? target : `${target}/`;
  return current === normalized;
}

export function isInSection(pathname: string, path: string): boolean {
  if (path === "/") return false;
  const target = pageHref(path);
  return pathname === target || pathname.startsWith(target);
}

export function photosLabel(count: number): string {
  if (count === 1) return "1 fotografia";
  if (count >= 2 && count <= 4) return `${count} fotografie`;
  return `${count} fotografií`;
}

export function mapEmbedSrc(): string {
  const { lon, lat } = company;
  const bbox = [lon - 0.008, lat - 0.005, lon + 0.008, lat + 0.005]
    .map((value) => value.toFixed(6))
    .join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
}

export function mapLink(): string {
  const { lat, lon } = company;
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=18/${lat}/${lon}`;
}
