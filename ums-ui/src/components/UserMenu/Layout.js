import { Outlet, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
const Layout = () => {
  return (
    <>
      <Outlet />
      {/* <nav>
        <ul>
        <li>
            <Link to="/balance">Balance</Link>
          </li>
          <li>
            <Link to="/loan">Loan</Link>
          </li>
          <li>
            <Link to="/statement">Statement</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
        </ul>
      </nav> */}
  
      <div className='row justify-content-center'> </div>
      <div className='row ms-5 mr-3"'>
      <Card style={{ width: '18rem', height:'18rem', marginRight:'50px' }}>
      <Card.Img variant="top" style={{ width: '14rem', height:'14rem'}} src="https://cdn.iconscout.com/icon/free/png-256/money-account-2195658-1912576.png" />
      <Card.Body>
      <div class="col-md-12 text-center">
           
        <Button variant="primary"><Link to="/balance"><div className='text-white'>Balance</div></Link></Button>
        </div>
      </Card.Body>
    </Card>
    
    {/* <div className='mr -1'> */}
    <Card style={{ width: '18rem', height:'18rem'  }}>
      <Card.Img variant="top" style={{ width: '14rem', height:'14rem'  }} src="https://i.imgur.com/WJXMw5s.png" />
      <Card.Body>
      <div class="col-md-12 text-center">          
        <Button variant="primary"><Link to="/loan"><div className='text-white'>Loan</div></Link></Button>
        </div>
      </Card.Body>
    </Card>
    {/* </div> */}
    <p></p>
    <Card style={{ width: '18rem', height:'18rem', marginRight:'50px' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/bill-icon-vector-logo-design-template-bill-icon-vector-logo-design-template-flat-style-illustration-220724353.jpg" />
      <Card.Body>
      <div class="col-md-12 text-center">
           
        <Button variant="primary"><Link to="/statement"><div className='text-white'> Account Statement</div></Link></Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', height:'20rem'  }}>
      <Card.Img variant="top" style={{ width: '14rem', height:'14rem'  }} src="https://static.vecteezy.com/system/resources/previews/002/206/124/non_2x/money-transaction-icon-free-vector.jpg" />
      <Card.Body>
      <div class="col-md-12 text-center">
           
        <Button variant="primary"><Link to="/transactions"><div className='text-white'>Transaction</div></Link></Button>
        </div>
      </Card.Body>
    </Card>
    </div>
     
    </>
  )
};

export default Layout;