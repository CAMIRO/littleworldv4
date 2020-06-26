import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Loading } from './loading'


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

    if (loading) return <Loading/>;
    if (error) return <p>Error :(</p>;
    console.log(data);

    return data.launches.map(
        (launch: { flight_number: string | number | undefined; mission_name: React.ReactNode }) => (
            <div key={launch.flight_number}>
                <p>{launch.mission_name}</p>
            </div>
        ),
    );
};
