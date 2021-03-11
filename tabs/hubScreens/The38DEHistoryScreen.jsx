import React from 'react';
import PropTypes from 'prop-types';
import WordDocument from '../../components/WordDocument';
import historyData from '../../assets/word_documents/38de_history';

export default function The38DEHistoryScreen() {
  return <WordDocument page={historyData} />;
}

The38DEHistoryScreen.propTypes = {
  children: PropTypes.object,
};
