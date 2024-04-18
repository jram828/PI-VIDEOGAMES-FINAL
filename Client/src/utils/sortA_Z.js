export const sortA_Z=(array) => {
  return array.sort((a, b) =>
              a.name > b.name ? 1 : -1
            )
}