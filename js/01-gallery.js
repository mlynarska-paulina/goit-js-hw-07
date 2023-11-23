import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryitem = document.createElement("div");
  galleryitem.classList.add("gallery__item");

  const gallerylink = document.createElement("a");
  gallerylink.href = item.original;
  gallerylink.classList.add("gallery__link", "lightbox");

  const galleryimage = document.createElement("img");
  galleryimage.src = item.preview;
  galleryimage.dataset.src = item.original;
  galleryimage.alt = item.description;
  galleryimage.classList.add("gallery__image");

  gallerylink.appendChild(galleryimage);
  galleryitem.appendChild(gallerylink);
  gallery.appendChild(galleryitem);
});

let instance;

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    instance = basicLightbox.create(`<img src=${e.target.dataset.src}>
      `);
    instance.show();
  }
});
console.log(galleryItems);
