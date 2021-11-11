export const useMediaQuery = ({ media, max, min }) => {
    const $media = window.matchMedia(`(${media})`);
    $media.addEventListener('change', updateMedia);

    function updateMedia(e) {
        e.matches ? max() : min()
    }
    updateMedia($media)
}