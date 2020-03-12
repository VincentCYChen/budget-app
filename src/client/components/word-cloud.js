import React from 'react';
import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';

function CloudCreator(props) {
  // create unique words array and add up values associated with the words
  let categories = {};
  props.transactions.forEach(trans => {
    if (categories.hasOwnProperty(trans.category)) {
      categories[trans.category] += trans.amount;
    } else {
      categories[trans.category] = trans.amount;
    }
  });
  let wordsArray = [];
  for (var key in categories) {
    wordsArray.push({ text: key, value: categories[key] });
  }
  // create words array containing {text: "text", value: "value"}

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <h1> How You Spend Your Money </h1>
      <ReactWordcloud words={wordsArray} />
    </div>
  );
}

export default CloudCreator;
