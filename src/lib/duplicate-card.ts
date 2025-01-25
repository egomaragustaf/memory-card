import { shuffleArray } from "./shuffle-array";

export function duplicateCard(images: string[]) {
  const duplicatedImages = [...images, ...images];
  const shuffledImages = shuffleArray(duplicatedImages);
  return shuffledImages.map((imageURL, index) => ({
    id: index,
    imageURL,
    isFlipped: false, // Default value
    isMatched: false, // Default value
  }));
}
