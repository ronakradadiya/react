import { useEffect, useState } from "react";
import { BASE_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${BASE_URL}/listRestaurantMenu/${resId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
