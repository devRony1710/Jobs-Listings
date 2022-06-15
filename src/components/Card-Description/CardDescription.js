import React from "react";
import { JobsStatus } from "../Jobs-Status/JobsStatus";

//styles component
import { CardContent, CompanyContainer, Content, Logo, Position } from "./CardDescriptionStyles";

export const CardDescription = (
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
      <CardContent>
        <Logo alt="logo" src="https://res.cloudinary.com/ronyaab/image/upload/v1655299218/jobs-listings/photosnap_liguw8.svg"/>

        <Content>
          <CompanyContainer>
            <h3>{company}</h3>
            <JobsStatus newStatus={true} featured={true} />
          </CompanyContainer>

          <Position>
            {position}
          </Position>
        </Content>
      </CardContent>
    )
}