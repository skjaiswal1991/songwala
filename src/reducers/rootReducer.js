

const post = [{
    name: 'sanjay1',
    singer: '薛之谦',
    cover: '//cdn.lijinke.cn/nande.jpg',
    musicSrc: '//cdn.lijinke.cn/gaoshang.mp3',      
    showLyric: true    
  }]

const initStart = {


    post : [{
        name: 'ajay',
        singer: '薛之谦',
        cover: '//cdn.lijinke.cn/nande.jpg',
        musicSrc: () => {
           return Promise.resolve(
             '//cdn.lijinke.cn/gaoshang.mp3'
           )
         },      
        showLyric: true    
      }],
    options : {
        audioLists: post,
        defaultPlayIndex: 0,   
        theme: 'dark',
        bounds: 'body',
        mode: 'full',
        remember: false,
        preload: "auto",
        autoPlay: true,
        autoPlayInitLoadPlayList: true
      }
}



const rootReducer = (state = initStart, action) =>{
    console.log(action);

    if( action.type === 'DELETE_POST'){
        let newPosts = state.post.filter(post =>{
            return action.id !== post.id;
        } )
    
        return {
            ...state,
            post: newPosts
        }
    }else if(action.type === 'ADD_POST'){

        let newpost = action.data;
        
        return {...state,post:newpost}
    }

    return state;
}

//const store = createStore(rootReducer)

export default rootReducer;