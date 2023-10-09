import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import useScreenSize from "./hooks/useScreenSize";

function App() {
  const [itemListData, setItemListData] = useState([]);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isLoading, setLoading] = useState(false)

  const screenSize = useScreenSize();

  // const handleResize = () => {
  //   if (window.innerWidth < 720) {
  //     console.log("true", window.innerWidth);
  //     setIsMobileScreen(true);
  //   } else {
  //     console.log("false", window.innerWidth);
  //     setIsMobileScreen(false);
  //   }
  // };

  useEffect(() => {
    setLoading(true)
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        // console.log(res.data);
        setItemListData(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  // },[window]);

  // useEffect(() => {
  //   console.log(screenSize);
  // }, [screenSize]);

  return (
    <div>
      {isLoading && "Loading..."}
      {screenSize.width === 390 && screenSize.height === 844 ? (
        <div>
          <h5>Name-port</h5>
          <ul>
            {itemListData &&
              itemListData.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <li>{item.name}</li>
                  </Fragment>
                );
              })}
          </ul>
        </div>
      ) : (
        <div>
          <h5>Website-land)</h5>
          <ul>
            {itemListData &&
              itemListData.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <li>{item.website}</li>
                  </Fragment>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
