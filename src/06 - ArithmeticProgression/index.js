const arithmeticProgression = ((first, diff, n) => {
  const array = [first];
  for (let index = 0; index < n - 1; index++) {
    array.push(array[index] + diff);
  }
  return array.join(', ');
});

export default arithmeticProgression;
