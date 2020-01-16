import React, { Component } from 'react';
import './songs.css';
import {config} from './../../configration';

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
               this.setState({allsongs:res})
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

    // async componentDidMount(){
    //   console.log(this.props.match.params.id);

        
    //             await fetch(config.rurl+"moviedetails/"+this.props.match.params.id).then(res=>res.json()).then((res)=>{
    //               //return Promise.resolve(this.setState({allsongs:res}));
    //               return Promise.resolve(this.setState({movie:res}));
    //             })
    // }

    render() { 
      const {allsongs,moviename,mimg,data}  = this.state;
      console.log(allsongs);
     
        return ( 
            <div className="row">                
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
                <div className="panel panel-info">
                  <div className="panel-heading">
                      <h3 className="panel-title">{moviename}</h3>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-3 col-lg-3" align="center"> <img alt="User Pic" src={config.rurl+"img/"+mimg} className="img-circle" /> </div>
                      
                      
                      <div className=" col-md-9 col-lg-9 "> 
                        <table className="table table-user-information">
                          <tbody>
                          {allsongs.map((s,i)=>(
                                <tr><td><div className="row"><img src={config.rurl+"img/"+s.cover} className="small-icon-img"></img>{s.name} <i className="flaticon-play-button"></i>
                            </div></td></tr>
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
 
export default Songdeatils;