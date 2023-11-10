import React from 'react'

const header = () => {
  /*return (
    <div className="flex justify-between bg-blue-100 shadow-2xl">
        <div className="w-28">
            <img className="full" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fdcassetcdn.com%2Fdesign_img%2F375573%2F141837%2F141837_3031164_375573_image.jpg&tbnid=JyMMh8Ok6nUDdM&vet=12ahUKEwj28pP3qbmCAxUnQGwGHcc8CmoQMygCegQIARBO..i&imgrefurl=https%3A%2F%2Fwww.designcrowd.com%2Fdesign%2F3031164&docid=2PtoovlOCmZCcM&w=1200&h=1000&q=logos%20for%20meal&ved=2ahUKEwj28pP3qbmCAxUnQGwGHcc8CmoQMygCegQIARBO" alt="logo"/>
            <h3>Meal Mindful</h3>
        </div>
       
    </div>

  )*/
  return(
    <div className="flex justify-between bg-blue-100 shadow-2xl">
        <div className="w-28 ">
            <img className="h-full" src="data:image/png;base64,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" alt="logo" />
        </div>
        <div className="flex justify-between">
            <ul className="flex items-center p-4 mx-3">
                <li className=" p-4 mx-2">Home</li>
                <li className=" p-4 mx-2">About Us</li>
                <li className=" p-4 mx-2">Contact</li>
                
            </ul>
        </div>
    </div>
)
};


export default header;