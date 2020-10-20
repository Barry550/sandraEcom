const initState = {
  posts:[
    {
      id: "1",
      title: "premier titre",
      body: "tout les premier de blog sont des super-heros"
    },

    {
      id: "2",
      title: "deuxieme titre",
      body: "tout les deuxieme de blog sont des super-heros"
    },

    {
      id: "3",
      title: "troisieme titre",
      body: "tout les troisieme de blog sont des super-heros"
    },

    {
      id: "4",
      title: "quatrieme titre",
      body: "tout les quatrieme de blog sont des super-heros"
    }

  ]
}

const RootReducers = (state = initState, action) =>{
  if(action.type === "DELETE_BLOG"){
    const newpost = state.posts.filter(list => list.id !== action.id)
    

    return{
      ...state,
      posts:newpost
    }
  }

  return state
}

export default RootReducers