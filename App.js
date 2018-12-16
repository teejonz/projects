import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';
//images
import yellow from'./images/yellow.png';
import orange from './images/orange.png';
import purple from './images/purple.png';
import red from './images/red.png'
import drums from './images/drum2.png';
import bagpipes from './images/bagpipes.png';
import piano from './images/piano.png';
import guitar from './images/guitar.png';
//sounds
import bagpipe1 from './audio/bagpipe1.mp3';
import bagpipe2 from './audio/bagpipe2.mp3';
import bagpipe3 from './audio/bagpipe3.mp3';
import bagpipe4 from './audio/bagpipe4.mp3';
import bagpipe5 from './audio/bagpipe5.mp3';
import bagpipe6 from './audio/bagpipe6.mp3';
import bagpipe7 from './audio/bagpipe7.mp3';
//import bagpipe8 from './audio/bagpipe8.mp3';
import drum1 from './audio/drum1.mp3';
import drum2 from './audio/drum2.mp3';
import drum3 from './audio/drum3.mp3';
import drum4 from './audio/drum4.mp3';
import drum5 from './audio/drum5.mp3';
import drum6 from './audio/drum6.mp3';
import drum7 from './audio/drum7.mp3';
//import drum8 from './audio/drum8.mp3';
import guitar1 from './audio/guitar1.mp3';
import guitar2 from './audio/guitar2.mp3';
import guitar3 from './audio/guitar3.mp3';
import guitar4 from './audio/guitar4.mp3';
import guitar5 from './audio/guitar5.mp3';
import guitar6 from './audio/guitar6.mp3';
import guitar7 from './audio/guitar7.mp3';
//import guitar8 from './audio/guitar8.mp3';
import piano1 from './audio/piano1.mp3';
import piano2 from './audio/piano2.mp3';
import piano3 from './audio/piano3.mp3';
import piano4 from './audio/piano4.mp3';
import piano5 from './audio/piano5.mp3';
import piano6 from './audio/piano6.mp3';
import piano7 from './audio/piano7.mp3';
//import piano8 from './audio/piano8.mp3';

var files = [guitar1, guitar2, guitar3, guitar4, guitar5, guitar6, guitar7];
var index = 0;

var aID = document.getElementById("a");
var bID = document.getElementById("b");
var cID = document.getElementById("c");
var dID = document.getElementById("d");
var eID = document.getElementById("e");
var fID = document.getElementById("f");
var gID = document.getElementById("g");

