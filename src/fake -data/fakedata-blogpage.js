export const blogpage = [
  {
    pid: "lt1",
    imgage: "/images/JIUjvqe2ZHg.png",
    title: "Top esssential Trends in 2021",
    description:
      "More off this less hello samlande lied much over tightly circa horse taped mightly",
    calender: [
      "/images/Vector (3).png",
      "SaberAli",
      "/images/Vector (4).png",
      "21 August,2020",
    ],
  },
  {
    pid: "lt2",
    imgage: "/images/2dc.png",
    title: "Top esssential Trends in 2021",
    description:
      "More off this less hello samlande lied much over tightly circa horse taped mightly",
    calender: [
      "/images/Vector (3).png",
      "SaberAli",
      "/images/Vector (4).png",
      "21 August,2020",
    ],
  },
  {
    pid: "lt3",
    imgage: "/images/3dc.png",
    title: "Top esssential Trends in 2021",
    description:
      "More off this less hello samlande lied much over tightly circa horse taped mightly",
    calender: [
      "/images/Vector (3).png",
      "SaberAli",
      "/images/Vector (4).png",
      "21 August,2020",
    ],
  },
  {
    pid: "lt4",
    imgage: "/images/blogpage1.png",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    calender: [
      "/images/Vector (3).png",
      "Surf Auxion",
      "/images/Vector (4).png",
      "Aug 09 2020",
    ],
  },
  {
    pid: "lt5",
    imgage: "/images/blogpage2.png",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    calender: [
      "/images/Vector (3).png",
      "Surf Auxion",
      "/images/Vector (4).png",
      "Aug 09 2020",
    ],
  },
  {
    pid: "lt6",
    imgage: "/images/blogpage3.png",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    calender: [
      "/images/Vector (3).png",
      "Surf Auxion",
      "/images/Vector (4).png",
      "Aug 09 2020",
    ],
  },
];
const getById = (pid) => blogpage.find((e) => e.pid === pid);
const getCartDetail = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getById(e.pid);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};
const productData = {
  getById,
  getCartDetail,
};
export default productData;
