const userprofile = {
  user_id : "12345",
  name:"Pandu",
  posts:[],
  followers:new Set(),
  following:new Set()
      
}


function updatedProfile(newData){

    return{...userprofile,...newData}
}

const update = updatedProfile({name:"Leela",posts:[2]})
console.log(update)