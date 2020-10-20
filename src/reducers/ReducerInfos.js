const initState = {
    base:[
      {
        id: "1",
        title: "bienvenue dans ma premiere page Infos",
        body: "Dans cette premiere page tu accees a tou les information du state"
      },

      {
        id: "2",
        title: "bienvenue dans ma deuxieme page Infos",
        body: "Dans cette deuxieme page tu accees a tou les information du state"
      },

      {
        id: "3",
        title: "bienvenue dans ma troisieme page Infos",
        body: "Dans cette troisieme page tu accees a tou les information du state"
      }
    ]
}

const ReducerInfos = (state = initState, action) =>{
  return state
}

export default ReducerInfos