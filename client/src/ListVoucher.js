import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ListVoucher() {
  const [vouchers, setVoucher] = useState(null);
  const url = "http://localhost:3001/";
  let tableContent = null;
  let popupForm = null;

  useEffect(() => {
      axios.get(url).then((response) => {
          setVoucher(response.data);
      })
  }, [url]);

  function showForm(){
    console.log("Generate Voucher Pressed");
    popupForm = 
    <div className="form-popup">
      <h2>Generate Voucher</h2>
      <br></br>
      <button type="button" className="close_btn cancel" aria-label="Close" id="close-form" onClick={hideForm}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  }

  function hideForm(){
    popupForm = null;
  }

  if(vouchers){
    tableContent = vouchers.map(voucher => {
      return (
        <tr key={voucher.id}>
          <td><a href={'/voucher/' + voucher.id}>{voucher.name}</a></td>
          <td>{voucher.type}</td>
          <td>{voucher.amount}</td>
          <td>N/A</td>
          <td>{voucher.date_created.substring(0,10)}</td>
          <td>N/A</td>
          <td><button onClick={showForm}><i className="fa fa-share generate_button"></i></button></td>
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
              <br />
              <button type="button" className="btn btn-primary float_right" onClick = {event =>  window.location.href='/create'}>Create</button>
          </div>
      </div>
      <br />
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
      {popupForm}
    </div>
  );
}

export default ListVoucher;
