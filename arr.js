function nth_most_rate(arr, n) {
    const countingMap = {};
  // Counting the frequency of each element in the array
    arr.forEach(num => {
      countingMap[num] = (countingMap[num] || 0) + 1;
    });
  // Sort the items based on their frequency in ascending order
    const sortedList = Object.entries(countingMap).sort((a, b) => a[1] - b[1]);
  

    if (n >= 1 && n <= sortedList.length) {
      
      return parseInt(sortedList[n - 1][0]);
    } else {
      return null; // return null if n is out of range
    }
  }
  
  // Example 
  const arr = [5, 4, 5, 4, 5, 4, 5, 3, 3, 3, 2, 2, 2,2,1, 5];
  const n = 4;
  const result = nth_most_rate(arr, n);
  console.log(result);
  