var button1 = [drum1, bagpipe1, piano1, guitar1];
var button2 = [drum2, bagpipe2, piano2, guitar2];
var button3 = [drum3, bagpipe3, piano3, guitar3];
var button4 = [drum4, bagpipe4, piano4, guitar4];
var button5 = [drum5, bagpipe5, piano5, guitar5];
var button6 = [drum6, bagpipe6, piano6, guitar6];
var button7 = [drum7, bagpipe7, piano7, guitar7];
//var button8 = [drum8, bagpipe8, piano8, guitar8];

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      clicks: 0,
      show: true,
      controllersrc: drums,
      colorsrc: yellow,
      soundsrc1: drum1,
      soundsrc2: drum2,
      soundsrc3: drum3,
      soundsrc4: drum4,
      soundsrc5: drum5,
      soundsrc6: drum6,
      soundsrc7: drum7,
      playStatus1: Sound.status.PAUSED,
      playStatus2: Sound.status.PAUSED,
      playStatus3: Sound.status.PAUSED,
      playStatus4: Sound.status.PAUSED,
      playStatus5: Sound.status.PAUSED,
      playStatus6: Sound.status.PAUSED,
      playStatus7: Sound.status.PAUSED
    };
    //this.onClick = this.onClick.bind(this);
  }

  ChangeInstrument = () => {
    if(this.state.colorsrc===yellow){
      this.setState({controllersrc: bagpipes});
      this.setState({colorsrc: orange});
     
      this.setState({soundsrc1: button1[1]});
      this.setState({soundsrc2: button2[1]});
      this.setState({soundsrc3: button3[1]});
      this.setState({soundsrc4: button4[1]});
      this.setState({soundsrc5: button5[1]});
      this.setState({soundsrc6: button6[1]});
      this.setState({soundsrc7: button7[1]});
    }
    if(this.state.colorsrc===orange){
      this.setState({controllersrc: piano});
      this.setState({colorsrc: purple});
      
      this.setState({soundsrc1: button1[2]});
      this.setState({soundsrc2: button2[2]});
      this.setState({soundsrc3: button3[2]});
      this.setState({soundsrc4: button4[2]});
      this.setState({soundsrc5: button5[2]});
      this.setState({soundsrc6: button6[2]});
      this.setState({soundsrc7: button7[2]});
    }
    if(this.state.colorsrc===purple){
      this.setState({controllersrc: guitar});
      this.setState({colorsrc: red});
      
      this.setState({soundsrc1: button1[3]});
      this.setState({soundsrc2: button2[3]});
      this.setState({soundsrc3: button3[3]});
      this.setState({soundsrc4: button4[3]});
      this.setState({soundsrc5: button5[3]});
      this.setState({soundsrc6: button6[3]});
      this.setState({soundsrc7: button7[3]});
    }
    if(this.state.colorsrc===red){
      this.setState({controllersrc: drums});
      this.setState({colorsrc: yellow});
      
      this.setState({soundsrc1: button1[0]});
      this.setState({soundsrc2: button2[0]});
      this.setState({soundsrc3: button3[0]});
      this.setState({soundsrc4: button4[0]});
      this.setState({soundsrc5: button5[0]});
      this.setState({soundsrc6: button6[0]});
      this.setState({soundsrc7: button7[0]});
    }
  }

  playSound1 = () => {
    console.log("playing");
      this.setState({
        //playStatus: Sound.status.STOPPED,
        playStatus1: Sound.status.PLAYING,
        playStatus2: Sound.status.STOPPED,
        playStatus3: Sound.status.STOPPED,
        playStatus4: Sound.status.STOPPED,
        playStatus5: Sound.status.STOPPED,
        playStatus6: Sound.status.STOPPED,
        playStatus7: Sound.status.STOPPED
      });
  }

  playSound2 = () => {
    console.log("playing");
      this.setState({
        //playStatus: Sound.status.STOPPED,
        playStatus2: Sound.status.PLAYING,
        playStatus1: Sound.status.STOPPED,
        playStatus3: Sound.status.STOPPED,
        playStatus4: Sound.status.STOPPED,
        playStatus5: Sound.status.STOPPED,
        playStatus6: Sound.status.STOPPED,
        playStatus7: Sound.status.STOPPED
      });
  }

    playSound3 = () => {
    console.log("playing");
      this.setState({
        //playStatus: Sound.status.STOPPED,
        playStatus3: Sound.status.PLAYING,
        playStatus1: Sound.status.STOPPED,
        playStatus2: Sound.status.STOPPED,
        playStatus4: Sound.status.STOPPED,
        playStatus5: Sound.status.STOPPED,
        playStatus6: Sound.status.STOPPED,
        playStatus7: Sound.status.STOPPED
      });
  }

    playSound4 = () => {
    console.log("playing");
      this.setState({
        //playStatus: Sound.status.STOPPED,
        playStatus4: Sound.status.PLAYING,
        playStatus1: Sound.status.STOPPED,
        playStatus2: Sound.status.STOPPED,
        playStatus3: Sound.status.STOPPED,
        playStatus5: Sound.status.STOPPED,
        playStatus6: Sound.status.STOPPED,
        playStatus7: Sound.status.STOPPED
      });
  }

    playSound5 = () => {
    console.log("playing");
      this.setState({
        //playStatus: Sound.status.STOPPED,
        playStatus5: Sound.status.PLAYING,
        playStatus1: Sound.status.STOPPED,
        playStatus2: Sound.status.STOPPED,
        playStatus3: Sound.status.STOPPED,
        playStatus4: Sound.status.STOPPED,
        playStatus6: Sound.status.STOPPED,
        playStatus7: Sound.status.STOPPED
      });
  }

    playSound6 = () => {
    console.log("playing");
      this.setState({
        //playStatus: Sound.status.STOPPED,
        playStatus6: Sound.status.PLAYING,
        playStatus1: Sound.status.STOPPED,
        playStatus2: Sound.status.STOPPED,
        playStatus3: Sound.status.STOPPED,
        playStatus4: Sound.status.STOPPED,
        playStatus5: Sound.status.STOPPED,
        playStatus7: Sound.status.STOPPED
      });
  }

    playSound7 = () => {
    console.log("playing");
      this.setState({
        //playStatus: Sound.status.STOPPED,
        playStatus7: Sound.status.PLAYING,
        playStatus1: Sound.status.STOPPED,
        playStatus2: Sound.status.STOPPED,
        playStatus3: Sound.status.STOPPED,
        playStatus4: Sound.status.STOPPED,
        playStatus5: Sound.status.STOPPED,
        playStatus6: Sound.status.STOPPED
      });
  }

  render() {

    return (
      <div className="App">
        <h1 id="title">LET'S GET SYNTHY !</h1>
        <div id="buttons">
          <img onClick={this.ChangeInstrument} src={this.state.controllersrc}></img>
          
          <button onClick={this.playSound1}> 
            <Sound
                url = {this.state.soundsrc1}
                playStatus = {this.state.playStatus1}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}/>
            <img id="a" src={this.state.colorsrc}></img>
          </button>
          
          <button onClick={this.playSound2}>
            <Sound
                url = {this.state.soundsrc2}
                playStatus = {this.state.playStatus2}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}/>
            <img id="b" src={this.state.colorsrc}></img>
          </button>
          
          <button onClick={this.playSound3}>
            <Sound
                url = {this.state.soundsrc3}
                playStatus = {this.state.playStatus3}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}/>
            <img id="c" src={this.state.colorsrc}></img>
          </button>
          
          <button onClick={this.playSound4}>
            <Sound
                url = {this.state.soundsrc4}
                playStatus = {this.state.playStatus4}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}/>
            <img id="d" src={this.state.colorsrc}></img>
          </button>
          
          <button onClick={this.playSound5}>
            <Sound
                url = {this.state.soundsrc5}
                playStatus = {this.state.playStatus5}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}/>
            <img id="e" src={this.state.colorsrc}></img>
          </button>

          <button onClick={this.playSound6}>
            <Sound
                url = {this.state.soundsrc6}
                playStatus = {this.state.playStatus6}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}/>
            <img id="f" src={this.state.colorsrc}></img>
          </button>

          <button onClick={this.playSound7}>
            <Sound
                url = {this.state.soundsrc7}
                playStatus = {this.state.playStatus7}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}/>
            <img id="g" src={this.state.colorsrc}>
          </img></button>

        </div>
      </div>
    );
  }
}

export default App;
