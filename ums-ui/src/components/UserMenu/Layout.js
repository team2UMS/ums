import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <nav>
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
      </nav>
    </>
  )
};

export default Layout;