import React, { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <React.Fragment>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </React.Fragment>
  );
}

export default Cabins;
