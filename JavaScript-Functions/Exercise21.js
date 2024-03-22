function getSubsets(arr, length) {
  const subsets = [];
  function generateSubsets(currentSubset, startIndex) {
    if (currentSubset.length === length) {
      subsets.push(currentSubset.slice());
      return;
    }
    for (let i = startIndex; i < arr.length; i++) {
      currentSubset.push(arr[i]);
      generateSubsets(currentSubset, i + 1);
      currentSubset.pop();
    }
  }
  generateSubsets([], 0);
  return subsets;
}
console.log(getSubsets([1, 2, 3], 2));
