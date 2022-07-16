import ShopLeft from "../page/ShopLeft";

export const shopleft = [
  {
    pid: "s1",
    image: "/images/Rectangle 32 (7).png",
    title: "Dictum morbi",
    color: [
      "/images/Ellipse 28.png",
      "/images/Ellipse 29.png",
      "/images/Ellipse 30.png",
    ],
    price: "$26.00",
    sale: "$52.00",
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
    pid: "s2",
    image: "/images/Rectangle 32 (8).png",
    title: "Sodales sit",
    color: [
      "/images/Ellipse 28.png",
      "/images/Ellipse 29.png",
      "/images/Ellipse 30.png",
    ],
    price: "$26.00",
    sale: "$52.00",
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
    pid: "s3",
    image: "/images/Rectangle 32 (9).png",
    title: "Nibh varius",
    color: [
      "./images/Ellipse 28.png",
      "./images/Ellipse 29.png",
      "./images/Ellipse 30.png",
    ],
    price: "$26.00",
    sale: "$52.00",
    rating: [
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "./images/Group.png",
      "./images/Vector (5).png",
      "./images/Vector (6).png",
    ],
  },
  {
    pid: "s4",
    image: "/images/Rectangle 32 (10).png",
    title: "Mauris quis",
    color: [
      "./images/Ellipse 28.png",
      "./images/Ellipse 29.png",
      "./images/Ellipse 30.png",
    ],
    price: "$26.00",
    sale: "$52.00",
    rating: [
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "./images/Group.png",
      "./images/Vector (5).png",
      "./images/Vector (6).png",
    ],
  },
  {
    pid: "s5",
    image: "/images/Rectangle 32 (11).png",
    title: "Morbi sagittis",
    color: [
      "./images/Ellipse 28.png",
      "./images/Ellipse 29.png",
      "./images/Ellipse 30.png",
    ],
    price: "$26.00",
    sale: "$52.00",
    rating: [
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "./images/Group.png",
      "./images/Vector (5).png",
      "./images/Vector (6).png",
    ],
  },
  {
    pid: "s6",
    image: "/images/Rectangle 32 (12).png",
    title: "Ultricies venenatis",
    color: [
      "./images/Ellipse 28.png",
      "./images/Ellipse 29.png",
      "./images/Ellipse 30.png",
    ],
    price: "$26.00",
    sale: "$52.00",
    rating: [
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "./images/Group.png",
      "./images/Vector (5).png",
      "./images/Vector (6).png",
    ],
  },
  {
    pid: "s7",
    image: "/images/Rectangle 32 (13).png",
    title: "Scelerisque dignissim",
    color: [
      "./images/Ellipse 28.png",
      "./images/Ellipse 29.png",
      "./images/Ellipse 30.png",
    ],
    price: "$26.00",
    sale: "$52.00",
    rating: [
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (8).png",
      "./images/Vector (10).png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    vector: [
      "./images/Group.png",
      "./images/Vector (5).png",
      "./images/Vector (6).png",
    ],
  },
];
const getById = (pid) => shopleft.find((e) => e.pid === pid);
const shopleftdata = {
  getById,
};
export default shopleftdata;
