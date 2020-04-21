import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { scoreBoardService } from './services';
import { Card, Row, Column, NavBar, Button, Form } from './widgets';
import { createHashHistory } from 'history';

const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class Menu extends Component {
  render() {
    return (
      <NavBar>
        <NavBar.Link to="/">
        <li className="logo">
        <a href="index.html" className="nav-link">
          <span className="link-text logo-text">Gruppe 5</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>
        </NavBar.Link>
        <NavBar.Link to="/howToPlay">
        <li className="nav-item">
        <a className="nav-link">
          <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="newspaper"
          className="svg-inline--fa fa-newspaper fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512">
          <g className="fa-group">
            <path fill="currentColor"
              d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12z m208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12z m208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12z m0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"
              className="fa-secondary">
            </path>
            <path fill="currentColor"
              d=""
              className="fa-primary"
            >
            </path>
          </g>
        </svg>
          <span className="link-text">How to play</span>
        </a>
      </li>
        </NavBar.Link>
        <NavBar.Link to="/scoreBoard">
        <li className="nav-item">
        <a href="scoreBoard.html" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="alien-monster"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g className="fa-group">
              <path
                fill="currentColor"
                d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M160,320h64V224H160Zm192-96v96h64V224Z"
                className="fa-primary"
              ></path>
              </g>
          </svg>
          <span className="link-text">Score board</span>
        </a>
      </li>
        </NavBar.Link>
        <NavBar.Link to="/resources">
        <li className="nav-item">
        <a href="game.html" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="meteor"
            className="svg-inline--fa fa-meteor fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M511.328,20.8027c-11.60759,38.70264-34.30724,111.70173-61.30311,187.70077,6.99893,2.09372,13.4042,4,18.60653,5.59368a16.06158,16.06158,0,0,1,9.49854,22.906c-22.106,42.29635-82.69047,152.795-142.47819,214.40356-.99984,1.09373-1.99969,2.5-2.99954,3.49995A194.83046,194.83046,0,1,1,57.085,179.41009c.99985-1,2.40588-2,3.49947-3,61.59994-59.90549,171.97367-120.40473,214.37343-142.4982a16.058,16.058,0,0,1,22.90274,9.49988c1.59351,5.09368,3.49947,11.5936,5.5929,18.59351C379.34818,35.00565,452.43074,12.30281,491.12794.70921A16.18325,16.18325,0,0,1,511.328,20.8027Z"
                  className="fa-secondary">
                </path>
                <path fill="currentColor"
                  d="M319.951,320.00207A127.98041,127.98041,0,1,0,191.97061,448.00046,127.97573,127.97573,0,0,0,319.951,320.00207Zm-127.98041-31.9996a31.9951,31.9951,0,1,1-31.9951-31.9996A31.959,31.959,0,0,1,191.97061,288.00247Zm31.9951,79.999a15.99755,15.99755,0,1,1-15.99755-15.9998A16.04975,16.04975,0,0,1,223.96571,368.00147Z"
                  className="fa-primary"
                ></path>
              </g>
          </svg>
          <span className="link-text">Resources</span>
        </a>
      </li>
        </NavBar.Link>
        <NavBar.Link to="/game">
        <li className="nav-item">
        <a href="resources.html" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="space-shuttle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Play!</span>
        </a>
      </li>
        </NavBar.Link>
      </NavBar>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="divleft">
      <Card title="This is the Space Shooter project">Enjoy the game!</Card>
      </div>
    );
  }
}

class Game extends Component {
  students = [];

  render() {
    return (
    <div>

        <script src="./src/SpaceShooter.js" async defer></script>
        <center>
        <p>In case the game does not start, simply refresh using "ctrl + r" ("cmd+r" for mac users)</p>
        <input id="brukernavn" placeholder="Type in username"></input> <button id="start"> Start game </button>
        <p id="poengsum"> Points: 0 </p>
        <div className="divleft" id="spillBoks">
          <div  id="romskip"></div>
        </div>
        </center>
    </div>
    );
  }
}

class HowToPlay extends Component {

  render() {
    return (
    <div className="divleft">
          Ya yeeeeeeeeeeeeeeeeeeeeey
    </div>
    );
  }
  }


class Resources extends Component {
  //<th href="https://fontawesome.com/"><img src="../meta_data/icons.png"></img></th>
    render() {
      return (
      <div className="divleft">
        <table>
        <td>
          <form>
            <div>
              <a href="https://fontawesome.com/"><img src="../meta_data/icons.png" /></a>
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/biOMz4puGt8?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <a href="https://fontawesome.com/"><img src="../meta_data/icons.png" /></a>
            </div>
          </form>
        </td>

        </table>
      </div>
    );
    }
  }

class ScoreBoard extends Component {
  scoreBoard = [];
  render() {
    return (
      <div className="divleft">
        <table className="table1" id="brukere">
        <tr className="tr1">
          <th className="th1">Username</th><th className="th1">Highscore</th>
          </tr>
          {this.scoreBoard.map(scoreBoard => (
           <tr className="tr1" key={scoreBoard.id}>
                  <td className="td1">{scoreBoard.brukernavn}</td>
                  <td className="td1">{scoreBoard.poeng}</td>
                </tr>
              ))}
              </table>
      </div>
    );
  }

  mounted() {
        scoreBoardService.getScoreBoard(results => {
        this.scoreBoard = results;
      });
  }
}


ReactDOM.render(
  <HashRouter>
    <div>
    <Menu />
    <Route exact path="/" component={Home} />
    <Route exact path="/game" component={Game} />
    <Route exact path="/howToPlay" component={HowToPlay} />
    <Route exact path="/resources" component={Resources} />
    <Route exact path="/scoreBoard" component={ScoreBoard} />
    </div>
  </HashRouter>,
  document.getElementById('body')
);
