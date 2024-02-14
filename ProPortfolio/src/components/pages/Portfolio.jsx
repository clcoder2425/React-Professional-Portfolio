//Importing MDBReact dependencies
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import './style/Portfolio.css'
//Implementing the Portfolio component
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
   <div id="image-container">   
<MDBCard id = 'card'>
      <MDBCardImage src='./src/assets/images/project1.gif' position='top' alt='Project 1' />
      <MDBCardBody>
        <MDBCardTitle>Mars Exploration</MDBCardTitle>
        <MDBCardText>
          Latest pictures from Mars via NASA API
        </MDBCardText>
        <MDBBtn id='buttons' href='https://github.com/clcoder2425/mars-exploration-app.git'  target= "_blank"
        rel="noreferrer">Github</MDBBtn>
        <MDBBtn id='buttons' href='https://clcoder2425.github.io/mars-exploration-app/'  target= "_blank"
        rel="noreferrer">Deployed</MDBBtn>
      </MDBCardBody>

    </MDBCard>
    <MDBCard id = 'card'>
      <MDBCardImage src='./src/assets/images/quiz.gif'  position='top' alt='quiz' />
      <MDBCardBody>
        <MDBCardTitle>Multiple Choice Quiz</MDBCardTitle>
        <MDBCardText>
          Multiple choice quiz with a timer
        </MDBCardText>
        <MDBBtn id='buttons' href='https://github.com/clcoder2425/Quiz.git'  target= "_blank"
        rel="noreferrer">Github</MDBBtn>
        <MDBBtn id='buttons' href='https://clcoder2425.github.io/Quiz/' target= "_blank"
        rel="noreferrer">Deployed</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard id = 'card'>
      <MDBCardImage id= 'img' src='./src/assets/images/workdayscheduler.jpg'  position='top' alt='Calendar app'/>
      <MDBCardBody>
        <MDBCardTitle>Work Scheduler</MDBCardTitle>
        <MDBCardText>
          Simple Calendar app to organaize your work day
        </MDBCardText>
        <MDBBtn id='buttons' href='https://github.com/clcoder2425/Work-Day-Scheduler.git' target= "_blank"
        rel="noreferrer"> Github</MDBBtn>
        <MDBBtn id='buttons' href='https://clcoder2425.github.io/Work-Day-Scheduler/'  target= "_blank"
        rel="noreferrer">Deployed</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>
  );
}
