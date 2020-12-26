import React, {useState} from 'react'
import './App.css';
import one from './assets/1.mp3';
import two from './assets/2.mp3';
import three from './assets/3.mp3';
import four from './assets/4.mp3';
import five from './assets/5.mp3';
import six from './assets/6.mp3';
import seven from './assets/7.mp3';
import eight from './assets/8.mp3';
import nine from './assets/9.mp3';
import ten from './assets/10.mp3';


import {useHotkeys} from 'react-hotkeys-hook';
import useSound from 'use-sound';
const App = props => {
  let [play] = useSound(one);
  let [play1] = useSound(two);
  let [play2] = useSound(three);
  let [play3] = useSound(four);
  let [play4] = useSound(five);
  let [play5] = useSound(six);
  let [play6] = useSound(seven);
  let [play7] = useSound(eight);
  let [play8] = useSound(nine);
  let [play9] = useSound(ten);
  useHotkeys('1', play);
  useHotkeys('2', play1);
  useHotkeys('3', play2);
  useHotkeys('4', play3);
  useHotkeys('5', play4);
  useHotkeys('6', play5);
  useHotkeys('7', play6);
  useHotkeys('8', play7);
  useHotkeys('9', play8);
  useHotkeys('10', play9);
  return (
    <div className="App">
      
     
    </div>
  );
}

export default App;
