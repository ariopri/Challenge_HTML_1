  let array = [1,2,3,4,5,6,7,8,9,10];

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }

  let person = {
      name: 'Bob',
      age: 32,
  }

  for (let key in person) {
      console.log(`${key}: ${person[key]}`);
  }

//penggunaan map
  let arr = [1,2,3,4,5,6,7,8,9,10];

  let newArr = arr.map(function(item) {
      return item * 2;
  });

// penggunaan while

  while (i < 10) {
      console.log(i);
      i++;
  }