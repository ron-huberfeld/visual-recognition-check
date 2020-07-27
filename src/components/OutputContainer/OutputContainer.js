import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  Tile,
  FormGroup,
  ContentSwitcher,
  Switch,
} from 'carbon-components-react';
import ProgressBar from '../ProgressBar';
import ReactJson from 'react-json-view';

export const OutputContainer = ({ results: resultsData }) => {
  const [outputType, setOutputType] = useState('table');

  const onOutputTypeChange = (e) => {
    setOutputType(e.name);
  };

  return (
    <Tile className="output-container">
      <h3 className="output-container__title">Output</h3>
      <div className="output-container__control-panel">
        <ContentSwitcher
          className="output-container__content-switch"
          onChange={onOutputTypeChange}
          selectedIndex={outputType === 'table' ? 0 : 1}
        >
          <Switch name="table" text="Table" />
          <Switch name="json" text="JSON" />
        </ContentSwitcher>
      </div>
      <FormGroup legendText="Result">
        {outputType === 'table' ? (
          <Accordion>
            <div className="output-container__accordian-header">
              <p>Object</p>
              <p>Score</p>
            </div>
            {resultsData.map((item, index) => (
              <div
                key={index}
                className="output-container__accordian-item"
              >
                <p>{item.object}</p>
                <ProgressBar progress={item.score} />
              </div>
            ))}
          </Accordion>
        ) : (
          <ReactJson
            name={false}
            enableClipboard={false}
            displayDataTypes={false}
            displayObjectSize={false}
            collapsed={2}
            collapseStringsAfterLength={20}
            theme="monokai"
            style={{ lineHeight: '1.3em' }}
            src={resultsData}
          />
        )}
      </FormGroup>
    </Tile>
  );
};

OutputContainer.propTypes = {
  results: PropTypes.array.isRequired,
};

OutputContainer.defaultProps = {
  results: null,
};

export default OutputContainer;
