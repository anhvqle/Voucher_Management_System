import './App.css';

function GenerateVoucher(props) {
    return (
        <div className="jumbotron">
            <h1>Hello World</h1>
            <button type="button" className="btn btn-outline-secondary float_right mr-2" onClick = {event =>  window.location.href="/voucher/11"} >Back</button>
        </div>
    );
}

export default GenerateVoucher;
