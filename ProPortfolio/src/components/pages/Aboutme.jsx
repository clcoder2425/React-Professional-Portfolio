// Desc: About me page for the portfolio
export default function Aboutme() {
  return (
    <div>
      <h1>About Me</h1>
      {/*add a picture of yourself on the feft side of the page using mdb-react-ui-kit*/}
     
      <div style= {{display: 'flex', alignItems: 'center'}}>
        <Image 
        src={ `${Process.env.PUBLIC_URL}/Profile.jpg`} alt= 'Profile' roundedCircle 
        style={{ width: '150px',  marginRight: '20px'}}
        />

      </div>
      <p>
        Hi! I am an enthusiastic and motivated junior Full Stack Web Developer with a background in the tech support and education. I am passionate about creating and developing applications that are user-friendly and efficient. I am a quick learner and a team player who is always eager to learn new technologies and languages. I am a graduate of the University of Wisconsin,Full Stack Web Development Bootcamp. I am skilled in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js.  I am excited to bring my skills to a team that values creativity, collaboration, and innovation. I am a native Spanish speaker and I am fluent in English.  I enjoy spending time with my family, traveling, and learning new things.
      </p>
    </div>
  );
}
