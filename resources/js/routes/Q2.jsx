import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Q2 = () => {

  return (
    <div>
      <header>
        <h2>あなたの性別にあてはまるもの１つを選択してください</h2>
      </header>

      <footer>
        <Link to={{ pathname: "/q3"}}>次へ進む</Link>
      </footer>
    </div>
  )
  
}
export default Q2;
