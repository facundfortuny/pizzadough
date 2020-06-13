import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const getSiteMetadata = graphql`
  query {
    metaData: site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

const Seo = () => {
  const { metaData } = useStaticQuery(getSiteMetadata);
  const { title, description, keywords } = metaData.siteMetadata;

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default Seo;
