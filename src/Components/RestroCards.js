import { RESTORANT_IMG } from "../utils/RETORANT_IMGES.JS";
const RestroCards = (props) => {
  
const {restData} = props;

const {cloudinaryImageId,cuisines,name,costForTwo,avgRating} = restData?.card.card.info;
 

  return (
    <div className="RetroCards">
      <img
        className="res-img"
        alt="image"
        src={
          RESTORANT_IMG +
          cloudinaryImageId
        }
      />
      <h2 className="Restorant-name">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <p>{costForTwo}</p>
      <h4> Avrage Rating{avgRating}</h4>
    </div>
  );
};

export default RestroCards;