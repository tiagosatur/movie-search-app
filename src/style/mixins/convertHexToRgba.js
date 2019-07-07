function convertHexToRgba(hex, opacity) {
  if (!hex || !opacity) {
    throw new Error('Hexadecimal color and opacity arguments are required');
  }

  hex = hex.replace('#', '');
  let r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16);

  let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

export default convertHexToRgba;
