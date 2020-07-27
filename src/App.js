import React from 'react';
import './styles/main.scss';
import useScript from './hooks/useScript';
import Header from './components/Header';
import ServiceContainer from './components/ServiceContainer';
import { description, title } from './data/input.json';
import { Link, Button } from 'carbon-components-react';
import IbmCloud24 from '@carbon/icons-react/lib/ibm-cloud/24';
import Launch16 from '@carbon/icons-react/lib/launch/16';
import { default as Api124 } from '@carbon/icons-react/lib/API--1/24';

const HEADER_LINKS = [
  <Link
    className="link getting-started"
    key="distance-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://cloud.ibm.com/apidocs/visual-recognition"
  >
    <Button className="link-button" kind="tertiary" renderIcon={Launch16}>
      Social Distance
    </Button>
    <Api124 className="link-icon" />
  </Link>,
  <Link
    className="link getting-started"
    key="events-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://cloud.ibm.com/registration?target=%2Fcatalog%2Fservices%2Fvisual-recognition%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409&_ga=2.158846578.918027017.1572271296-1405764752.1539884377&_gac=1.250083700.1571850605.Cj0KCQjw3JXtBRC8ARIsAEBHg4m4g1PSkKQRoI6YUe4A-6ysul0ziiWU0DVbqlbWAQpq3721u-bxkd0aAkV3EALw_wcB&cm_mc_uid=83381689395615475202389&cm_mc_sid_50200000=82214471572470185115&cm_mc_sid_52640000=21949701572470185117&cm_mmc=Earned-_-Watson%20Core%20-%20Platform-_-WW_WW-_-intercom&cm_mmca1=000000OF&cm_mmca2=10000409"
  >
    <Button className="link-button" kind="tertiary" renderIcon={Launch16}>
      Spread Estimation
    </Button>
    <IbmCloud24 className="link-icon" />
  </Link>,
  <Link
    className="link getting-started"
    key="events-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://cloud.ibm.com/registration?target=%2Fcatalog%2Fservices%2Fvisual-recognition%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409&_ga=2.158846578.918027017.1572271296-1405764752.1539884377&_gac=1.250083700.1571850605.Cj0KCQjw3JXtBRC8ARIsAEBHg4m4g1PSkKQRoI6YUe4A-6ysul0ziiWU0DVbqlbWAQpq3721u-bxkd0aAkV3EALw_wcB&cm_mc_uid=83381689395615475202389&cm_mc_sid_50200000=82214471572470185115&cm_mc_sid_52640000=21949701572470185117&cm_mmc=Earned-_-Watson%20Core%20-%20Platform-_-WW_WW-_-intercom&cm_mmca1=000000OF&cm_mmca2=10000409"
  >
    <Button className="link-button" kind="tertiary" renderIcon={Launch16}>
      Events Log
    </Button>
    <IbmCloud24 className="link-icon" />
  </Link>,
];

export const App = () => {
  useScript(
    'https://cdn.jsdelivr.net/gh/watson-developer-cloud/watson-developer-cloud.github.io@master/analytics.js',
  );

  return (
    <div className="app-container">
      <Header description={description} links={HEADER_LINKS} title={title} />
      <ServiceContainer />
    </div>
  );
};

export default App;
