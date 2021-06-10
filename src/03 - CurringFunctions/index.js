function MultiplyClosure(arr) {
  const newArray = [];

  return ((item) => {
    arr.map((element) => {
      newArray.push(element * item);
    });
    return newArray;
  });
}

export default MultiplyClosure;
