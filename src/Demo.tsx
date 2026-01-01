import React, { useEffect, useState } from "react";
import Food from "../src/assets/food_1.png";
const Demo = () => {
  const [items, setItems] = useState([]);

  const getData = async () => {
    let data = await fetch(
      "https://fakerapi.it/api/v2/images?_quantity=1213&_type=any&_height=300"
    );
    data = await data.json().then((res)=>{

        if(res?.code==200){
            setItems(res.data);
            alert("kkk")
        }
    });



  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="">
      <div className="w-full flex flex-wrap gap-5 justify-around overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition">
        {items && items?.map((item:any,i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <img src={item.url} alt="card" className="h-48 w-48  object-cover" />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Short product description here.
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-orange-600">
                  ₹1,999
                </span>

                <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600 transition">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
