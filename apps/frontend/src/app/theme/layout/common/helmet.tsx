import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export interface Props {
  title: string;
  description?: string;
}

export const PageHelmet = ({ title, description }: Props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title} - Aneudys Amparo</title>
        <meta name="description" content={description} />
      </Helmet>
    </React.Fragment>
  );
};

export default PageHelmet;
