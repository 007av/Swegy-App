import restoList from "../utils/RESTRO_LIST.JS";
import RestroCards from "./RestroCards";

const Body = () => {
  return (
    <div className="body">
      <div className="Search">
        <input placeholder="Food,Restorant,etc"></input>
        <button>Search</button>
      </div>
      <div className="res-container">
       {
        restoList.map((resto)=>{
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