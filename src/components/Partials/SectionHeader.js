import React from 'react';

import { Link } from 'react-router-dom';

const SectionHeader = props => {
  return (
    <section className="content-header">
      <h1>{props.title}</h1>
      <ol className="breadcrumb">
        <li>
          <Link to="/">
            <i className="fa fa-dashboard" /> Home
          </Link>
        </li>
        <li>
          <a href="#">{props.first}</a>
        </li>
        <li className="active">{props.last}</li>
      </ol>
    </section>
  );
};

export default SectionHeader;
