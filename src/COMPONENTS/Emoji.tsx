import bullsEye from '../assets/Emojis/bulls-eye.webp';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';
import {Image, ImageProps} from "@chakra-ui/react";

interface Props {
    rating: number
}

export const Emoji = ({rating}: Props) => {
    if (rating < 3) return null;

    const emojiMap: {[key: number] : ImageProps}= {
        3: {src: meh, boxSize:'25px'},
        4: {src: thumbsUp, boxSize:'25px'},
        5: {src: bullsEye, boxSize:'35px'},
    }


    return (
        // {...emojiMap[rating]}
        <Image {...emojiMap[rating]} />
    );
};