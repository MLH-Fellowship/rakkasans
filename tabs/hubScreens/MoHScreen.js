import React from "react";
import PropTypes from "prop-types";
import WordDocument from "../../components/WordDocument";
import MoHData from "../../assets/word_documents/MoH";

export default function MoHDocument() {
  return <WordDocument page={MoHData} />;
}

MoHDocument.propTypes = {
  children: PropTypes.object,
};
