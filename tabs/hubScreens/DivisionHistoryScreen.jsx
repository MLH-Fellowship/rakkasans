import React from 'react';
import PropTypes from 'prop-types';
import WordDocument from '../../components/WordDocument';
import divisionHistoryData from '../../assets/word_documents/division_history';

export default function DivisionHistoryData() {
  return <WordDocument page={divisionHistoryData} />;
}

DivisionHistoryData.propTypes = {
  children: PropTypes.object,
};
