import { Route, Routes } from "react-router-dom";
import DashBoardLayout from "./pages/Layout";
import { DashBoardLinks } from "./constants";
import NewTestimonial from "./pages/testimonials/NewTestimonial";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoardLayout />}>
          {DashBoardLinks.map((item) => {
            return (
              <Route path={item.path} element={item.childComponente}>
                {/* <Route path="new" element={<NewTestimonial />} />
                <Route path="update" element={<NewTestimonial />} /> */}
              </Route>
            );
          })}
              <Route path="testimonials/add" element={<NewTestimonial />} />
              <Route path="testimonials/update/:id" element={<NewTestimonial />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
