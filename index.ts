export function getIsoDate(arg: number | string | Date | null): string {
  if (typeof arg === 'number') {
    return new Date(arg).toISOString();
  }
  if (typeof arg === 'string') {
    const date = new Date(arg);

    if (Number.isNaN(date.valueOf())) {
      return 'invalid';
    } else {
      return date.toISOString();
    }
  }
  if (arg instanceof Date) {
    return arg.toISOString();
  }
  if (arg === null) {
    return new Date().toISOString();
  }

  throw new TypeError('Invalid argument!');
}
