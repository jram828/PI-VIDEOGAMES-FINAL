export const sortRA = (array) => {
  return array.sort(
              (a, b) => a.rating - b.rating
            )
}