function formatName(props) {
  return props.firstName + ' ' + props.lastName;
}

function AboutMe(props) {
  return <h1 className="AboutMe-name">Hello, my name is {formatName(props)}!</h1>;
}
export default AboutMe;