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

const galleryLinks = document.querySelectorAll(".lightbox");

galleryLinks.forEach((galleryLink) => {
  galleryLink.addEventListener("click", function (event) {
    event.preventDefault();
    const imageSource = this.href;
    const instance = basicLightbox.create(`<img src="${imageSource}">`);
    instance.show();
  });
});

console.log(galleryItems);
