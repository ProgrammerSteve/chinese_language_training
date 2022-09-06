export const possibilitySet = [
  [0, 1, 2, 3],
  [0, 1, 3, 2],
  [0, 2, 1, 3],
  [0, 2, 3, 1],
  [0, 3, 1, 2],
  [0, 3, 2, 1],

  [1, 0, 2, 3],
  [1, 0, 3, 2],
  [1, 2, 0, 3],
  [1, 2, 3, 0],
  [1, 3, 0, 2],
  [1, 3, 2, 0],

  [2, 1, 0, 3],
  [2, 1, 3, 0],
  [2, 0, 1, 3],
  [2, 0, 3, 1],
  [2, 3, 1, 0],
  [2, 3, 0, 1],

  [3, 1, 2, 0],
  [3, 1, 0, 2],
  [3, 2, 1, 0],
  [3, 2, 0, 1],
  [3, 0, 1, 2],
  [3, 0, 2, 1],
];

export const getThreeOtherRandomNum = (num, max) => {
  const arr = [];
  for (let i = 0; i < max; i += 1) {
    arr.push(i);
  }
  const arr1 = arr.filter((item) => item !== num);
  const xInd1 = 0 + Math.floor(Math.random() * (arr1.length - 0));
  const x1 = arr1[xInd1];
  const arr2 = arr1.filter((el, ind) => ind !== xInd1);
  const xInd2 = 0 + Math.floor(Math.random() * (arr2.length - 0));
  const x2 = arr2[xInd2];
  const arr3 = arr2.filter((el, ind) => ind !== xInd2);
  const xInd3 = 0 + Math.floor(Math.random() * (arr3.length - 0));
  const x3 = arr3[xInd3];
  return [num, x1, x2, x3];
};

export const getRand = (max) => 0 + Math.floor(Math.random() * (max - 0));

// const getThreeOtherRandomNum=(num, max)=>{
//     let x1= 0 + Math.floor(Math.random() * (max- 0));
//     let x2= 0 + Math.floor(Math.random() * (max- 0));
//     let x3= 0 + Math.floor(Math.random() * (max- 0));
//     while(num===x2){
//         x1=0 + Math.floor(Math.random() * (max- 0))
//     }
//     while(num===x2 || x1===x2){
//         x2=0 + Math.floor(Math.random() * (max- 0))
//     }
//     while(num===x3 || x1===x3 || x2===x3){
//         x3=0 + Math.floor(Math.random() * (max- 0))
//     }
//     return [num,x1,x2,x3];
// }

// looks at the Pronounciation property of each object to ensure they're unique
export const getThreeOtherRandomStrings = (num, max, arr) => {
  let x1 = 0 + Math.floor(Math.random() * (max - 0));
  let x2 = 0 + Math.floor(Math.random() * (max - 0));
  let x3 = 0 + Math.floor(Math.random() * (max - 0));

  while (arr[num].Pronounciation === arr[x1].Pronounciation) {
    x1 = 0 + Math.floor(Math.random() * (max - 0));
  }
  while (
    arr[num].Pronounciation === arr[x2].Pronounciation ||
    arr[x1].Pronounciation === arr[x2].Pronounciation
  ) {
    x2 = 0 + Math.floor(Math.random() * (max - 0));
  }
  while (
    arr[num].Pronounciation === arr[x3].Pronounciation ||
    arr[x1].Pronounciation === arr[x3].Pronounciation ||
    arr[x2].Pronounciation === arr[x3].Pronounciation
  ) {
    x3 = 0 + Math.floor(Math.random() * (max - 0));
  }
  return [num, x1, x2, x3];
};
