import React from "react";
import { CardDescription } from "../Card-Description/CardDescription";

//styles components
import { CardContainer } from "./JobsCard-Styles";

export const JobsCard = (
  {
    logo,
    company,
    newStatus,
    featured,
    position,
    postedAt,
    contract,
    location
  }
) => {
  return (
    <>
      <CardContainer>
        <CardDescription company={company} position={position}/>
      </CardContainer>
    </>
  )
}