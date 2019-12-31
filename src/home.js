import React, { Component } from 'react';
import './home.css';
//import AudioPlayer from 'react-h5-audio-player';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const audioList1 = [
    {
      name: '高尚',
      singer: '薛之谦',
     // cover: '//cdn.lijinke.cn/nande.jpg',
      cover: 'https://miketricking.github.io/bootstrap-image-hover/images/cac.jpg',
      musicSrc: '//cdn.lijinke.cn/gaoshang.mp3',
      showLyric: true    
    }
    //,
    // {
    //   name: 'Despacito',
    //   singer: 'Luis Fonsi',
    //   cover:  'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    //   musicSrc: () => {
    //     return Promise.resolve(
    //       'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
    //     )
    //   },
    //   showLyric: true
    // }
  ]

 const options = {
    audioLists: audioList1,
    defaultPlayIndex: 0,   
    theme: 'dark',
    bounds: 'body',
    mode: 'full',
    remember: "true",
    preload: "auto",
    //autoPlay: true,
  }


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {params:options}
        this.state.params.audioLists[0].name = "asdasd";

   } 

   //this.setState({'name':'asdas'})
   onChangeToSecondAudioList = (song) => {
    console.log(song);
    // const data = {
    //   ...this.state.params,
    //   clearPriorAudioLists: true,
    //   audioLists: audioList2
    // }
    // this.setState({
    //   params: data
    // })
  }
    render() { 
        //console.log(audioList1);
        const { params } = this.state
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
                                                <a href="http://webstrot.com/html/tunein/html/index3.html#"> view all <i className="flaticon-right-arrow"></i></a>
                                            </div>
                                            <div className="release_tabs_wrapper">
                                                <ul className="nav nav-tabs">
                                                    <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="http://webstrot.com/html/tunein/html/index3.html#home"> hindi</a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://webstrot.com/html/tunein/html/index3.html#menu1">english</a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://webstrot.com/html/tunein/html/index3.html#menu2"> telugu</a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://webstrot.com/html/tunein/html/index3.html#menu3"> punjabi</a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://webstrot.com/html/tunein/html/index3.html#menu4"> marathi </a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="http://webstrot.com/html/tunein/html/index3.html#menu5"> bhojpuri</a>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="tab-content">
                                                <div id="home" className="tab-pane active">
                                                    <div className="row">
                                                    {audioList1.map((song,key)=> 
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src={song.cover} alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">{song.singer}</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">{song.singer}</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a  className="sanjay" onClick="dssdf">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )}
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel1.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Dilla Ther Jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel2.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Ik Vaari Aa jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel3.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Sadda Move song</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel4.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">me hoon don</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel5.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">wafa ne bewafai</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel6.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">tera chehra</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
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
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Sadda Move song</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel1.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Dilla Ther Jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel2.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Ik Vaari Aa jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel4.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">me hoon don</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel6.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">tera chehra</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel5.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">wafa ne bewafai</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
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

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel2.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Ik Vaari Aa jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel3.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Sadda Move song</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel1.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Dilla Ther Jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel4.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">me hoon don</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel5.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">wafa ne bewafai</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel6.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">tera chehra</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="menu3" className="tab-pane fade">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel3.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Sadda Move song</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel2.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Ik Vaari Aa jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel1.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Dilla Ther Jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel5.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">wafa ne bewafai</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel4.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">me hoon don</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel6.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">tera chehra</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="menu4" className="tab-pane fade">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel3.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Sadda Move song</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel2.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Ik Vaari Aa jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel1.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Dilla Ther Jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel5.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">wafa ne bewafai</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel6.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">tera chehra</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel4.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">me hoon don</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="menu5" className="tab-pane fade">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel3.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Sadda Move song</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel2.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Ik Vaari Aa jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel1.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Dilla Ther Jaa</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel5.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">wafa ne bewafai</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel4.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">me hoon don</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel6.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">tera chehra</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pd1">
                                                            <div className="treanding_slider_main_box release_box_main_content m24_cover">
                                                                <img src="./image/rel.png" alt="img" />
                                                                <div className="release_content_artist release_content_artist2">
                                                                    <p><a href="http://webstrot.com/html/tunein/html/index3.html#">Jabariya Jodi</a></p>
                                                                    <p className="various_artist_text"><a href="http://webstrot.com/html/tunein/html/index3.html#">Various Artists</a></p>
                                                                </div>
                                                                <div className="m24_treanding_box_overlay release_box_overlay">
                                                                    <div className="m24_tranding_box_overlay"></div>
                                                                    <div className="m24_tranding_more_icon">
                                                                        <i className="flaticon-menu"></i>
                                                                    </div>
                                                                    <ul className="tranding_more_option">
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-playlist"></i></span>Add To playlist</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-star"></i></span>favourite</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-share"></i></span>share</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-files-and-folders"></i></span>view lyrics</a></li>
                                                                        <li><a href="http://webstrot.com/html/tunein/html/index3.html#"><span className="opt_icon"><i className="flaticon-trash"></i></span>delete</a></li>
                                                                    </ul>
                                                                    <div className="tranding_play_icon">
                                                                        <a href="http://webstrot.com/html/tunein/html/index3.html#">
                                                                            <i className="flaticon-play-button"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                {/* <div className="container">
                    <div className="row">
                    {audioList1.map((son,key)=>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src={son.cover} alt=""/>
                                    <div className="overlay">
                                        <h2>Effect 14</h2>
                                        <p>
                                            <a href="#">LINK HERE</a>
                                        </p>
                                    </div>
                            </div>
                        </div>
                     ) }                   
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <h2>Welcome in music site</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <div className="col-sm">
                            <ul className="list-group">
                              {audioList1.map((son,key)=>
                                //   <li className="list-group-item" onClick={()=>{this.setState({'file':this.path+son.file})}}>{son.name}</li>
                                  <li className="list-group-item" onClick={this.songhendler}>{son.name}</li>
                              )}                                
                                
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm">
                        One of three columns
                        </div>
                    </div>
                </div> */}
                <ReactJkMusicPlayer {...params} />
                {/* <AudioPlayer  autoPlay src={this.state.file} onPlay={e => console.log("onPlay")}  /> */}
               
                </React.Fragment>
         );
    }
}
 
export default Home;