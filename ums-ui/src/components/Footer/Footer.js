const Footer=()=>
{
  // return (<footer class="bg-light text-center text-lg-start"><div className='footer'>
  //   <div >Global Bank<sup>TM</sup></div>
  //   <div><a class="text-dark" href="https://mdbootstrap.com/">{Date().toLocaleString()}</a></div></div></footer>
  // );

// return(
// <footer class="bg-light text-center text-lg-start">
// <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
//   © 2020 Copyright:
//   <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
// </div>
// </footer>)


  return (<div className='footer'>
    <div>Global Bank<sup>TM</sup></div>
    <div>{Date().toLocaleString()}</div>
  </div>);
}
export default Footer;
