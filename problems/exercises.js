// Question 1
function makeFriendList(){
    return {
    _friends:[],
    addFriend: function(str){
        this._friends.push(str);
        return `${str} successfully added.`;
    },
    removeFriend: function(name){
          //test: if the name is found in the array
          //delete _friends[i]
          let indexToRemove = this._friends.findIndex((element) => element == name);
          
          if(indexToRemove !== -1){
              this._friends.splice(indexToRemove,1);
              return `${name} successfully removed.`;
          }
          return `${name} not found.`;
        //   for(let i = 0; i < this._friends.length; i ++){
        //       if(this._friends[i] === name){
        //     this._friends.splice(indexToRemove, 1);
        //       return name + " successfully removed.";
        //     } else { return name + " not found.";
        //     }  
        //   } 
    },
    displayFriends: function(){
        let allMyFriends = [...this._friends];
        allMyFriends.pop();
            if(this._friends.length === 0){
                return "You have not added any friends.";
            }else if(this._friends.length === 1){
               return `${this._friends[0]} is your friend.`;
           }else if(this._friends.length === 2){
               return `${this._friends[0]} and ${this._friends[1]} are your friends.`;
           }else{
               return allMyFriends.join(", ") + `, and ${this._friends[this._friends.length-1]} are your friends.`;
           }
        }
    }; 
}

const myFriend = makeFriendList();

console.log(myFriend.addFriend("Harry"));
console.log(myFriend._friends);
console.log(myFriend.removeFriend("Harry"));
console.log(myFriend._friends);




module.exports = {
  makeFriendList
};