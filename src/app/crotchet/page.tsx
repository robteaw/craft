"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export default function Crotchet({ children }: Props) {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://life-leap.onrender.com/api/users/me")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        navigate("/signup");
        console.log(error);
      });
  }, []);
  return <>{children}</>;
}
