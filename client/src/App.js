import './App.css';
import ListVoucher from './ListVoucher';
import CreateVoucher from './CreateVoucher';
import VoucherDetail from './VoucherDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ListVoucher}/>
        <Route path="/list" component={ListVoucher}/>
        <Route path="/create" component={CreateVoucher}/>
        <Route path="/voucher/:id" component={VoucherDetail}/>
      </Switch>
    </Router>
  );
}

export default App;