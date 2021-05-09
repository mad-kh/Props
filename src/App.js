import "./App.css";
import React from "react";
import ProfileComponent from "./Profile/ProfileComponent";
import Pic1 from "./Max.jpg";
function App() {
  function handelName(name) {
    alert(`I am ${name}`);
  }

  return (
    <div className="App" style={{ display: "flex", margin: "20px" }}>
      <ProfileComponent
        FullName="Max Planck"
        bio=" Planck is a German physicist,he made many contributions to theoretical physics, but his fame rests primarily on his role as originator of the quantum theory. This theory revolutionized our understanding of atomic and subatomic processes, just as Albert Einstein’s theory of relativity revolutionized our understanding of space and time. Together they constitute the fundamental theories of 20th-century physics. Both have forced humankind to revise some of the most-cherished philosophical beliefs, and both have led to industrial and military applications that affect every aspect of modern life."
        profession="physicist"
        handelName={handelName}
      >
        <div>
          <img src={Pic1} height="300" width="400" alt="Max planck" />
        </div>
      </ProfileComponent>
    </div>
  );
}

export default App;
