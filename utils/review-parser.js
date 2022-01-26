export default function (reviews) {
  return (
    reviews.reduce((a, cv) => {
      return a + cv.rating;
    }, 0) / reviews.length
  ).toFixed(1);
}
