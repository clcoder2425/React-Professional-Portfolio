//Import resume from documents folder
import CV from '../../documents/Carmen_Jimenez_Resume.pdf'
import './style/Resume.css'
//Function to create resume page
export default function Resume() {
  return (
    <div>
      <div>
        <a href={CV} download="Resume.pdf"
          target="_blank"
          rel="noreferrer">
          <button>download Resume</button>
        </a>
      </div>
      <div id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}
