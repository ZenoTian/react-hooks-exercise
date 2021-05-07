import React, { useState, useEffect, useRef, forwardRef } from 'react'
import logo from './logo.svg'
import './App.css'
import PageD from './pageD'
import { Router, Link } from '@reach/router';
import Case1 from './case/case1'
import Case2 from './case/case2'
import Case3 from './case/case3'
import Case4 from './case/case4'
import Case5 from './case/case5'
import Case6 from './case/case6'
import Case7 from './case/case7'
import Case8 from './case/case8'
import Case9 from './case/case9'
import Case10 from './case/case10'
import Case11 from './case/case11'
import Case12 from './case/case12'
import Case13 from './case/case13'
import Case14 from './case/case14'
import Case15 from './case/case15'
import Case16 from './case/case16'
import Case17 from './case/case17'
import Case18 from './case/case18'
import Case19 from './case/case19'
import Case20 from './case/case20'
import Case21 from './case/case21'
import Case22 from './case/case22'
import Case23 from './case/case23'

function App() {
  return (
    <div style={{display: 'flex'}}>
      <ul style={{width: '200px'}}>
        <li><Link to="/case1">case1</Link></li>
        <li><Link to="/case2">case2</Link></li>
        <li><Link to="/case3">case3</Link></li>
        <li><Link to="/case4">case4</Link></li>
        <li><Link to="/case5">case5</Link></li>
        <li><Link to="/case6">case6</Link></li>
        <li><Link to="/case7">case7</Link></li>
        <li><Link to="/case8">case8</Link></li>
        <li><Link to="/case9">case9</Link></li>
        <li><Link to="/case10">case10</Link></li>
        <li><Link to="/case11">case11</Link></li>
        <li><Link to="/case12">case12</Link></li>
        <li><Link to="/case13">case13</Link></li>
        <li><Link to="/case14">case14</Link></li>
        <li><Link to="/case15">case15</Link></li>
        <li><Link to="/case16">case16</Link></li>
        <li><Link to="/case17">case17</Link></li>
        <li><Link to="/case18">case18</Link></li>
        <li><Link to="/case19">case19</Link></li>
        <li><Link to="/case20">case20</Link></li>
        <li><Link to="/case21">case21</Link></li>
        <li><Link to="/case22">case22</Link></li>
        <li><Link to="/case23">case23</Link></li>
      </ul>
      <div>
        <Router primary={false}>
          <Case1 path="/case1"></Case1>
          <Case2 path="/case2"></Case2>
          <Case3 path="/case3"></Case3>
          <Case4 path="/case4"></Case4>
          <Case5 path="/case5"></Case5>
          <Case6 path="/case6"></Case6>
          <Case7 path="/case7"></Case7>
          <Case8 path="/case8"></Case8>
          <Case9 path="/case9"></Case9>
          <Case10 path="/case10"></Case10>
          <Case11 path="/case11"></Case11>
          <Case12 path="/case12"></Case12>
          <Case13 path="/case13"></Case13>
          <Case14 path="/case14"></Case14>
          <Case15 path="/case15"></Case15>
          <Case16 path="/case16"></Case16>
          <Case17 path="/case17"></Case17>
          <Case18 path="/case18"></Case18>
          <Case19 path="/case19"></Case19>
          <Case20 path="/case20"></Case20>
          <Case21 path="/case21"></Case21>
          <Case22 path="/case22"></Case22>
          <Case23 path="/case23"></Case23>
        </Router>
      </div>
    </div>
  )
}
export default App
