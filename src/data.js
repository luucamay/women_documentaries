export const filterData = (data, filterBy, value) => {
  const newData = []
  return newData;
};

export const sortData = (data, sortBy, sortOrder) => {
  const newData = [...data]; // Create a shallow copy to avoid mutating the original array
  return newData.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    if (sortOrder === "asc") {
      return valueA - valueB;
    } else if (sortOrder === "desc") {
      return valueB - valueA;
    }
    return 0; // Return 0 if sortBy or sortOrder is invalid, preserving original order
  });
};

export const computeStats = (data) => {
  return '';
}