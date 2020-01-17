import React, { Component } from 'react';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { connect } from 'react-redux';
const audioList1 = [
    {
      name: 'testdaya',
      singer: '薛之谦',
      cover: '//cdn.lijinke.cn/nande.jpg',
      musicSrc: () => {
          return Promise.resolve(
            '//cdn.lijinke.cn/gaoshang.mp3'
          )
        },      
      showLyric: true    
    }
  ]

//  const options = {
//     audioLists: audioList1,
//     defaultPlayIndex: 0,   
//     theme: 'dark',
//     bounds: 'body',
//     mode: 'full',
//     remember: false,
//     preload: "auto",
//     autoPlay: true,
//     autoPlayInitLoadPlayList: true
//   }

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { params :this.props.listdata }
        console.log(this.props.listdata);
        //console.log(options);


       // if(this.props.listsongs){
          
       // }
        
    }
    
    render() {
         
        
        const {listsongs,listdata}  = this.props;
        const { params } = this.state;
        
        return ( 
            <ReactJkMusicPlayer {...listdata} />
         );
    }
}

const mapStatetoProp = (state) =>{
  console.log(state.options);
  return{
      listsongs:state.post,
      listdata:state.options
  }
}


 
export default connect(mapStatetoProp)(Footer);