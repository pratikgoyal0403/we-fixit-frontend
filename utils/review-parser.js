export default function (reviews) {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((a, cv) => {
      return a + cv.rating;
    }, 0) / reviews.length
  ).toFixed(1);
}
