import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  useEffect(() => {
    if (location.state === null) navigate("/");
  }, []);

  return location.state ? <span>{location.state.title}</span> : null;
};

export default Detail;
