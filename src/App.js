
import React, { useRef, useEffect, useState,useCallback } from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import './App.css';
import TopNav from './components/topNav';
import LowNav from './components/lowNav';
import FirstBody from './components/firstBody';
import MailEditor from './components/mailEditor';
import LowButtons from './components/lowButtons';
import SendPage from './components/sendPage';


function App() {
  const [activeDic, setActiveDic] = useState({activeSend:false, activeMail:false})
  let noneActive = !(activeDic.activeSend||activeDic.activeMail)

  if (activeDic.activeMail){
    setTimeout(() => {
      render(<div></div>, document.getElementsByClassName("midButtons")[0])
      render(<div></div>, document.getElementsByClassName("mailEditorButtons")[0])
      render(<div></div>, document.getElementsByClassName("MailEditor")[0])
      render(<MailEditor backgroundColor="Blue" ></MailEditor>, document.getElementsByClassName("MailEditor")[0])
      render(<LowButtons activeDic={activeDic} handelDic={setActiveDic}></LowButtons>, document.getElementsByClassName("mailEditorButtons")[0])
    },850)
  }
  if (activeDic.activeSend){
    setTimeout(() => {
      render(<div></div>, document.getElementsByClassName("midButtons")[0])
      render(<div></div>, document.getElementsByClassName("mailEditorButtons")[0])
      render(<div></div>, document.getElementsByClassName("MailEditor")[0])
      render(<SendPage></SendPage>, document.getElementsByClassName("midButtons")[0])
      render(<LowButtons activeDic={activeDic} handelDic={setActiveDic}></LowButtons>, document.getElementsByClassName("mailEditorButtons")[0])
    },850)
  }
  if (noneActive){
    console.log(noneActive)
    setTimeout(() => {
      // render(<div></div>, document.getElementsByClassName("top")[0])
      // render(<div></div>, document.getElementsByClassName("low")[0])
      render(<div></div>, document.getElementsByClassName("midButtons")[0])
      render(<div></div>, document.getElementsByClassName("mailEditorButtons")[0])
      render(<div></div>, document.getElementsByClassName("MailEditor")[0])
      // render(<TopNav activeDic={activeDic}></TopNav>, document.getElementsByClassName("top")[0])
      // render(<LowNav></LowNav>, document.getElementsByClassName("low")[0])
      render(<FirstBody handelDic={setActiveDic}  className="midButtons"></FirstBody>, document.getElementsByClassName("midButtons")[0])

    }
      ,100)
  }
  
  return (
      
      <div className="primaryWindow">
            <div className="top">
              <TopNav activeDic={activeDic}></TopNav>
            </div>
            <div className="low">
              <LowNav></LowNav>
            </div>
        <div className="midBodies">
            <div className="MailEditor">
            </div> 
            <div className="midButtons"> 
            </div>
        </div>
        <div className="mailEditorButtons">
        </div>
      </div>
  );
}

export default App;
