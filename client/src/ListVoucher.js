import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ListVoucher() {
  const [vouchers, setVoucher] = useState(null);
  const url = "http://localhost:3001/";
  let tableContent = null;

  useEffect(() => {
      axios.get(url).then((response) => {
          setVoucher(response.data);
      })
  }, [url]);

  if(vouchers){
    tableContent = vouchers.map(voucher => {
      return (
        <tr key={voucher.id}>
          <td>{voucher.name}</td>
          <td>{voucher.type}</td>
          <td>{voucher.amount}</td>
          <td>N/A</td>
          <td>{voucher.date_created.substring(0,10)}</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
      )
    })
  }

  return (
    <div className="jumbotron">
        <div className="row">
            <div className="col-md-6">
                <h3>MASTER VOUCHER</h3>
                <p>Master Voucher</p>
            </div>
                <div className="col-md-6">
                <br></br>
                <button type="button" className="btn btn-primary float_right" onClick = {event =>  window.location.href='/create'}>Create</button>
            </div>
        </div>
      <br></br>
      <table>
        <tbody>
          <tr>
              <th>Tên Voucher Master</th>
              <th>Tên Phân Loại</th>
              <th>Số Lượng</th>
              <th>Phân Phối</th>
              <th>Ngày Tạo</th>
              <th>Status</th>
              <th>Action</th>
          </tr>
          {tableContent}
        </tbody>
      </table>
    </div>
  );
}

export default ListVoucher;
