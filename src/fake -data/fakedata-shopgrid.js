export const shopgrid_product = [
  {
    pid: "sg1",
    image: "/images/image 9.png",
    title: "Vel elit euismod",
    price: 32.0,
  },
  {
    pid: "sg2",
    image: "/images/image 1165.png",
    title: "Ultricies condimentum imperdiet",
    price: 32.0,
  },
  {
    pid: "sg3",
    image: "/images/image 1173.png",
    title: "Vitae suspendisse sed",
    price: 32.0,
  },
  {
    pid: "sg4",
    image: "/images/10011 1.png",
    title: "Sed at fermentum",
    price: 32.0,
  },
  {
    pid: "sg5",
    image: "/images/unnamed 1.png",
    title: "Fusce pellentesque at ",
    price: 32.0,
  },
  {
    pid: "sg6",
    image: "/images/laooret.png",
    title: "Vestibulum magna laoreet  ",
    price: 32.0,
  },
  {
    pid: "sg7",
    image: "/images/purepng 1.png",
    title: "Sollicitudin amet orci",
    price: 32.0,
  },
  {
    pid: "sg8",
    image: "/images/image 1164.png",
    title: "Ultrices mauris sit",
    price: 32.0,
  },
  {
    pid: "sg9",
    image: "/images/res.png",
    title: "Pellentesque condimentum ac",
    price: 32.0,
  },
  {
    pid: "sg10",
    image: "/images/cam 2.png",
    title: "Cras scelerisque velit",
    price: 32.0,
  },
  {
    pid: "sg11",
    image: "/images/lectus.png",
    title: "Lectus vulputate faucibus",
    price: 32.0,
  },
  {
    pid: "sg12",
    image: "/images/10011 1.png",
    title: "Purus risus, ut",
    price: 32.0,
  },
];
const getById = (pid) => shopgrid_product.find((e) => e.pid === pid);
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
