import React, { useState } from 'react';


function App() {
  return <div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="all_star.mp4"></File>
        <File name="naruto_op_16.mp4"></File>
      </Folder>
      <File name="dogs.jpeg"></File>
      <File name="cats.jpeg"></File>
    </Folder>
    <Folder name="Applications">
      <File name="homework.pdf"></File>
    </Folder>

  </div>
}


// Props.children => Array of objects inside parent
// Border style, javascript CSS, must put in {} to signify javascript object
const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true); // bool value = isOpen, setter = setIsOpen
  const { name, children } = props;
  const direction = isOpen ? "down" : "right";

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const indentation = { marginLeft: "15px "};
  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      {name}
    </span>
    <div style={indentation}>
      {isOpen ? children : null}  
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: "headphones",
    jpeg: "file image",
    png: "file image outline",
    pdf: "file alternate"
  };

  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div>
}

export default App;