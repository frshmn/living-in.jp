import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Q1 = () => {
  return (
    <div>
      <header>
        <h2>あなたの性別にあてはまるもの１つを選択してください</h2>
      </header>
      <main className="radioSquare">

      </main>

      <footer>
        <Link to={{ pathname: "/q2", state: "test" }}>次へ進む</Link>
      </footer>
    </div>
  )
}
export default Q1;
