import { Box } from "@mui/system";
import { Button, ButtonGroup, Container } from "@mui/material";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Book from "../Book/Book";

// C'est ici que nous allons faire notre map pour afficher plusieurs livres.

function Books() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/v1/book").then((res) => setData(res.data));
  }, []);

  return (
    <>
      {/*console.log(data.user)*/}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {/*data.map((livre, index) => (
          <Book key={index} livre={livre} />
        ))*/}
        {data.map((livre) =>
          livre.user.map((user, index) => (
            <Book key={`je-suis-unique-${index}`} livre={livre} user={user} />
          ))
        )}
      </Box>
    </>
  );
}

export default Books;
