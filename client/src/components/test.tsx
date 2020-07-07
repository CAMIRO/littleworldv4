import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Loading } from './loading';

const TEST_QUERY = gql`
    query TestQuery {
        getDesserts {
            id
            name
            description
            ingredients
            price
        }
    }
`;
export const Test = () => {
    const { loading, error, data } = useQuery(TEST_QUERY);

    if (loading) return <Loading />;
    if (error) return <p>Error :(</p>;
    //console.log(data);

    return <div>{data.name}</div>;
    // return data.launches.map(
    //     (launch: { flight_number: string | number | undefined; mission_name: React.ReactNode }) => (
    //         <div key={launch.flight_number}>
    //             <p>{launch.mission_name}</p>
    //         </div>
    //     ),
    // );
};
