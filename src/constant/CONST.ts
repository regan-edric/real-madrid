export const NAV_ITEM = [
  {
    url: "#",
    name: "Madridista",
  },
  {
    url: "#",
    name: "Tickets",
  },
  {
    url: "#",
    name: "Hospitality",
  },
  {
    url: "#",
    name: "Tour",
  },
  {
    url: "#",
    name: "Shop",
  },
  {
    url: "#",
    name: "RM Play",
  },
];

export const ITEMS_NEWS = [
  {
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--2c6862ff-67dc-422c-8711-ddd28b084559/ND_ENTRENAMIENTO_03_AV24552.app.png?preferwebp=true&width=1440",
    caption: "The team continue preparations for European Super Cup",
  },
  {
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--220a34df-7e4d-49d7-91b1-a5ca2f20f08b/ND_ESTADIO_NACIONAL_VARSOVIA_GettyImages_1477232133.app.png?preferwebp=true&width=400",
    caption: "Real Madrid face Atalanta in the European Super Cup on 14 August",
  },
  {
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--62fd9b98-33a7-421b-a399-ef87a78456ab/ND_ANCELOTTI_1PC2087_.app.png?preferwebp=true&width=400",
    caption: `Ancelloti: "We're heading into the European Super Cup full of confidence and belief"`,
  },
  {
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--53194dba-74d3-4909-aca0-918a2a8b0c7e/ND_COURTOIS_1PC3179.app.png?preferwebp=true&width=400",
    caption: `Courtois: "It'll be a tough game against Atalanta but we want to win the European Super Cup"`,
  },
  {
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--a42fd51d-f261-4e34-b57c-3e60ba6de23e/ND_YABUSELE_FRANCIA_USA.app.png?preferwebp=true&width=400",
    caption: "Yabusele takes silver at the Olympics",
  },
  {
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5dcf2466-8b3d-49bb-a456-e4b9fcabe83c/ND_ANTONIA_BRASIL_GettyImages_2163817581.app.png?preferwebp=true&width=400",
    caption: "Antonia Silva takes Olympic silver with Brazil",
  },
  {
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--10c8ea10-52c0-4c69-90f5-d5f2b15d10a4/ND_01_TENERIFE_CASTILLA.app.png?preferwebp=true&width=400",
    caption: "0-1: Castilla wins the Teide Trophy",
  },
];

interface IEvent {
  logoHome: string;
  logoAway: string;
  nameHome: string;
  nameAway: string;
  typeMatch: "UCL" | "La Liga";
  matchDay: string;
  date: string;
  stadium: string;
}

