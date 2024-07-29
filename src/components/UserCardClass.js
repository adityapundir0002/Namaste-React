import React from "react";
class UserCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https/dummyAvtarphoto",
      },
    };
  }
  async componentDidMount() {
    const userInfo = await fetch(
      "https://api.github.com/users/adityapundir0002"
    );
    const json = await userInfo.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    const { userInfo } = this.state;
    return (
      <div className="user-card">
        <img height="100px" width="100px" src={userInfo.avatar_url} />
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click here
        </button>
        <h2>{userInfo.name}</h2>
        <h3>{userInfo.location}</h3>
        <h4>Contact: 9528832990</h4>
      </div>
    );
  }
}
export default UserCardClass;
