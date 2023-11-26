import React from 'react';

const ChamferinEntryList = (props) => {
  const { list } = props;
  console.log(list);
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
          {list.map((element) => (
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
    </div>
  );
};

export default ChamferinEntryList;