export const NEXT_EVENTS: IEvent[] = [
  {
    logoHome:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7fde7433-9329-4f6d-9616-694c57bc0aeb/_ae3awgwm3i1jds5tfct5441j.app.webp?preferwebp=true&width=144&height=144",
    logoAway:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true&width=144&height=144",
    nameHome: "Las Palmas",
    nameAway: "Real Madrid",
    typeMatch: "La Liga",
    matchDay: "Matchday 3",
    stadium: "Estadio de Gran Canaria",
    date: "Thursday, Aug 29, 9:30 PM h",
  },
  {
    logoHome:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true&width=144&height=144",
    logoAway:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--67beb433-44d6-47e3-9fe9-78b582a08220/ah8dala7suqqkj04n2l8xz4zd.app.webp?preferwebp=true&width=144&height=144",
    nameHome: "Real Madrid",
    nameAway: "Real Betis",
    typeMatch: "La Liga",
    matchDay: "Matchday 4",
    stadium: "Estadio Santiago Bernabeu",
    date: "Sunday, Sep 1, 9:30 PM h",
  },
  {
    logoHome:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b1b4b50e-5cca-49b2-aeff-38d7dff6a65f/_3f5h8t5e9qm1fqmvfkb23ghh.app.webp?preferwebp=true&width=144&height=144",
    logoAway:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true&width=144&height=144",
    nameHome: "Real Sociedad",
    nameAway: "Real Madrid",
    typeMatch: "La Liga",
    matchDay: "Matchday 4",
    stadium: "Reale Arena",
    date: "Sunday, Sep 15, 9:30 PM h",
  },
  {
    logoHome:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b1b4b50e-5cca-49b2-aeff-38d7dff6a65f/_3f5h8t5e9qm1fqmvfkb23ghh.app.webp?preferwebp=true&width=144&height=144",
    logoAway:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true&width=144&height=144",
    nameHome: "Real Sociedad",
    nameAway: "Real Madrid",
    typeMatch: "La Liga",
    matchDay: "Matchday 4",
    stadium: "Reale Arena",
    date: "Sunday, Sep 15, 9:30 PM h",
  },
  {
    logoHome:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b1b4b50e-5cca-49b2-aeff-38d7dff6a65f/_3f5h8t5e9qm1fqmvfkb23ghh.app.webp?preferwebp=true&width=144&height=144",
    logoAway:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true&width=144&height=144",
    nameHome: "Real Sociedad",
    nameAway: "Real Madrid",
    typeMatch: "La Liga",
    matchDay: "Matchday 4",
    stadium: "Reale Arena",
    date: "Sunday, Sep 15, 9:30 PM h",
  },
  {
    logoHome:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b1b4b50e-5cca-49b2-aeff-38d7dff6a65f/_3f5h8t5e9qm1fqmvfkb23ghh.app.webp?preferwebp=true&width=144&height=144",
    logoAway:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true&width=144&height=144",
    nameHome: "Real Sociedad",
    nameAway: "Real Madrid",
    typeMatch: "La Liga",
    matchDay: "Matchday 4",
    stadium: "Reale Arena",
    date: "Sunday, Sep 15, 9:30 PM h",
  },
  {
    logoHome:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b1b4b50e-5cca-49b2-aeff-38d7dff6a65f/_3f5h8t5e9qm1fqmvfkb23ghh.app.webp?preferwebp=true&width=144&height=144",
    logoAway:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true&width=144&height=144",
    nameHome: "Real Sociedad",
    nameAway: "Real Madrid",
    typeMatch: "La Liga",
    matchDay: "Matchday 4",
    stadium: "Reale Arena",
    date: "Sunday, Sep 15, 9:30 PM h",
  },
  {
    logoHome:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b1b4b50e-5cca-49b2-aeff-38d7dff6a65f/_3f5h8t5e9qm1fqmvfkb23ghh.app.webp?preferwebp=true&width=144&height=144",
    logoAway:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.webp?preferwebp=true&width=144&height=144",
    nameHome: "Real Sociedad",
    nameAway: "Real Madrid",
    typeMatch: "La Liga",
    matchDay: "Matchday 4",
    stadium: "Reale Arena",
    date: "Sunday, Sep 15, 9:30 PM h",
  },
];

export const TROPHY = [
  {
    id: 1,
    title: "The Best Club of the 20th Century FIFA Trophy",
    img: "https://assets.realmadrid.com/is/content/realmadrid/SIGLOXX-1?$Desktop$&wid=40&hei=40",
    count: 1,
  },
  {
    id: 2,
    title: "European Cups",
    img: "https://assets.realmadrid.com/is/content/realmadrid/4oogyu6o156iphvdvphwpck10-icon?$Desktop$&wid=40&hei=40",
    count: 15,
  },
  {
    id: 3,
    title: "Fifa Club World Cups",
    img: "https://assets.realmadrid.com/is/content/realmadrid/cmvff99i4w10udooqckzt8c2x-icon?$Desktop$&wid=40&hei=40",
    count: 8,
  },
  {
    id: 4,
    title: "National Leagues",
    img: "https://assets.realmadrid.com/is/content/realmadrid/34pl8szyvrbwcmfkuocjm3r6t-icon?$Desktop$&wid=40&hei=40",
    count: 36,
  },
  {
    id: 5,
    title: "EUFA Cups",
    img: "https://assets.realmadrid.com/is/content/realmadrid/COPA+DE+LA+UEFA?$Desktop$&wid=40&hei=40",
    count: 2,
  },
  {
    id: 6,
    title: "European Super Cups",
    img: "https://assets.realmadrid.com/is/content/realmadrid/a0f4gtru0oyxmpvty4thc5qkc_icon?$Desktop$&wid=40&hei=40",
    count: 6,
  },
  {
    id: 7,
    title: "Spanish Cups",
    img: "https://assets.realmadrid.com/is/content/realmadrid/apdwh753fupxheygs8seahh7x-icon?$Desktop$&wid=40&hei=40",
    count: 6,
  },
  {
    id: 8,
    title: "Spanish Super Cups",
    img: "https://assets.realmadrid.com/is/content/realmadrid/sd8z02fe455z2fjvlxvxh0zo-icon?$Desktop$&wid=40&hei=40",
    count: 13,
  },
];
