import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "./utils";

function App() {
  const [info, setInfo] = useState([]);
  const getDat = async () => {
    try {
      const dataRes = await await axios.get(
        "https://api.publicapis.org/entries"
      );
      const restData = dataRes?.data?.entries ?? [];
      if (restData.length > 0) {
        setInfo(restData);
        console.log(dataRes);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDat();
  }, []);
  return (
    <>
      <div className="container data-container">
        <div class="jumbotron p-3 mb-2 bg-primary text-white">
          <h1>App test KeoLID</h1>
        </div>
        {!isEmpty(info[0]) &&
          info?.map((data, index) => (
            <div key={index}>
              <div class="card data-card">
                <h5 class="card-header">{data.Category}</h5>
                <div class="card-body">
                  <p class="card-text">{data.Description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
