import { fetchLoggedInUser, handleFetch, setNav } from "./global.js";

function changeBackground() {
  const images = [
    'url("https://indianaaudubon.org/wp-content/uploads/2016/02/colourful-bird-high-definition-wallpaper-for-desktop-background-download-free.jpg")',
    'url("https://wallpaperaccess.com/full/1433757.jpg")',
    'url("https://wallpaperaccess.com/full/3668439.jpg")',
    'url("https://wallpapercave.com/wp/wp3286691.jpg")',
    'url("https://wallpapers.com/images/featured/gexou6yuac2g8fbu.jpg")',
    'url("https://i.pinimg.com/originals/f4/07/6f/f4076f86b05790a0dd75845a311070f6.jpg")',
    'url("https://cdn.wallpapersafari.com/42/71/UN3CKn.jpeg")',
    'url("https://wallup.net/wp-content/uploads/2018/10/07/848628-berries-jay-branch-winter-snow-bird-748x468.jpg")',
    'url("https://wallpaperstock.net/winter-bird-wallpapers_32301_1920x1200.jpg")',
    'url("https://www.itl.cat/pngfile/big/297-2979788_winter-birds-wallpaper-winter-birds.jpg")',
    'url("https://wallpaperaccess.com/full/1164202.jpg")',
    'url("https://a-z-animals.com/media/2021/11/Cool-Types-of-Birds-toucan-1024x535.jpg")',
    'url("https://cdn.thecoolist.com/wp-content/uploads/2021/05/Top-10-Most-Beautiful-Birds-in-the-World.jpg")',
    'url("https://www.thespruce.com/thmb/7i24MewNuomTbv-I9mUxLx8l-yc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-a-bird-385521-hero-645b1041792147b88f3ccdf712f11a04.jpg")',
    'url("https://photographylife.com/wp-content/uploads/2022/01/LVP2670.jpg")',
    'url("https://www.zooplus.ie/magazine/wp-content/uploads/2022/01/Two-Macaws-on-a-perch-1-768x514.jpeg")',
    'url("https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg")',
  ];
  const body = document.querySelector("#carousel_1a60");
  const background = images[Math.floor(Math.random() * images.length)];
  body.style.backgroundImage = background;
}
setInterval(changeBackground, 3000);

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);
};

main();
