import NoImage from '../assets/Image Placeholder/no-image.webp';
const getCroppedImageUrl = (url: string, width: number = 600, height: number =400):string => {
    if (!url) return NoImage;

    let target = 'media/';
    let index = url.indexOf(target)+target.length;
    return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
}

export default getCroppedImageUrl;