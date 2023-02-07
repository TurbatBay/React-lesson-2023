import React from "react";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
export default function UserInfo() {
  const userName = useContext(UserContext);
  return <span>{userName}</span>;
}
