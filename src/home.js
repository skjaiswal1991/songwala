import React, { Component } from 'react';
import './home.css';
//import AudioPlayer from 'react-h5-audio-player';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
const url = {"server":"http://localhost:3020/","img":"http://localhost:3020/img/","songs":"http://localhost:3020/songs/"};

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
    },
     {
       name: 'Despacito',
       singer: 'Luis Fonsi',
       cover:  'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
       musicSrc: () => {
         return Promise.resolve(
           'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
         )
       },
       showLyric: true
     },
 
    {
      name: 'Bedtime Stories',
      singer: 'Jay Chou',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3'
    },
    {
      name: 'Dorost Nemisham',
      singer: 'Sirvan Khosravi',
      cover:
        'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
      musicSrc: () => {
        return Promise.resolve(
          'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3'
        )
      }
    },
    {
      name: '难得',
      singer: '安来宁',
      cover: '//cdn.lijinke.cn/nande.jpg',
      musicSrc: '//cdn.lijinke.cn/nande.mp3'
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


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {params:options,songs:[],default:[]}
       

   } 

   componentDidMount(){

        fetch(url.server+'allsong').then(res=>res.json()).then((res)=>{

            var datasong = [];
            var j = 3;
            for( var i = 0; i < j; i++ ){
                console.log(res[i]);
                datasong.push({ name: res[i].name,singer: res[i].singer,cover: url.img+res[i].cover,musicSrc: url.songs+res[i].songs,showLyric: true });
            }

            console.log(datasong);

            this.setState({songs:res})              
            this.setState({default:datasong})              
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
            cover: cover,
            musicSrc: src,
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
        const { params,songs } = this.state
        console.log(songs);
        return ( 
            <React.Fragment>
                    <div id="preloader">
                        <div id="status">
                            <img src="./image/loader.gif" id="preloader_image" alt="loader" />
                        </div>
                    </div>
                    <div className="treanding_songs_wrapper release_wrapper index3_release_wrapper m24_cover">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="m24_heading_wrapper white_heading_wrapper">
                                                <h1>New Releases Albums</h1>
                                            </div>
                                            <div className="relaese_viewall_wrapper">
                                                <a href="http://localhost:3000#"> view all <i className="flaticon-right-arrow"></i></a>
                                            </div>
                                            <div className="release_tabs_wrapper">
                                                <ul className="nav nav-tabs">
                                                    <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="http://localhost:3000#home"> hindi</a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://localhost:3000#menu1">english</a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://localhost:3000#menu2"> telugu</a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://localhost:3000#menu3"> punjabi</a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://localhost:3000#menu4"> marathi </a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://localhost:3000#menu5"> bhojpuri</a>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="tab-content">
                                                <div id="home" className="tab-pane active">
                                                    <div className="row">
                                                    {songs.map((song,key)=> 
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1" key={key}>
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src={url.img+song.cover} alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://localhost:3000#">{song.singer}</a></p>
                                                                    <p className="various_artist_text"><a href="http://localhost:3000#">{song.name}</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
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
                                                                        {/* <a className="sanjay" onClick={()=>{this.state.params.audioLists[0].name = this.song.name;this.state.params.audioLists[0].singer = this.song.singer;this.state.params.audioLists[0].musicSrc = this.song.musicSrc; }}> */}
                                                                        {/* // this.onChangeToSecondAudioList(song.name,song.singer,song.cover,song.musicSrc) */}
                                                                        <a className="sanjay" onClick={()=>this.onChangeToSecondAudioList(song.name,song.singer,url.img+song.cover,url.songs+song.songs)}>
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )}
                                                        
                                                    </div>
                                                </div>
                                                <div id="menu1" className="tab-pane fade">
                                                    <div className="row">

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel3.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://localhost:3000#">Sadda Move song</a></p>
                                                                    <p className="various_artist_text"><a href="http://localhost:3000#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
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
                                                                        <a href="http://localhost:3000#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div id="menu2" className="tab-pane fade">
                                                    <div className="row">                                                        
                                                    </div>
                                                </div>

                                                <div id="menu3" className="tab-pane fade">
                                                    <div className="row">                                                        
                                                    </div>
                                                </div>
                                                <div id="menu4" className="tab-pane fade">
                                                    <div className="row">                                                        
                                                    </div>
                                                </div>
                                                <div id="menu5" className="tab-pane fade">
                                                    <div className="row">                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                <ReactJkMusicPlayer {...params} />
                </React.Fragment>
                
         );
    }
}
 
export default Home;