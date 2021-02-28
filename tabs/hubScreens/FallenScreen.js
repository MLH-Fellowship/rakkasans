import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WordDocument from "../../components/WordDocument";

export default function MoHDocument() {
  const [fallen, setFallen] = useState([]);
  useEffect(() => {
    const getFallen = async () => {
      try {
        const response = await fetch(`http://192.168.1.208:3000/fallen`);
        const json = await response.json();

        const pageJSON = [
          { content: json, type: "FallenList" },
        ];

        setFallen(pageJSON);
      } catch (error) {
        console.log(error);
      }
    };

    getFallen();
  }, []);

  return <WordDocument page={fallen} />;
}

MoHDocument.propTypes = {
  children: PropTypes.object,
};
