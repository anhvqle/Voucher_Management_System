import './App.css';

function ListVoucher() {
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
        <tr>
            <th>Tên Voucher Master</th>
            <th>Tên Phân Loại</th>
            <th>Số Lượng</th>
            <th>Phân Phối</th>
            <th>Ngày Tạo</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
      </table>
    </div>
  );
}

export default ListVoucher;
