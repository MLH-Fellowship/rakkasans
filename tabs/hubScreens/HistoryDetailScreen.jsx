import React from 'react';
import WordDocument from '../../components/WordDocument';

export default function HistoryDetailScreen({ route }) {
  const { page } = route.params;

  return <WordDocument page={page} />;
}
