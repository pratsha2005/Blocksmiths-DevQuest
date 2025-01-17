import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>} >
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Route>
))
function App() {
  
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
