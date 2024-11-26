import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = new SimpleLightbox('#gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
})
