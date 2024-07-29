import { Component } from "react";
import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Page</h2>
        <div>{/* <UserCard name="Aditya Pundir (function)" /> */}</div>
        <div>
          <UserCardClass
            name="Aditya Pundir (class)"
            location="Saharanpur (class)"
          />
        </div>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About Page</h2>
//       <div>{/* <UserCard name="Aditya Pundir (function)" /> */}</div>
//       <div>
//         <UserCardClass
//           name="Aditya Pundir (class)"
//           location="Saharanpur (class)"
//         />
//       </div>
//     </div>
//   );
// };

export default About;
