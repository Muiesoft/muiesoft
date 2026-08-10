import { readFileSync, writeFileSync } from "node:fs";

const sourceUrl =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson";
const outFile = new URL("../src/data/registry/romania-map.json", import.meta.url);

const properNames = {
  "satu-mare": "Satu Mare",
  arad: "Arad",
  bihor: "Bihor",
  timis: "Timiș",
  mehedinti: "Mehedinți",
  "caras-severin": "Caraș-Severin",
  maramures: "Maramureș",
  salaj: "Sălaj",
  cluj: "Cluj",
  alba: "Alba",
  hunedoara: "Hunedoara",
  "bistrita-nasaud": "Bistrița-Năsăud",
  mures: "Mureș",
  sibiu: "Sibiu",
  valcea: "Vâlcea",
  gorj: "Gorj",
  dolj: "Dolj",
  olt: "Olt",
  arges: "Argeș",
  brasov: "Brașov",
  harghita: "Harghita",
  covasna: "Covasna",
  neamt: "Neamț",
  suceava: "Suceava",
  botosani: "Botoșani",
  iasi: "Iași",
  vaslui: "Vaslui",
  bacau: "Bacău",
  vrancea: "Vrancea",
  galati: "Galați",
  braila: "Brăila",
  buzau: "Buzău",
  prahova: "Prahova",
  dambovita: "Dâmbovița",
  teleorman: "Teleorman",
  giurgiu: "Giurgiu",
  ilfov: "Ilfov",
  calarasi: "Călărași",
  ialomita: "Ialomița",
  constanta: "Constanța",
  tulcea: "Tulcea",
  bucharest: "București",
};

const slugify = (name) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const localPath = process.argv[2];
const raw = localPath
  ? readFileSync(localPath, "utf8")
  : await (await fetch(sourceUrl)).text();
const geo = JSON.parse(raw);

const features = geo.features.filter((f) => f.properties.iso_a2 === "RO");
if (features.length !== 42) {
  console.error(`asteptam 42 de unitati administrative, am gasit ${features.length}`);
  process.exit(1);
}

const midLatCos = Math.cos((46 * Math.PI) / 180);
const project = ([lon, lat]) => [lon * midLatCos, -lat];

let minX = Infinity;
let minY = Infinity;
let maxX = -Infinity;
let maxY = -Infinity;
for (const f of features) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const poly of polys) {
    for (const ring of poly) {
      for (const point of ring) {
        const [x, y] = project(point);
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }
}

const width = 1000;
const scale = width / (maxX - minX);
const height = Math.ceil((maxY - minY) * scale);

const toScreen = (point) => {
  const [x, y] = project(point);
  return [(x - minX) * scale, (y - minY) * scale];
};

function ringPath(ring) {
  const points = [];
  let previous = null;
  for (const raw of ring) {
    const [x, y] = toScreen(raw).map((v) => Math.round(v * 10) / 10);
    if (previous && Math.hypot(x - previous[0], y - previous[1]) < 1.2) continue;
    points.push([x, y]);
    previous = [x, y];
  }
  if (points.length < 3) return "";
  return `M${points.map(([x, y]) => `${x} ${y}`).join("L")}Z`;
}

const counties = features
  .map((f) => {
    const key = slugify(f.properties.name);
    const name = properNames[key];
    if (!name) {
      console.error(`nume necunoscut: ${f.properties.name}`);
      process.exit(1);
    }
    const polys =
      f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
    const d = polys
      .flatMap((poly) => poly.map(ringPath))
      .filter(Boolean)
      .join("");
    return { id: slugify(name), name, d };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

writeFileSync(
  outFile,
  JSON.stringify(
    {
      source: "Natural Earth 10m admin-1 (public domain)",
      sourceUrl,
      generatedBy: "scripts/generate-map.mjs",
      viewBox: `0 0 ${width} ${height}`,
      counties,
    },
    null,
    1,
  ) + "\n",
);

console.log(`map: ${counties.length} unitati, viewBox 0 0 ${width} ${height}`);
