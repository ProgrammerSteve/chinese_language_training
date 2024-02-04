import React from "react";

const Navbar=()=>{
    return(
        <div className="fixed w-screen h-12 bg-gray-800 flex justify-around item-center">
            <div className="text-white my-auto hover:bg-gray-500 h-1/2 w-16 rounded-md grid place-content-center cursor-pointer">HSK1</div>
            <div className="text-white my-auto hover:bg-gray-500 h-1/2 w-16 rounded-md grid place-content-center cursor-pointer">HSK2</div>
            <div className="text-white my-auto hover:bg-gray-500 h-1/2 w-16 rounded-md grid place-content-center cursor-pointer">HSK3</div>
            <div className="text-white my-auto hover:bg-gray-500 h-1/2 w-16 rounded-md grid place-content-center cursor-pointer">HSK4</div>
            <div className="text-white my-auto hover:bg-gray-500 h-1/2 w-16 rounded-md grid place-content-center cursor-pointer">HSK5</div>


        </div>
    )
}
export default Navbar;
