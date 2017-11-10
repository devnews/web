import React from 'react';
import loadScript from 'load-script';

class Sponsor extends React.Component {

  componentDidMount() {
    if (!window.codesponsorLoaded) {
      loadScript('https://app.codesponsor.io/scripts/IQnppckqRltebNM5FH2qZg?theme=light&image=hide&width=400&height=115', (error) => {
        if (!error) window.codesponsorLoaded = true;
      });
    }
  }

  render() {
    return (
      <div style={{
        paddingLeft: 10,
        paddingBottom: 30,
      }}>
        <div id="code-sponsor-widget"></div>
      </div>
    )
  }

};

export default Sponsor;
