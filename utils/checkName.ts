export const checkTheNameOfItem = (name: string): string => {
  if (name.length > 15) {
    name = name.slice(0, 15) + '...';
  }
  return name;
}