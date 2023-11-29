import React from 'react';
import formattedData from '../../../utils/formattedData';

const LastEntriesTabel = (props) => {
  const { data } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Zmiana</th>
            <th>Status</th>
            <th>Problem</th>
            <th>Uzytkownik</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr>
              <td data-cell="data">{formattedData(element.checkedAt)}</td>
              <td data-cell="zmiana">{element.shift}</td>
              <td data-cell="status">{element.status !== '' ? 'X' : element.status}</td>
              <td data-cell="problem">{element.issues !== false ? element.issues : ''}</td>
              <td data-cell="uzytkownik">{element.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LastEntriesTabel;
