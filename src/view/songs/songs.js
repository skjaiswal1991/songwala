import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './songs.css';
//import AudioPlayer from 'react-h5-audio-player';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
const rurl = "http://18.216.207.2:3020/";
const url = {"server":rurl,"img":rurl+"img/","songs":rurl+"songs/"};

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
        this.state = {params:options,allsongs:[],default:[]}
       

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
                        cover: () => {
                            return Promise.resolve(
                                cover
                            )
                          },
                        showLyric: true,
                        musicSrc: () => {
                            return Promise.resolve(
                                sdata
                            )
                          }
                    }                    

                datasong.push(audioList2);
            }

            this.setState({allsongs:res})              
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
        const { params,allsongs } = this.state
       
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
                                                    <a href="#">
                                                        <i className="flaticon-play-button"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="//cdn.lijinke.cn/nande.jpg" alt="img"/>
                                            <div className="release_content_artist release_content_artist2">
                                                <p><a href="#">Dilla Ther Jaa</a></p>
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
                                                    <a href="#">
                                                        <i className="flaticon-play-button"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="//cdn.lijinke.cn/nande.jpg" alt="img"/>
                                            <div className="release_content_artist release_content_artist2">
                                                <p><a href="#">Ik Vaari Aa jaa</a></p>
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
                                                    <a href="#">
                                                        <i className="flaticon-play-button"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel3.png" alt="img"/>
                                            <div className="release_content_artist release_content_artist2">
                                                <p><a href="#">Sadda Move song</a></p>
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
                                                    <a href="#">
                                                        <i className="flaticon-play-button"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel4.png" alt="img"/>
                                            <div className="release_content_artist release_content_artist2">
                                                <p><a href="#">me hoon don</a></p>
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
                                                    <a href="#">
                                                        <i className="flaticon-play-button"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel5.png" alt="img"/>
                                            <div className="release_content_artist release_content_artist2">
                                                <p><a href="#">wafa ne bewafai</a></p>
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
                                                    <a href="#">
                                                        <i className="flaticon-play-button"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel6.png" alt="img"/>
                                            <div className="release_content_artist release_content_artist2">
                                                <p><a href="#">tera chehra</a></p>
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
                                                    <a href="#">
                                                        <i className="flaticon-play-button"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                        <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                            <img src="images/rel.png" alt="img"/>
                                            <div className="release_content_artist release_content_artist2">
                                                <p><a >Jabariya Jodi</a></p>
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
                                                    <a href="#">
                                                        <i className="flaticon-play-button"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
 
export default Song;