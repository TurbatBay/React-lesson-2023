import React from "react";
import logo from "../scenes/logo512.png";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import { useGlobalContext } from "../context";
import { Link, Routes, Route } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <Link to={`/${text}`} key={id}>
              <a>
                {icon}
                {text}
              </a>
            </Link>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
