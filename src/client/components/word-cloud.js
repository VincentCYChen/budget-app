import React from 'react';
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
  const options = {
    colors: ['#1f271b', '#19637d', '#2aafb0', '#f5d35c', '#ef9549', '#0b1c40'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [22, 85],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 3,
    rotations: 3,
    rotationAngles: [0, 0],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000
  };
  return (
    <div className="container">
      <ReactWordcloud options={options} words={wordsArray} />
    </div>
  );
}

export default CloudCreator;
