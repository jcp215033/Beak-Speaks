import { fetchLoggedInUser, setNav } from "./global.js";

const bgImageArray = [
  "../images/Top-10-Most-Beautiful-Birds-in-the-World.jpg",
  "../images/UN3CKn.webp",
  "../images/741453-beautiful-bird-desktop-wallpaper-1920x1263-ipad.jpg",
  "../images/f4076f86b05790a0dd75845a311070f6.jpg",
  "../images/kingfisher-2046453_1280.jpg",
  "../images/ducks-1463317_1280.jpg",
  "../images/animal-1867125_1280.jpg",
  "../images/ws_Winter_Bird_1920x1200.jpg",
  "../images/penguins-6524840_1280.jpg",
  "../images/european-eagle-owl-2010346_1280.jpg",
  "../images/gyrfalcon-2678684_1280.jpg",
  "../images/emperor-penguins-429128_1280.jpg",
  "../images/crimson-rosella-7947000_1280.jpg",
  "../images/1164202.jpg",
  "../images/blue-jay-in-winter-getty-0120-f6b7065f17c0497d8b1d3c5b55df9b42.jpg",
  "../images/dove-2516641_1280.jpg",
  "../images/bird-1045954_1280.jpg",
  "../images/LVP0594-NEF_DxO_DeepPRIME-1.jpg",
  "../images/Taiwan-Blue-Magpie-web.jpg",
  "../images/eagle-1753002_1280.jpg",
  "../images/barn-owl-1107397_1280.jpg",
  "../images/owl-2903707_1280.jpg",
  "../images/bird-7012586_1280.jpg",
  "../images/1433757.webp",
  "../images/swan-839598_1280.jpg",
  "../images/birds-7108368_1280.jpg",
  "../images/duck-7938454_1280.webp",
  "../images/297-2979788_winter-birds-wallpaper-winter-birds.jpg",
  "../images/flamingo-3309628_1280.jpg",
  "../images/peafowl-2363750_1280.jpg",
  "../images/what-is-a-bird-385521-hero-645b1041792147b88f3ccdf712f11a04.jpg",
  "../images/LVP2670.jpg",
  "../images/mallard-3747770_1280.jpg",
  "../images/zdenek-machacek-eqXiLNfZDc0-unsplash-scaled-e1653519355914.jpg",
  "../images/RBGull-Vyn-FI-1280x720.jpg",
  "../images/bird-7576994_1280.jpg",
  "../images/250de1d5b4b62b974e319b618fc4a7dd.webp",
  "../images/bird-2295431_1280.jpg",
  "../images/owl-783791_1280.jpg",
  "../images/Birds-2-960x640.jpg",
  "../images/penguins-429134_1280.jpg",
  "../images/hummingbird-2139279_1280.jpg",
  "../images/GettyImages-634869043-58a6e83f5f9b58a3c918ca12.jpg",
];

let images = [];
function preload() {
  for (let i = 0; i < bgImageArray.length; i++) {
    images[i] = new Image();
    images[i].src = bgImageArray[i];
  }
}
preload();
console.log(images);

let secs = 4;

function backgroundSequence() {
  window.clearTimeout();
  let k = 0;
  for (let i = 0; i < bgImageArray.length; i++) {
    setTimeout(function () {
      document.querySelector("#carousel_1a60").style.backgroundImage =
        "url(" + bgImageArray[k] + ")";
      if (k + 1 === bgImageArray.length) {
        setTimeout(function () {
          backgroundSequence();
        }, secs * 1000);
      } else {
        k++;
      }
    }, secs * 1000 * i);
  }
}

backgroundSequence();

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);
};

main();
