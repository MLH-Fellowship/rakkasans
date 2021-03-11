import React from 'react';
import PropTypes from 'prop-types';
import WordDocument from '../../components/WordDocument';
import lineageHonorsData from '../../assets/word_documents/lineage_honors';

export default function LineageHonorsScreen() {
  return <WordDocument page={lineageHonorsData} />;
}

LineageHonorsScreen.propTypes = {
  children: PropTypes.object,
};
