import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getAllForUserFromCurrentShift from '../../../service/getAllForUserFromCurrentShift';

const CharmferingList = () => {
  const {
    data: chamferingList,
    isLoading,
    error,
  } = useQuery({ queryKey: ['charmferingList'], queryFn: () => getAllForUserFromCurrentShift(), retry: false, gcTime: 0, retry: 0 });

  if (isLoading) {
    return <h1>Loading</h1>;
  } else if (error && error.message) {
    return <h1>{error.message}</h1>;
  } else if (chamferingList) {
    return (
      <table>
        <thead>
          <tr>
            <th>Data</th> <th>Zamiana</th>
            <th>Ilość mm różnicy długości do wyrownania 1 strona (od strony piankowania)</th>
            <th>Ilość mm różnicy długości do wyrownania 2 strona (od strony qc)</th>
            <th>czas fazowania rur</th>
          </tr>
        </thead>
        <tbody>
          {chamferingList.map((element) => (
            <tr>
              <th>{element.addDate}</th>
              <td>{element.shift}</td>
              <td>{element.differenceFromPingink}</td>
              <td>{element.diffrentFromQC}</td>
              <td>{element.timeOfChamfering}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return null;
};

export default CharmferingList;
