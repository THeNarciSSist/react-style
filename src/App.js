import { HashRouter, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import LogIn from "./components/LogIn/LogIn"
import SignUp from "./components/SignUp/SignUp"

function App() {
  return (
    <div>
      <AnimatePresence>
        <HashRouter>
          <Route path="/" exact component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </HashRouter>
      </AnimatePresence>
    </div>
  )
}

export default App
