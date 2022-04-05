import { useEffect, useState } from "react";

const Hook = () => {
  const [loadDatas, setloadDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setloadDatas(data));
  }, []);
  return[loadDatas, setloadDatas]
};
export default Hook;