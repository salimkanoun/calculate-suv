import combineDateTime, { FullDateInterface } from './combineDateTime';
import parseDA from './parseDA';
import parseTM from './parseTM';

/**
 * Utility to create a FullDateInterface object given a string formatted as yyyy-mm-ddTHH:MM:SS.FFFFFFZ
 *
 * @export
 * @param {string} dateTime
 * @return {*}  {FullDateInterface}
 */
export default function dateTimeToFullDateInterface(
  dateTime: string
): FullDateInterface {
  const date = parseDA(dateTime.substring(0, 8));
  const time = parseTM(dateTime.substring(8));
  return combineDateTime(date, time);
}

export { dateTimeToFullDateInterface };