import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {config}  from './../../configration';
import { connect } from 'react-redux';
import './songs.css';
//import AudioPlayer from 'react-h5-audio-player';
// import ReactJkMusicPlayer from "react-jinke-music-player";
// import "react-jinke-music-player/assets/index.css";
import Footer from '../common/footer';
import Header from '../common/header';

const url = {"server":config.rurl,"img":config.rurl+"img/","songs":config.rurl+"songs/"};




const audioList1 = [
    {
      name: '高尚',
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

 const options = {
    audioLists: audioList1,
    defaultPlayIndex: 0,   
    theme: 'dark',
    bounds: 'body',
    mode: 'full',
    remember: false,
    preload: "auto",
    autoPlay: true,
    autoPlayInitLoadPlayList: true
  }


class Song extends Component {
    constructor(props){
        super(props);
        this.state = {params:options,allsongs:[],default:[],allmovies:[]}
       

   } 



 
   componentDidMount(){

        fetch(url.server+'allsong').then(res=>res.json()).then((res)=>{

            var datasong = [];

            for( var i = 0; i < parseInt(res.length); i++ ){

                 let sdata= url.songs+res[i].songs;
                 let cover= url.img+res[i].cover;
                 var audioList2 = {
                        name: res[i].name,
                        singer: res[i].singer,                        
                        cover: () => { return Promise.resolve( cover ) },
                        showLyric: true,
                        musicSrc: () => { return Promise.resolve( sdata ) }
                    }                    

                datasong.push(audioList2);
            }

            this.setState({allsongs:res}) 
            this.setState({default:datasong}) 

            this.props.pushdata(this.state.default);
            
                         
            const data = {
                ...this.state.params,      
                clearPriorAudioLists: true,
                preload: true,
                audioLists: this.state.default
              }
              this.setState({
                params: data
              })
            //this.state.params.audioLists = this.state.songs;
        })

        fetch(url.server+'allmovies').then(res=>res.json()).then((res)=>{
            var movies = res;
            this.setState({allmovies:movies});
            

        })

   }
//    (song.name,song.singer,song.cover,song.musicSrc)
   //this.setState({'name':'asdas'})

//    onChangeToSecondAudioList = () => {
//     const data = {
//       ...this.state.params,
//       clearPriorAudioLists: true,      
//       audioLists: audioList2
//     }
//     this.setState({
//       params: data
//     })
//   }


   

   onChangeToSecondAudioList = (name,singer,cover,src) => {
    
    const audioList2 = [
        {
            name: name,
            singer: singer,
            cover: () => {
                return Promise.resolve(
                    cover
                )
              },
            musicSrc: () => {
                return Promise.resolve(
                    src
                )
              },
            showLyric: true    
        }]
        
    

    const data = {
      ...this.state.params,      
      clearPriorAudioLists: true,
      preload: true,
      audioLists: audioList2
    }
    this.setState({
      params: data
    })
  }
 
   
    render() { 
        //console.log(audioList1);
        const { params,allsongs,allmovies } = this.state
       // console.log(allmovies);
        return ( 
            <React.Fragment>
                    {/* <div id="preloader">
                        <div id="status">
                            <img src="./image/loader.gif" id="preloader_image" alt="loader" />
                        </div>
                    </div> */}
                    <div onClick={this.changeshandler}>sanjay</div>

                    <div className="treanding_songs_wrapper release_wrapper index3_release_wrapper m24_cover">
                                <div className="container">

                                    <div className="row"> 
                                        <div className="m24_heading_wrapper white_heading_wrapper">
                                            <h1>New Movies</h1>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">                                           
                                            
                                                <div className="row">
                                               
                                                    {allmovies.map((movie,key)=> 
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1" key={key}>
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src={url.img+movie.img} alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://localhost:3000#">{movie.singer}</a></p>
                                                                    <p className="various_artist_text"><Link to="/songdetails">{movie.name}</Link></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon" onClick={this.handler}>
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>                                                                    
                                                                    <div className="tranding_play_icon">
                                                                        <Link className="sanjay" to={"/songdetails/"+movie.id} >
                                                                            <i className="flaticon-play-button"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )}
                                                        
                                                    </div> {/* row close*/}
                                                </div> 
                                    </div>                                

                                    <div className="row">                                        

                                        <div className="m24_heading_wrapper white_heading_wrapper">
                                            <h1>New Songs</h1>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">                                           
                                            
                                                <div className="row">
                                               
                                                    {allsongs.map((song,key)=> 
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1" key={key}>
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src={url.img+song.cover} alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://localhost:3000#">{song.singer}</a></p>
                                                                    <p className="various_artist_text"><Link to="/songdetails">{song.name}</Link></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon" onClick={this.handler}>
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://localhost:3000#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://localhost:3000#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://localhost:3000#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://localhost:3000#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://localhost:3000#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a className="sanjay" onClick={()=>this.onChangeToSecondAudioList(song.name,song.singer,url.img+song.cover,url.songs+song.songs)}>
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )}
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="//cdn.lijinke.cn/nande.jpg" alt="img"/>
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="#"><i className="flaticon-play-button"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> {/* row close*/}
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                
                           
                

                {/* <ReactJkMusicPlayer {...params} ></ReactJkMusicPlayer> */}
                </React.Fragment>
                
         );
    }
}

export const deletePost = (data) =>{

    return {

                type:'ADD_POST', 
                data
            }
}
 
const mapStatetoProp = (state)=>{
     //console.log(this.state.allsongs);

    console.log(state);
}

const mapDispatchTpProp = (dispatch) =>{

    return {
        
        pushdata : (data) => dispatch(deletePost(data))
    }
}
export default connect(mapStatetoProp,mapDispatchTpProp)(Song);