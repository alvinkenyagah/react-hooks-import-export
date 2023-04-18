import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife,elevation} from "./parks/RockyMountain.js";



export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  
  return (
  <>
  <h1>Colorado State Parks!</h1>
  {MesaVerde()}
  {trees}
  {wildlife()}
  {elevation()}

  </>
  
  )
  
}

