// import React, {useReducer, useState, useEffect} from 'react';
// import './Home.css';

// const handleSubmitForm=(e,state)=>{
// 	e.preventDefault();
// 	if(state.selected===state.answer){
// 		return true;
// 	}
// 	else{return false;}
// }

// const getThreeOtherRandomNum=(num, max)=>{
// 	let x1= 0 + Math.floor(Math.random() * (max- 0));
// 	let x2= 0 + Math.floor(Math.random() * (max- 0));
// 	let x3= 0 + Math.floor(Math.random() * (max- 0));
// 	while(num===x2){
// 		x1=0 + Math.floor(Math.random() * (max- 0))
// 	}
// 	while(num===x2 || x1===x2){
// 		x2=0 + Math.floor(Math.random() * (max- 0))
// 	}
// 	while(num===x3 || x1===x3 || x2===x3){
// 		x3=0 + Math.floor(Math.random() * (max- 0))
// 	}
// 	return [num,x1,x2,x3];
// }

// const getInt=(Characters, nums)=> {
// 	let max=Object.keys(Characters).length-1;
// 	if(nums[0]>max-3){
// 		nums[1]=nums[0]-1;
// 		nums[2]=nums[1]-1;
// 		nums[3]=nums[2]-1;
// 	}
// 	else{
// 		nums[1]=nums[0]+1;
// 		nums[2]=nums[1]+1;
// 		nums[3]=nums[2]+1;
// 	}
// }

// const initialState={
// 	correct:0,
// 	total:0,
// 	answer:Characters[0].Pronounciation,
// 	selected:'',
// 	num:0,
// 	rand:1,
// 	lcg:123,
// }

// const reducer=(state,action)=>{
// 	switch(action.type){
// 		case 'correctAnswer':
// 			return {
// 					...state,
// 					lcg:prng(state.lcg),
// 					num:psuedoRandChar(state.lcg),
// 					rand:psuedoRandChoice(state.lcg),
// 					correct:state.correct +1,
// 					total:state.total+1,
// 					answer:Characters[psuedoRandChar(state.lcg)].Pronounciation,
// 					selected:'',

// 				};
// 		case 'wrongAnswer':
// 			return {
// 					...state,
// 					lcg:prng(state.lcg),
// 					num:psuedoRandChar(state.lcg),
// 					rand:psuedoRandChoice(state.lcg),
// 					total:state.total+1,
// 					answer:Characters[psuedoRandChar(state.lcg)].Pronounciation,
// 					selected:'',
// 				};
// 		case 'selection':
// 			return {
// 					...state,
// 					selected:action.payload,
// 				};
// 		case 'answer':
// 			return {
// 				...state,
// 				answer:action.payload,
// 			};
// 		case 'reset':
// 			return{
// 				...initialState,
// 			};
// 		default:
// 			return state;
// 	}
// };

// const Home=()=>{
// 	const [state, dispatch] = useReducer(reducer, initialState);
// 	let num =state.num
// 	let nums =[num,null,null,null];
// 	getInt(Characters, nums);
// 	let set=possibilitySet[state.rand];

// 	var inputElements = [];
// 	for (var i = 0; i < 4; i++) {
// 		let z=nums[set[i]];

//     	inputElements.push(
//     		<div className="choices">
// 				<input
// 				type="radio"
// 				id={`choice-${i}`}
// 				name="radAnswer"
// 				value={Characters[z].Pronounciation}
// 				checked={state.selected===Characters[z].Pronounciation}
// 				onChange={(e) => dispatch({type: 'selection', payload:e.currentTarget.value})}
// 				/>
// 				<label for="choices">{Characters[z].Pronounciation}</label>
// 			</div>
//     	);
// 	}

// 	return(
// 		<>
// 		<div className ="homeMainContainer">

// 						<div id="info">
// 							<h3>Correct: {state.correct}/{state.total}</h3>
// 						</div>
// 						{/*<img src="checkmark.png" alt="check"/>*/}

// 						<div id="selectiondiv">

// 							<div id="char">
// 								<p>{Characters[nums[0]].Character}</p>
// 							</div>

// 							<div>
// 								<form onSubmit={(e)=>handleSubmitForm(e,state)?dispatch({type: 'correctAnswer'}):dispatch({type: 'wrongAnswer'})}>

// 									<div className="formDiv">{inputElements}</div>

// 									<div id="buttoncontainerdiv">
// 										<button
// 										type="button"
// 										id="reset"
// 										onClick={()=>dispatch({type: 'reset'})}
// 										>
// 											Reset
// 										</button>

// 										<button
// 										 id="submit"
// 										 >Submit</button>
// 									</div>

// 								</form>
// 							</div>

// 						</div>

// 		</div>
// 		</>
// 	);
// }

// export default Home;
