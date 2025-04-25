export const filterData = (data, filterBy, value) => {
  const newData = []
  return newData;
};

export const sortData = (data, sortBy, sortOrder) => {
  const newData = [...data]; // Create a shallow copy to avoid mutating the original array
  return newData.sort((a, b) => {
    let valueA = a[sortBy];
    let valueB = b[sortBy];
    switch (sortBy) {
      case 'year_of_release':
        if (sortOrder === "asc") {
          return valueA - valueB;
        } else if (sortOrder === "desc") {
          return valueB - valueA;
        }
        break;
      case 'rating':
        valueA = parseFloat(valueA.split("/")[0]);
        valueB = parseFloat(valueB.split("/")[0]);
        if (sortOrder === "asc") {
          return valueA - valueB;
        } else if (sortOrder === "desc") {
          return valueB - valueA;
        }
        break;
      default:
        return 0; // Return 0 if sortBy or sortOrder is invalid, preserving original order
    }
  });
};

export const computeStats = (data) => {
  return '';
}