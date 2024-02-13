import "./App.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import CourseContainer from "./components/Course/CourseContainer";
import SingleCourse from "./pages/SingleCourse";
import StudentDashboard from "./pages/StudentDashboard";
import Error from "./components/Error";
import HideNavLayout from "./layout/HideNavLayout";
function App() {
  return (
    <>
      <Provider store={store}>
        <HideNavLayout>
          <Header />
        </HideNavLayout>
        <Outlet />
        <HideNavLayout>
          <Footer />
        </HideNavLayout>
      </Provider>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <CourseContainer />,
      },
      {
        path: "/course/:id",
        element: <SingleCourse />,
      },
      {
        path: "/dashboard",
        element: <StudentDashboard />,
      },
    ],
  },
]);

export default App;
