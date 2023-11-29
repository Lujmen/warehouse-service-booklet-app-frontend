import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import getAllForUserFromCurrentShift from '../../../service/getAllForUserFromCurrentShift';
import formattedDate from '../../../utils/formattedData';
import PaginationBar from '../../../components/paginationBar/paginationBar';

const CharmferingList = () => {
  const [page, setPage] = useState({ page: 1 });

  const {
    data: chamferingList,
    isLoading,
    error,
  } = useQuery({ queryKey: ['charmferingList', page], queryFn: () => getAllForUserFromCurrentShift(page.page), retry: false, gcTime: 0, retry: 0 });

  if (isLoading) {
    return <h1>Loading</h1>;
  } else if (error && error.message) {
    return <h1>{error.message}</h1>;
  } else if (chamferingList) {
    return (
      <div>
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
            {chamferingList.result.map((element, index) => (
              <tr key={index}>
                <td>{formattedDate(element.adaDate)}</td>
                <td>{element.shift}</td>
                <td>{element.differenceFromPingink}</td>
                <td>{element.diffrentFromQC}</td>
                <td>{element.timeOfChamfering}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationBar setPage={setPage} page={page.page} totalPages={chamferingList.totalPages} />
      </div>
    );
  }
  return null;
};

export default CharmferingList;
