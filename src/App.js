import './App.css'

import FilteredList from "./FilteredList.js"

import Sadring from "./images/sadfacering16.20.jpg"
import SmileyChain from "./images/smileyring20.90.jpg"
import TripleGoldSmiley from "./images/goldsmileyring16.80.jpg"
import MixedSmile from "./images/mixedsmileyring18.10.jpg"
import StarDiamond from "./images/starDiamondEarrings.jpg"
import Bamboo from "./images/bambooearrings4.80.jpg"
import Green from "./images/greencrystalhoops24.98.jpg"
import TinyStar from "./images/star26.47.jpg"
import Safety from "./images/safetypinearrings15.50.jpg"
import Charm from "./images/charmnecklace31.20.jpg"
import Beaded from "./images/silverbeadnecklace24.10.jpg"
import Starburst from "./images/starnecklace20.80.jpg"

function App() {
  //list of all products -- all images imported above
  const productList = [
    {name:"Sad Face Heart Ring", type:"rings", metal:"silver", price:"16.20", image: Sadring, count:0},
    {name:"Smiley Face Chain Ring", type:"rings", metal:"silver", price:"20.90", image: SmileyChain, count:0},
    {name:"Triple Smile Ring", type:"rings", metal:"gold", price:"16.80", image: TripleGoldSmiley, count:0},
    {name:"Silver with Smiley Ring", type:"rings", metal:"silver", price:"18.10", image: MixedSmile, count:0},
    {name:"Star Diamond Earrings", type:"earrings", metal:"gold", price:"32.00", image: StarDiamond, count:0},
    {name:"Gold Bamboo Hoops", type:"earrings", metal:"gold", price:"14.80", image: Bamboo, count:0},
    {name:"Green Crystal Mini Hoops", type:"earrings", metal:"gold", price:"24.98", image: Green, count:0},
    {name:"Tiny Silver Star Hoops ", type:"earrings", metal:"silver", price:"26.47", image: TinyStar, count:0},
    {name:"Safety Pin Earrings", type:"earrings", metal:"gold", price:"15.50", image: Safety, count:0},
    {name:"Initial Charm Necklace", type:"necklaces", metal:"gold", price:"31.20", image: Charm, count:0},
    {name:"Silver Beaded Necklace", type:"necklaces", metal:"silver", price:"24.10", image: Beaded, count:0},
    {name:"Starburst Necklace", type:"necklaces", metal:"gold", price:"20.80", image: Starburst, count:0},
  ]
  return (
    <div>
		  <FilteredList list={productList} />
	  </div>

  );
}
export default App;
