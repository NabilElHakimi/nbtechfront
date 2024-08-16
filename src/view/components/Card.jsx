import { MdDelete } from "react-icons/md";


export default function Card() 
{
    return (
        <div className="flex justify-between items-center p-2 shadow-md mt-1 mx-1 rounded-md bg-white">
            <div className="flex justify-start items-center">
                <img className="w-20 h-20 rounded-sm" src="https://www.bestmark.ma/pub/media/catalog/product/cache/25b125dca8e1d433263f9ae299f7439b/8/4/845m6ea-02.jpg" />
            <div className="ml-2">
                <h1 className="text-xl">Product 1</h1>
                <p className="text-xl text-blue-800" >900 $</p>
            </div>
            </div>            
                  <MdDelete className="w-6 h-6 cursor-pointer text-red-600 hover:text-red-700" />
            </div>
    )

}