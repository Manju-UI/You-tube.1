import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

function Content() {
  const [prod, setProd] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProd(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const devStyle = {
    // border: "2px solid red",
    // padding: "10px",
    // margin: ".5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
  };


  return (
    <div className="container">
      <div className="row">
        {prod.map((item) => (
          <div
            className="col-lg-4 col-md-4 col-sm-6 col-xs-12  "
            style={devStyle}
            key={item.id}
          >
            <ul >
              <li>
                <p>Item No. - {item.id}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
