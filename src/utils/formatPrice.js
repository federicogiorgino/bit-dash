export const formatPrice = (number) => {
  return +(number + "").slice(0, 7);
};
