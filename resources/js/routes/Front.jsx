import React from 'react';
import '../../sass/App.scss';
import { Link } from "react-router-dom";

const Front = () => {
  return (

    <main className="">
      <div className="container">
        <h1>善光寺アンケート</h1>
        <nav>
          <Link to="/q1">スタート</Link>
          <p className="explain">回答を始める</p>
        </nav>
      </div>
    </main>

  );
};

export default Front;
