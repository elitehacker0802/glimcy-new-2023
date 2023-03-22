import React, { useEffect } from 'react';

function Scripts() {
  useEffect(() => {
	const jqueryScript = document.createElement('script');
	jqueryScript.src = 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6189b6da0e23c6551df73ab9';
	jqueryScript.type = 'text/javascript';
	jqueryScript.integrity = 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=';
	jqueryScript.crossOrigin = 'anonymous';
	document.body.appendChild(jqueryScript);

	const webflowScript = document.createElement('script');
	webflowScript.src = 'https://assets.website-files.com/6189b6da0e23c6551df73ab9/js/webflow.bfcfd349a.js';
	webflowScript.type = 'text/javascript';
	document.body.appendChild(webflowScript);

	return () => {
	  document.body.removeChild(jqueryScript);
	  document.body.removeChild(webflowScript);
	};
  }, []);

  return null;
}

export default Scripts;
