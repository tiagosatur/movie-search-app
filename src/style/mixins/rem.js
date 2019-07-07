import { isInteger } from '../../utils/typeCheckers';

const rem = pixelValue => {
  const base = 16;

  if (isInteger(pixelValue)) {
    return `${(pixelValue / base) * 1}rem`;
  }
};

export default rem;
