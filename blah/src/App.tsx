import React from 'react';
import './App.css';
import jsonData from './CollegeBasketballTeams.json';
import { json } from 'stream/consumers';
import ncaaLogo from 'public/NCAA_logo.svg.png';

interface SchoolProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div className="App">
      <h1>Welcome to the ultimate guide to collegiate basketball!</h1>
      <p>
        Dive into the heart of NCAA Basketball, where passion meets precision,
        and talent touches the stars.
      </p>
      <p>
        Our platform is meticulously designed for fans, athletes, parents, and
        scouts alike, offering comprehensive insights into every college that's
        making waves on the basketball court.
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/NCAA_logo.svg.png`}
        alt="NCAA logo"
        width="200"
      />
    </div>
  );
}

class Team extends React.Component<SchoolProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
        <br></br>
      </div>
    );
  }
}

function SchoolList() {
  return (
    <div>
      {jsonData.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <SchoolList />
    </div>
  );
}

export default App;
