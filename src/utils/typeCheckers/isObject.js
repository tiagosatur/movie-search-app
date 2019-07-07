import toType from './toType';

export default function isObject(parameter) {
  if (toType(parameter) !== 'object')
    throw new Error('Argument must be an OBJECT');
  return parameter;
}
