import React from 'react';
import formattedDate from '../../../../utils/formattedData';
import PaginationBar from '../../../../components/paginationBar/paginationBar';

const ChamferinEntryList = (props) => {
  const { list, changePage, page } = props;

  console.log(list.results);
  return (
    <div className="chamfering-tabel">
      <table className="">
        <thead>
          <tr>
            <th>Data</th>
            <th>Zamiana</th>
            <th>Ilość mm różnicy długości do wyrownania 1 strona (od strony piankowania)</th>
            <th>Ilość mm różnicy długości do wyrownania 2 strona (od strony qc)</th>
            <th>czas fazowania rur</th>
          </tr>
        </thead>
        <tbody>
          {list.results.map((element, index) => (
            <tr key={index}>
              <th>{formattedDate(element.adaDate)}</th>
              <td>{element.shift}</td>
              <td>{element.differenceFromPingink}</td>
              <td>{element.diffrentFromQC}</td>
              <td>{element.timeOfChamfering}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationBar setPage={changePage} page={page} totalPages={list.totalPages} />
    </div>
  );
};

export default ChamferinEntryList;
