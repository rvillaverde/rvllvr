import NextHead from 'next/head';
import React from 'react';

const NAME = 'Romi Villaverde';
const SITE_TITLE = 'Romi Villaverde';
const DESCRIPTION = 'Web developer with an eye on design.';

const Head: React.FunctionComponent = () => {
  return (
    <NextHead>
      <title>{SITE_TITLE}</title>
      <meta name={NAME} content={DESCRIPTION} />
      <meta name="og:title" content={SITE_TITLE} />
      <meta name="og:description" content={DESCRIPTION} />
      <meta property="og:url" content="https://www.romivillaverde.com" />
      <meta property="og:image" content="/img/icon.png" />
    </NextHead>
  );
};

export default Head;
