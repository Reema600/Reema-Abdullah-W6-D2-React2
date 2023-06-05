// import Img from "../public/javaScript.png"
// import Stor from "./component/Stor"
import Companies from "./component/Companies"
import Programers from "./component/Programers"
import Img from "../public/user-image.png"
import './App.css'

function App() {
 

  return (
    <>
    
    <nav className="text-center navbar navbar-light bg-light ">
  <div className="container-fluid">
    <span className="p-4">
  Tuwaiq Academy
    </span>
  </div>
</nav>

<div className="card-comp">
<Companies CompanyName="Tuwaiq Academy" number="200" year="2019"></Companies>
</div>
<div className="card">
<div className="card-prog1">
    <Programers img={Img} Name="Abdullah" programming="JavaScript" experience="2 years" company="tuwaiq academy"></Programers>
    </div>
    <div className="card-prog2">
    <Programers img={Img} Name="Mansour" programming="Java" experience="4 years" company="tuwaiq academy"></Programers>
    </div>
    <div className="card-prog3">
    <Programers img={Img} Name="omar" programming="C++" experience="8 years" company="tuwaiq academy"></Programers>
    </div>
    </div>
<div>
    <footer className="bg-light text-center text-lg-start">

  <div className="text-center p-3" >
    © 2023 
    <a className="text-dark">  tuwaiq.edu.sa</a>
  </div>
  
</footer>
</div>
    </>
  )
}

export default App
