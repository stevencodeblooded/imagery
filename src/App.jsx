import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomeScreen from "./container/HomeScreen"
import Layout from "./shared/Layout"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
      </Route>
    )
  )
  return (
    <RouterProvider 
      router={router}
    />
  )
}

export default App