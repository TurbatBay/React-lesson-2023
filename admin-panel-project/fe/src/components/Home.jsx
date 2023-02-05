import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import Breadcrumb from "./BreadCrumbs";
import UsersTable from "./UsersTable";
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <Breadcrumb />
      <UsersTable />
      {/* <button className="btn" onClick={openModal}>
        show modal
      </button> */}
    </main>
  );
};

export default Home;
