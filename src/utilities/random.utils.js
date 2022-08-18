export const possibilitySet=[
	[0,1,2,3],
	[0,1,3,2],
	[0,2,1,3],
	[0,2,3,1],
	[0,3,1,2],
	[0,3,2,1],

	[1,0,2,3],
	[1,0,3,2],
	[1,2,0,3],
	[1,2,3,0],
	[1,3,0,2],
	[1,3,2,0],

	[2,1,0,3],
	[2,1,3,0],
	[2,0,1,3],
	[2,0,3,1],
	[2,3,1,0],
	[2,3,0,1],

	[3,1,2,0],
	[3,1,0,2],
	[3,2,1,0],
	[3,2,0,1],
	[3,0,1,2],
	[3,0,2,1]	
];



export const getThreeOtherRandomNum=(num, max)=>{
	const arr=[];
	for(let i=0;i<max;i++){
		arr.push(i)
	}
	let arr1= arr.filter(item=>item!==num)
	let x1_ind= 0 + Math.floor(Math.random() * (arr1.length- 0));
	let x1=arr1[x1_ind]
	let arr2=arr1.filter((el,ind)=>ind!==x1_ind);
	let x2_ind= 0 + Math.floor(Math.random() * (arr2.length- 0));
	let x2=arr2[x2_ind]
	let arr3=arr2.filter((el,ind)=>ind!==x2_ind);
	let x3_ind=0 + Math.floor(Math.random() * (arr3.length- 0));
	let x3=arr3[x3_ind]
	return [num,x1,x2,x3];
}

export const getRand=(max)=>{
	return( 0 + Math.floor(Math.random() * (max- 0)))
 }

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
const getThreeOtherRandomStrings=(num, max, arr)=>{
    let x1= 0 + Math.floor(Math.random() * (max- 0));
    let x2= 0 + Math.floor(Math.random() * (max- 0));
    let x3= 0 + Math.floor(Math.random() * (max- 0));

    while(arr[num].Pronounciation===arr[x1].Pronounciation){
        x1=0 + Math.floor(Math.random() * (max- 0))
    }
    while(arr[num].Pronounciation===arr[x2].Pronounciation || arr[x1].Pronounciation===arr[x2].Pronounciation){
        x2=0 + Math.floor(Math.random() * (max- 0))
    }
    while(arr[num].Pronounciation===arr[x3].Pronounciation || arr[x1].Pronounciation===arr[x3].Pronounciation || arr[x2].Pronounciation===arr[x3].Pronounciation){
        x3=0 + Math.floor(Math.random() * (max- 0))
    }
    return [num,x1,x2,x3];
}