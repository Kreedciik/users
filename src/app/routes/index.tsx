import AddUser from "@/views/add-user";
import EditCard from "@/views/edit-card";
import MainList from "@/views/main-list";
import ViewCard from "@/views/view-card";
import { Route, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainList />} />
      <Route path="/edit/:id" element={<EditCard />} />
      <Route path="/view/:id" element={<ViewCard />} />
      <Route path="/add" element={<AddUser />} />
    </Routes>
  );
};
