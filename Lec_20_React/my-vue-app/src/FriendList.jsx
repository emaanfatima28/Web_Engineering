import React, { Component } from "react";
import Friend from "./Friend";

class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [
        { id: 0, name: "Emaan", email: "emaan@gmail.com" },
        { id: 1, name: "Ayesha", email: "ayesha@gmail.com" }
      ]
    };
  }

  changeBookState = () => {
    this.setState({
      friends: [
        { id: 0, name: "Emaan Updated", email: "emaan@gmail.com" },
        { id: 1, name: "Ayesha Updated", email: "ayesha@gmail.com" }
      ]
    });
  };

  changeInput = (e) => {
    this.setState({
      friends: [
        { id: 0, name: e.target.value, email: this.state.friends[0].email },
        { ...this.state.friends[1] }
      ]
    });
  };

  // changeName = (event, index) => {
  //   const updatedFriends = [...this.state.friends];
  //   updatedFriends[index].name = event.target.value;
  //   this.setState({ friends: updatedFriends });
  // };

  changeName = (event, index) => {
    const currentFriend = { ...this.state.friends[index] }; 
    currentFriend.name = event.target.value; 
  
    const currentFriends = [...this.state.friends]; 
    currentFriends[index] = currentFriend; 
  
    this.setState({ friends: currentFriends });
  };
  
  deleteFriend = (index) => {
    const friends = [...this.state.friends];
    friends.splice(index, 1);
    this.setState({ friends });
  };

  render() {
    return (
      <div>
        {this.state.friends.map((friend, index) => (
          <Friend
            key={friend.id}
            name={friend.name}
            email={friend.email}
            inputName={(event) => this.changeName(event, index)}
            delete={() => this.deleteFriend(index)}
          />
        ))}
        <button onClick={this.changeBookState}>Change Book</button>
        <input type="text" onChange={this.changeInput} placeholder="Change first friend's name" />
      </div>
    );
  }
}

export default FriendList;
