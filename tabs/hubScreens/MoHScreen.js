import React from "react";
import PropTypes from "prop-types";
import WordDocumentCards from "../../components/WordDocumentCards";
import MoHData from "../../assets/word_documents/MoH";

export default function MoHDocument() {
  return <WordDocumentCards page={MoHData} />;
}

MoHDocument.propTypes = {
  children: PropTypes.object,
};
