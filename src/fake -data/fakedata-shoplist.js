export const shoplist = [
  {
    pid: "sl1",
    image: "/images/Rectangle 32.png",
    title: "Accumsan tincidunt",
    color: [
      "/images/Ellipse 28.png",
      "/images/Ellipse 29.png",
      "/images/Ellipse 30.png",
    ],
    price: 26.00,
    sale: 52.00,
    rating: [
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "/images/Group.png",
      "/images/Vector (5).png",
      "/images/Vector (6).png",
    ],
  },
  {
    pid: "sl2",
    image: "/images/Rectangle 32 (1).png",
    title: "Accumsan tincidunt",
    color: [
      "/images/Ellipse 28.png",
      "/images/Ellipse 29.png",
      "/images/Ellipse 30.png",
    ],
    price: 26.00,
    sale: 52.00,
    rating: [
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "/images/Group.png",
      "/images/Vector (5).png",
      "/images/Vector (6).png",
    ],
  },
  {
    pid: "sl3",
    image: "/images/Rectangle 32 (2).png",
    title: "Accumsan tincidunt",
    color: [
      "/images/Ellipse 28.png",
      "/images/Ellipse 29.png",
      "/images/Ellipse 30.png",
    ],
    price: 26.00,
    sale: 52.00,
    rating: [
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "/images/Group.png",
      "/images/Vector (5).png",
      "/images/Vector (6).png",
    ],
  },
  {
    pid: "sl4",
    image: "/images/Rectangle 32 (3).png",
    title: "Accumsan tincidunt",
    color: [
      "/images/Ellipse 28.png",
      "/images/Ellipse 29.png",
      "/images/Ellipse 30.png",
    ],
    price: 26.00,
    sale: 52.00,
    rating: [
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "/images/Group.png",
      "/images/Vector (5).png",
      "/images/Vector (6).png",
    ],
  },
  {
    pid: "sl5",
    image: "/images/Rectangle 32 (4).png",
    title: "Accumsan tincidunt",
    color: [
      "/images/Ellipse 28.png",
      "/images/Ellipse 29.png",
      "/images/Ellipse 30.png",
    ],
    price: 26.00,
    sale: 52.00,
    rating: [
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "/images/Group.png",
      "/images/Vector (5).png",
      "/images/Vector (6).png",
    ],
  },
  {
    pid: "sl6",
    image: "/images/Rectangle 32 (5).png",
    title: "Accumsan tincidunt",
    color: [
      "/images/Ellipse 28.png",
      "/images/Ellipse 29.png",
      "/images/Ellipse 30.png",
    ],
    price: 26.00,
    sale: 52.00,
    rating: [
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "/images/Group.png",
      "/images/Vector (5).png",
      "/images/Vector (6).png",
    ],
  },
  {
    pid: "sl7",
    image: "/images/Rectangle 32 (6).png",
    title: "Accumsan tincidunt",
    color: [
      "/images/Ellipse 28.png",
      "/images/Ellipse 29.png",
      "/images/Ellipse 30.png",
    ],
    price: 26.00,
    sale: 52.00,
    rating: [
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (8).png",
      "/images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "/images/Group.png",
      "/images/Vector (5).png",
      "/images/Vector (6).png",
    ],
  },
];
const getById = (pid) => shoplist.find((e) => e.pid === pid);
const shoplistdata = {
  getById,
};
export default shoplistdata;
