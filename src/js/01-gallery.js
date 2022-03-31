// Add imports above this line
import { galleryItems } from './gallery-items';
import Simplelightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryItem = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryItem.innerHTML = galleryMarkup;

    
function createGalleryMarkup(items) {
    return items.map(item => `<div><a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a></div>`).join('');
}

const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom',});

