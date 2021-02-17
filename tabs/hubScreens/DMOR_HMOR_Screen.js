import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WordDocument from "../../components/WordDocument";

export default function DMOR_HMOR_Screen () {
  const [dmorHmor, setDmorHmor] = useState([]);
  useEffect(() => {
    const getDmorHmor = async () => {
      try {
        // TODO Change to localhost for non Mike development
        const response = await fetch("http://192.168.1.208:3000/dmorHmor")
        const json = response.json()
        const pageJSON = [
          { content: "187th Infantry Regiment HMoR and DMoR", type: "Title" },
          { content: json, type: "DmorHmorList" }
        ];

        setDmorHmor(pageJSON);
      } catch (error) {
        console.log(error);
      }
    };

    getDmorHmor();
  }, []);

  return <WordDocument page={dmorHmor} />;
}

DMOR_HMOR_Screen.propTypes = {
  children: PropTypes.object
};
