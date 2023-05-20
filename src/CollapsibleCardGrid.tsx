import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './card.css'


function cardLayout(card:CardProps){

  return(
    <div className="cardCols">
      <div className="cardCol">
          <div className="cardMiniTitle">אזור פעולה </div>
          <div className="cardContent">{card.areaRadius}</div>
          <div className="cardMiniTitle">מספר מעקב עבודה </div>
          <div className="cardContent">{card.workIndex} </div>
          <div className="cardMiniTitle">נ.צ </div>
          <div className="cardContent">{card.coordination}</div>
          <div className="cardMiniTitle">טווח פעולה </div>
          <div className="cardContent">{card.rangeRadius}</div>
          <div className="cardMiniTitle">סימוכין </div>
          <div className="cardContent">{card.refernce}</div>
      </div>
      <div className="cardCol">
          <div className="cardMiniTitle">גובה </div>
          <div className="cardContent">{card.height}</div>
          <div className="cardMiniTitle">מספר נוהל </div>
          <div className="cardContent">{card.procedureNum} </div>
          <div className="cardMiniTitle">תאריך אישור </div>
          <div className="cardContent">{card.valDate}</div>
          <div className="cardMiniTitle">תאריך תוקף </div>
          <div className="cardContent">{card.exDate}</div>
          <div className="cardMiniTitle">שייכות ארגונית </div>
          <div className="cardContent">{card.org}</div>
     </div>
    </div>

    )
}
const CollapsibleCardGrid: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);


   const toggleCard = (cardIndex: number): void => {
    if (expandedCards.includes(cardIndex)) {
      setExpandedCards(expandedCards.filter((index) => index !== cardIndex));
    } else {
      setExpandedCards([...expandedCards, cardIndex]);
    }
  };

const removeCard = (cardId: number):void =>{
  setCards(prevCards =>
      prevCards.filter(card => card.id !== cardId)
    );
  };


   const [cards, setCards] = useState<CardProps[]>([
    { id:1, visible:true ,freqNum: 'l2340032994', destination:'ירושלים', height:'10 מעפש', areaRadius:'חולון', procedureNum:'2020/026-01',workIndex:'2050',coordination:"657436/3654367",rangeRadius:'40km',refernce:"קש 1 4/2 060",valDate:'04/05/2025', exDate:'04/05/2035', org:'IAF'},
    { id:2  ,visible:true ,freqNum: '123912-39', destination:'ירושלים', height:'15 מעפש', areaRadius:'חיפה', procedureNum:'2021/027-01',workIndex:'2050',coordination:"657436/3654367",rangeRadius:'40km',refernce:"קש 1 4/2 060",valDate:'04/05/2025', exDate:'04/05/2035', org:'IAF'},
    { id:3  ,visible:true ,freqNum: '239844323', destination:'חיפה', height:'100 מעפש', areaRadius:'ירושלים',procedureNum:'2020/026-01',workIndex:'2050',coordination:"657436/3654367",rangeRadius:'40km',refernce:"קש 1 4/2 060",valDate:'04/05/2025', exDate:'04/05/2035', org:'IAF' },
    { id:4  ,visible:true,freqNum: '239844323', destination:'חיפה', height:'100 מעפש', areaRadius:'ירושלים',procedureNum:'2020/026-01',workIndex:'2050',coordination:"657436/3654367",rangeRadius:'40km',refernce:"קש 1 4/2 060",valDate:'04/05/2025', exDate:'04/05/2035', org:'IAF' },

    // Add more card data here...
  ]);

  return (
    <Container>
      <Row>
         {cards.map((card: CardProps, index: number) => (
           card.visible ? (

          <Col sm={6} md={4} key={index}>
            <Card>
              <Card.Header>
                <Card.Title></Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text className="cardText">
                  <div className="cardMiniTitle">מספר תדר</div>
                  <div className="freqNum">{card.freqNum}</div>
                  <div className="destination">{card.destination}</div>
                <div>{expandedCards.includes(index) ? cardLayout(card) : ''}</div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => toggleCard(index)}>
                  {expandedCards.includes(index) ? '^' : 'Show More'};
                </Button>
                <Button variant="danger" onClick={() => removeCard(card.id)}>
                    Close
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          ) : null
        ))}
      </Row>
    </Container>
  );
};

interface CardProps {
  freqNum: string;
  destination: string;
  height:string;
  areaRadius:string
  procedureNum:string
  valDate:string;
  exDate:string
  org:string
  rangeRadius:string;
  coordination:string
  workIndex:string
  refernce:string
  id: number;
  visible: boolean;

}

export default CollapsibleCardGrid;






