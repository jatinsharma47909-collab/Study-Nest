import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import AdminLayout from "../components/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute";

import Login from "./Login";
import Register from "./Register";

import Home from "./Home";
import Courses from "./Courses";
import CourseDetails from "./CourseDetails";
import TopicDetails from "./TopicDetails";
import Categories from "./Categories";
import About from "./About";
import MyLearning from "./MyLearning";
import MCQ from "./MCQ";
import Profile from "./Profile";

import AdminDashboard from "./AdminDashboard";
import AdminUsers from "./AdminUsers";
import AdminMaterial from "./AdminMaterial";
import AdminMCQ from "./AdminMCQ";
import AdminScore from "./AdminScore";

const router = createBrowserRouter([
  // =========================
  // LOGIN
  // =========================
  {
    path: "/login",
    element: <Login />,
  },

  // =========================
  // REGISTER
  // =========================
  {
    path: "/register",
    element: <Register />,
  },

  // =========================
  // USER SIDE
  // =========================
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "courses",
        element: <Courses />,
      },

      {
        path: "courses/:id",
        element: <CourseDetails />,
      },

      {
        path: "courses/:id/topic/:topicIndex",
        element: <TopicDetails />,
      },

      {
        path: "categories",
        element: <Categories />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "my-learning",
        element: <MyLearning />,
      },

      {
        path: "profile",
        element: <Profile />,
      },

      {
        path: "mcq/:topicName",
        element: <MCQ />,
      },
    ],
  },

  // =========================
  // ADMIN SIDE
  // =========================
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      // Admin Dashboard
      {
        path: "dashboard",
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },

      // Manage Users
      {
        path: "users",
        element: (
          <ProtectedRoute role="admin">
            <AdminUsers />
          </ProtectedRoute>
        ),
      },

      // Add Material
      {
        path: "material",
        element: (
          <ProtectedRoute role="admin">
            <AdminMaterial />
          </ProtectedRoute>
        ),
      },

      // Manage MCQ Questions
      {
        path: "mcq",
        element: (
          <ProtectedRoute role="admin">
            <AdminMCQ />
          </ProtectedRoute>
        ),
      },

      // Manage Scores
      {
        path: "scores",
        element: (
          <ProtectedRoute role="admin">
            <AdminScore />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
