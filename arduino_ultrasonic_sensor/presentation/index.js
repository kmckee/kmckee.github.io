// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  ultrasoundLine: require("../assets/ultrasound_line.png"),
  baby: require("../assets/baby_ultrasound.jpg"),
  bat: require("../assets/bat.jpg"),
  dolphin: require("../assets/dolphin.jpg"),
  submarine: require("../assets/submarine.jpg"),
  toothbrush: require("../assets/toothbrush.jpg"),
  sensorPingOperation: require("../assets/SensorPingOperation.png")
};

preloader(images);

const theme = createTheme({
  primary: "#3498db"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck
          transition={["zoom", "slide"]}
          transitionDuration={500}
          progress="pacman"
        >
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Ultrasonic Sensors
            </Heading>
            <Heading size={1} fit caps>
              with arduino
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.dolphin.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Echo location
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.bat.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Echo location
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.submarine.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
             <Heading size={1} caps fit textColor="primary">
               Even More
             </Heading>
           </Appear>
           <Appear fid="2">
             <Heading size={1} caps fit textColor="tertiary">
               Echo Location
             </Heading>
           </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.baby.replace("/", "")} bgDarken={0.1}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Echo location
              </Heading>
            </Appear>
            <Appear fid="1">
              <Heading size={1} caps textColor="tertiary">
                ???
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes="Our sensors are 40 kHz">
            <Image src={images.ultrasoundLine.replace("/", "")} margin="0px auto 40px" width="100%"/>
            <Appear fid="1">
               <Heading size={1} caps fit textColor="black">
                We will be using 40 kHz
               </Heading>
             </Appear>
             <Appear fid="1">
                <Heading size={4} caps textColor="tertiary">
                  (animals and chemistry)
                </Heading>
              </Appear>
          </Slide>
          {/* how does it work? */}
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} caps fit textColor="black" textFont="primary">
              How does it work?
            </Heading>
            <Appear fid="1">
              <Image src={images.sensorPingOperation.replace("/", "")} margin="0px auto 40px"/>
            </Appear>
            <Appear fid="2">
              <Text>
                Our sensor has 4 pins. Start and Echo pulse are separate
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" >
            <iframe src="http://www.w3schools.com" width="100%" height="600px"></iframe>
          </Slide>
          {/* visualization/game */}
          {/* The basic gist of it is:
                - Send a ping
                - Listen for a pong
                - Do some math  (jet picture)
                - Know the distance!
             */}
          {/* lets talk code */}
        </Deck>
      </Spectacle>
    );
  }
}
