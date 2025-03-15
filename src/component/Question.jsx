import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from "/public/play.mp3"
import wrong from "/public/wrong.mp3"
import correct from "/public/correct.mp3"
import styled from 'styled-components'

const Question = ({data,questionNumber,setquestionNumber,setstop,ques,setscore}) => {

    const[letsplay] = useSound(play)
    const[wrongg] = useSound(wrong)
    const[correctt] = useSound(correct)
  
    useEffect(() => {
      letsplay()
    }, [letsplay])
    

    const [question, setquestion] = useState(null)
    const [selectedAnswer, setselectedAnswer] = useState(null)
    const [Classname, setClassname] = useState("answer")

    useEffect(() => {
     questionNumber>1 && 
        setscore(ques.find((m)=> m.id === questionNumber-1).amount)
    }, [ques,questionNumber])
    


    useEffect(() => {
      setquestion(data[questionNumber-1])
    }, [data,questionNumber])

    let handleClick = (a)=>{
        setselectedAnswer(a)
        setClassname("answer active")
        setTimeout(()=>{
            if(a.correct===true){
                correctt()
                setClassname("answer correct")
                setTimeout(()=>{
                    setquestionNumber((prev)=> prev+1)
                },4000)
            }else{
                wrongg()
                setClassname("answer wrong")
                setTimeout(()=>{
                  
                    setstop(true)
                },4000)
                
            }
            
        },2000)
    }
    
  return (
   <Container>
    <div className='question'>{question?.question}</div>
        <div className="options">
            {question?.answers.map((a)=>(
                <div className={selectedAnswer===a ? Classname :"answer"} onClick={()=>handleClick(a)}>{a.text}</div>
            ))}
          
        </div>
   </Container>
  )
}

export default Question

const Container = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
   

     .question{
    border: 2px solid white;
    height: 90px;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.2rem;
    font-weight: 700;
    background: linear-gradient(black,#7600bc);
    border-radius: 0.5rem;
  }
  .options{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:1rem;
    align-items: center;
    margin-top: 4rem;
  }
  .answer:hover{
    background: blue;
   
  }
  .answer.active{
    background: blue;
  }

  .answer{
    cursor: pointer;
    border-radius: 0.5rem;
    border: 2px solid white;
    width: 450px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:linear-gradient(#1e002f,black);
    font-size: 1.3rem;
    font-weight:500;
  }


  .answer.correct{
    animation: correct 3s ease  forwards;
  }

  @keyframes correct {
    0%{
      background:blue;
    }
    10%{
      background:linear-gradient(#1e002f,black);
    }
    32%{
      background:blue;
    }
    40%{
      background: linear-gradient(#1e002f,black);
    }
    50%{
      background:blue;
    }
    60%{
      background: linear-gradient(#1e002f,black);
    }
    100%{
      background:green;
    }

  }
  .answer.wrong{
    animation: wrong 3s ease  forwards;
  }

  @keyframes wrong {
    0%{
      background:blue;
    }
    10%{
      background:linear-gradient(#1e002f,black);
    }
    32%{
      background:blue;
    }
    40%{
      background: linear-gradient(#1e002f,black);
    }
    50%{
      background:blue;
    }
    60%{
      background: linear-gradient(#1e002f,black);
    }
    100%{
      background: red;
    }

  }
`