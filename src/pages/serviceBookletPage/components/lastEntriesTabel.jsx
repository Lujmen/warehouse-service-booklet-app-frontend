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
              <td>{formattedData(element.checkedAt)}</td>
              <td>{element.shift}</td>
              <td>{element.status !== '' ? 'X' : element.status}</td>
              <td>{element.issues !== false ? element.issues : ''}</td>
              <td>{element.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LastEntriesTabel;
