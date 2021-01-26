import './App.css';

function GenerateVoucher(props) {
    console.log(props);
    return (
        <div className="jumbotron">
            <h2>DELIVER VOUCHER</h2>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <select id="voucher_type">
                        <option value="" disabled selected hidden>Tên đại lý</option>
                        <option value="type1">1</option>
                        <option value="type1">2</option>
                        <option value="type1">3</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <input className="full_width" placeholder="Số lượng phân phối"></input>
                    <br />
                </div>
            </div>
            <br />
            <button type="button" className="btn btn-primary float_right" >Deliver</button>
            <button type="button" className="btn btn-outline-secondary float_right mr-2" onClick = {event =>  window.location.href=`/voucher/${props.location.pathname.substring(10,13)}`} >Cancel</button>
        </div>
    );
}

export default GenerateVoucher;
