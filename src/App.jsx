
import './App.css'
import Chart from './Components/LineChart/Chart'
import DaisyNav from './Components/Nav/DaisyNav'
import Nav from './Components/Nav/Nav'
import Phone from './Components/Phone/Phone'
import PriceOption from './Components/PriceOption/PriceOption'

function App() {


  return (
    <>
    <Nav></Nav>
{/* <DaisyNav></DaisyNav> */}
<PriceOption></PriceOption>
<Chart></Chart>
<Phone></Phone>
    </>
  )
}

export default App
