import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import './App.css'

function NavButton (){
  return (
    <Button variant="text" className="closeButton">X</Button>
  )
}

function AllocCard (props: CardProps){

  return (
    <Card className="allocationCard">
        <div className="cardNav">
            <Button variant="text" className="closeButton">X</Button>
        </div>
        <div className="CardTop">
          <div className="cardTitle">{props.title}</div>
         <div className="freqNum">{props.freqNum}</div>
         <div className="destination">{props.destination}</div>
        </div>
    </Card>
    )
}
export default function MyApp() {
  var myCard = {title:"מספר תדר",freqNum:-2348324, destination:"ירושלים"}
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <AllocCard {...myCard} />
    </div>
  );
}


interface CardProps {
  title: string;
  freqNum: number;
  destination: string;
}