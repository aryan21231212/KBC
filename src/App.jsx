import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Question from './component/Question';
import Timer from './component/timer';
import bg from "/public/bg.jpg"


const App = () => {
  


  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];


  const ques = [
    { id: 1, amount: "$100" },
    { id: 2, amount: "$200" },
    { id: 3, amount: "$300" },
    { id: 4, amount: "$500" },
    { id: 5, amount: "$1000" },
    { id: 6, amount: "$2000" },
    { id: 7, amount: "$4000" },
    { id: 8, amount: "$8000" },
    { id: 9, amount: "$16000" },
    { id: 10, amount: "$32000" },
    { id: 11, amount: "$64000" },
    { id: 12, amount: "$125000" },
    { id: 13, amount: "$250000" },
    { id: 14, amount: "$500000" },
    { id: 15, amount: "$1000000" },
  ]

  const [questionNumber, setquestionNumber] = useState(1)
  const [stop, setstop] = useState(false)
  const [score, setscore] = useState("$ 0")
  const [timeOut, setTimeOut] = useState(false);

  return (
    <Container>

      <div className='main'>
        {stop ? <><h1 className='earned'>You Earned: {score}</h1></> :
          <>
            <div className="top">
              <div className="timer"><Timer setTimeOut={setTimeOut}
                questionNumber={questionNumber}></Timer></div>
            </div>

            <div className="bottom">

              <Question data={data}
                setquestionNumber={setquestionNumber}
                questionNumber={questionNumber}
                stop={stop}
                setstop={setstop}
                setscore={setscore}
                ques={ques}
                >

              </Question>

            </div></>

        }

      </div>
      <div className='money'>
        <div className='pyramid'>
          <ul className='moneylist'>
            {ques.reverse().map((ele) => (
              <li className={ele.id === questionNumber ? "moneyitem active" : "moneyitem"} >
                <span>{ele.id}</span><span className='ruppe'>{ele.amount}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Container>
  )
}

export default App

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
  .main{
    height: 100vh;
    width: 70%;
    background: linear-gradient(to bottom,rgba(0,0,0,0),#020230), url("/public/bg.jpg") center;
    color: white;
  }
  .money{
    height: 100vh;
    width: 30%;
    background-color:#020230;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pyramid{
    font-size: 1.4rem;
  }
  .moneyitem.active{
    background-color:teal;
    border-radius: 0.25rem;
    padding-left: 4px;
  }
  .moneyitem{
    width: 400px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li{
    margin-top: 1rem;
  }
 
  .top{
    height: 50%;
    width: 100%;
    position: relative;
  }
  .bottom{
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
  }

  .timer{
    height: 100px;
    width: 100px;
    border: 5px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
    position: absolute;
    bottom: 15px;
    left: 20px;
  }
  .earned{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
 
`