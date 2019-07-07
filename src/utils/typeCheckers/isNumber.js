import toType from './toType';

export function isNumber(argument) {
  if (toType(argument) !== 'number')
    throw new Error('Argument type must be a NUMBER');
  return argument;
}

export function isInteger(argument) {
  if (!Number.isInteger(argument))
    throw new Error('Argument must be an INTEGER NUMBER');
  return argument;
}
