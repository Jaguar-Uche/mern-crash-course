import {Box} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import { useColorModeValue } from "@chakra-ui/react"

function App() {

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} ></Route>
          <Route path="/create" element={<CreatePage></CreatePage>} ></Route>
        </Routes>
      </Box>
    </>
  )
}

export default App
