import React from 'react';

import { FeaturedLabel, NewLabel, StatusContainer } from "./JobsStatusStyles"

export const JobsStatus = ( { newStatus, featured } ) => (
  <div>
    {
      newStatus && featured && (
        <StatusContainer> 
          <NewLabel>
            NEW!
          </NewLabel>
          <FeaturedLabel>
            FEATURED
          </FeaturedLabel>
        </StatusContainer>
      )
    }
    {
      newStatus && !featured && (
        <NewLabel>
            NEW!
        </NewLabel>
      )
    }
    </div>
  );
