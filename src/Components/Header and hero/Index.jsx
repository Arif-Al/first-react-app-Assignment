import "./style.css"
import { Icon } from '@iconify/react';

const Header = () => {
  return (
<>
<div className="her-img">
<div className="container d-flex justify-content-between align-items-center text-white">
<h1>MNTN</h1>
    <ul className="d-flex  list-unstyled">
      <li>Equipment</li>
      <li className="mx-3">About us</li>
      <li>Blog</li>
    </ul>
    <p className="fw-bold fs-5"> <Icon icon="ic:baseline-account-circle" width="30px" className="me-2 " />
    Account</p>
</div>
<div className="d-flex justify-content-center align-items-center pt-5 ">
   <h1 className='text-white display-3 text-of-hero hero-text'>Be prepared for the <br /> Mountains and beyond!</h1>
   </div>

</div>

</>
  )
};

export default Header