const getCroppedImageUrl = (url: string, width: number = 600, height: number =400):string => {
    if (!url) return '';
    let target = 'media/';
    let index = url.indexOf(target)+target.length;
    return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
}

export default getCroppedImageUrl;