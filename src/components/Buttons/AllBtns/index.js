import React from "react";
import Deal from "../DealBtn"
import Hit from "../HitBtn"
import Stay from "../StayBtn"


function AllBtns(props) {
    return (
       <section>
        <Deal />
        <Hit />
        <Stay />
      </section>
    );
  }
  
  export default AllBtns;