import Navbar from "./components/Navbar"
import Leftside from "./components/leftside"
import Mainside from "./components/mainside"
import Rightside from "./components/rightside"

const App =()=>{
  return(
   <div>
      <Navbar />

    
      <div className="flex w-full min-h-screen">
        <Leftside />
        <Mainside />
        <Rightside />
      </div>
    </div>
  )
}

export default App