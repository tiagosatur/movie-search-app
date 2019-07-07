import toType from './toType';

export default function isString(argument) {
  if (toType(argument) !== 'string')
    throw new Error('Argument type must be a STRING');
  return argument;
}
