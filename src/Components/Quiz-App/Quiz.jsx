import { useState } from "react";
import './quiz.css'
const Quiz = ()=>{
    const quizData = [
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          answer: "Mars",
        },
        {
          question: "Who wrote 'Hamlet'?",
          options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
          answer: "William Shakespeare",
        },
      ];
      const [currentIndex,setCurrentIndex]=useState(0);
      const[finish,setfinish]=useState(false);
      const[totalScore,setTotalScore]=useState(0);
      
      const hanldeOptionClick =(selectedOption)=>{
        console.log(selectedOption)
        if(selectedOption === quizData[currentIndex].answer){
            setTotalScore(totalScore+1);
        }
        if(currentIndex +1 < quizData.length){
            setCurrentIndex(currentIndex+1);
        }
        else{
            setfinish(true);
        }
      }
    return(
        
          <div className="quiz-container">
            <h1>Quiz app</h1>
            {
                finish ? (<div className="result"> <p>your total score is {totalScore} out of {quizData.length}</p></div>) : 
                (
                 <div className="queans-container">
                     <h2> {quizData[currentIndex].question} </h2>
                     <div className="option-container">
                        {
                            quizData[currentIndex].options.map( (option,index)=>(
                                <button key={index} onClick={()=>hanldeOptionClick(option)} >{option}</button>
                            ))
                        }
                     </div>
                 </div>
                )
              
            }
          </div>
      
    )
}
export default Quiz