import React from 'react'
import { useQuery, gql } from '@apollo/client';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
        flight_number
        mission_name
        launch_date_local
    }
  }
`;
export const Test = () => {
        const { loading, error, data } = useQuery(LAUNCHES_QUERY);
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        console.log(data);
      
        return data.launches.map((launch) => (
          <div key={launch.flight_number}>
            <p>
              {launch.mission_name}
            </p>
          </div>
        ));
      
} 