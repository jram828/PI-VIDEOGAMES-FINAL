export const sortRD = (array) => {
  return array.sort(
              (a, b) => b.rating - a.rating
            )
}