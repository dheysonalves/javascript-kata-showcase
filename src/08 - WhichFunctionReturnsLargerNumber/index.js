const whichIsLarger = ((callback, callbackTwo) => {
  const returnCallback = callback();
  const returnCallbackTwo = callbackTwo();

  if (returnCallback < returnCallbackTwo) {
    return 'g';
  }

  if (returnCallback > returnCallbackTwo) {
    return 'f';
  }

  return 'neither';
});

export default whichIsLarger;
