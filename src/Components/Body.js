import restoList from "../utils/RESTRO_LIST.JS";
import RestroCards from "./RestroCards";
import { useState } from "react";

const Body = () => {

  const [listofRestorant, setListofRestorant] = useState(restoList);

  // const {avgRatingString} = restorant?.card.card.info;

  return (
    <div className="body">
      <div className="Search">
        <input placeholder="Food,Restorant,etc"></input>
        <button>Search</button>
      </div>
      <button className="Top-rated" onClick={()=>{setListofRestorant(listofRestorant.filter((restorant=> restorant.card.card.info.avgRatingString > 4.1))) }}>Top Rated Restorants</button>
      <div className="res-container">
       {
        listofRestorant.map((resto)=>{
          return(
            <RestroCards key={resto.card.card.info.id} restData={resto}/>
          )
        })
       }
      </div>
    </div>
  );
};

export default Body;