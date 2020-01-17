import React, { Component } from 'react';
import { connect } from 'react-redux';
import './songs.css';
import {config} from './../../configration';
const url = {"server":config.rurl,"img":config.rurl+"img/","songs":config.rurl+"songs/"};
class Songdeatils extends Component {
    constructor(props) {
        super(props);
        this.state = { allsongs : [], moviename:"",mimg:"",data:""}
    }
    

    getData(){

            fetch(config.rurl+"moviedetails/"+this.props.match.params.id).then(res=>res.json()).then((res)=>{
              this.setState({moviename:res[0].name,mimg:res[0].img})
          })
            fetch(config.rurl+"moviesong/"+this.props.match.params.id).then(res=>res.json()).then((res)=>{

              var datasong = [];

            for( var i = 0; i < parseInt(res.length); i++ ){

                 let sdata= url.songs+res[i].songs;
                 let cover= url.img+res[i].cover;
                 var audioList2 = {
                        name: res[i].name,
                        singer: res[i].singer,                        
                        cover: cover,
                        musicSrc: () => { return Promise.resolve( sdata ) }
                    }                    

                datasong.push(audioList2);
            }
               this.setState({allsongs:datasong})
            })
            
      setTimeout(() => {         
        this.setState({
          data: 'Hello WallStreet sfsdf'
        })
      },5000)
    }
  
    async componentDidMount(){
      await this.getData();
    }

    handlerplayall = () =>{
          this.props.playall(this.state.allsongs);
    }

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

          console.log(audioList2);
          
          this.props.playall(audioList2);
  
      // const data = {
      //   ...this.state.params,      
      //   clearPriorAudioLists: true,
      //   preload: true,
      //   audioLists: audioList2
      // }
      // this.setState({
      //   params: data
      // })
    }

    render() { 
      const {allsongs,moviename,mimg,data}  = this.state;
      console.log(allsongs);
     
        return ( 
            <div className="row">                
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
                <div className="panel panel-info">
                  <div className="panel-heading">
                      <h3 className="panel-title">{moviename}</h3>
                      <button name="" onClick={this.handlerplayall}>Play All</button>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-3 col-lg-3" align="center"> <img alt="User Pic" src={config.rurl+"img/"+mimg} className="img-circle" /> </div>
                      
                     
                      <div className=" col-md-9 col-lg-9 "> 
                        <table className="table table-user-information">
                          <tbody>
                          {allsongs.map((s,i)=>(
                                <tr>
                                  <td>
                                  <div className="row">
                                      <a onClick={()=>this.onChangeToSecondAudioList(s.name,s.singer,s.cover,s.songs)}>
                                        <img src={s.cover} className="small-icon-img"></img>{s.name} 
                                        <i className="flaticon-play-button"></i>
                                      </a>
                                  </div>
                                </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         );
    }
}

const mapStatetoProp = (state) =>{
    return{
            
    }
}

const mapDispatchTpProp = (Dispatch) =>{
  
    return{
        playall : (data) =>Dispatch({type:"ADD_POST",data})
    }
}


 
export default connect(mapStatetoProp,mapDispatchTpProp)(Songdeatils);