// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

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
  soundBarrier: require("../assets/sound_barrier.gif"),
  sensorPingOperation: require("../assets/SensorPingOperation.png"),
  code: require("../assets/code.gif"),
  math: require("../assets/math.jpg")
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
          <Slide transition={["zoom"]}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Ultrasonic Sensors
            </Heading>
            <Heading size={1} fit caps>
              with arduino
            </Heading>
          </Slide>
          <Slide bgImage={images.dolphin.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Echo location
              </Heading>
            </Appear>
          </Slide>
          <Slide bgImage={images.bat.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Echo location
              </Heading>
            </Appear>
          </Slide>
          <Slide bgImage={images.submarine.replace("/", "")} bgDarken={0.75}>
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
          <Slide bgImage={images.baby.replace("/", "")} bgDarken={0.1}>
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
          <Slide bgColor="black">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide notes="Our sensors are 40 kHz">
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
          <Slide>
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
          <Slide>
            <iframe src="http://kmckee.github.io/arduino_ultrasonic_sensor/game/index.html" width="100%" height="600px"></iframe>
          </Slide>
          <Slide>
             <Heading size={1} caps fit textColor="black">
               How fast is sound?
             </Heading>
            <Appear fid="1">
              <Image src={images.soundBarrier.replace("/", "")} margin="0px auto 40px" width="100%"/>
            </Appear>
            <Appear fid="2">
              <Heading caps fit>
                768 mph == 1,236 km/h == 343.2 meters/sec == pretty fast
              </Heading>
            </Appear>
          </Slide>
          <Slide>
             <Heading caps fit>
                Now for some
             </Heading>
             <Image src={images.math.replace("/", "")} margin="0px auto 40px" />
          </Slide>
          <Slide notes="Pace of sound is measured in microseconds per centimeter" textFont="Comic Sans">
              <Heading fit>
                D = (Δt/2) / Pace of sound
              </Heading>
              <Appear fid="2">
                <Heading size={2} margin="20px 0">
                  D = (Δt/2) / 29.1μs/cm
                </Heading>
              </Appear>
              <Appear fid="3" textColor="white">
                <Heading size={2} fit margin="60px 0">
                  WRITE THAT DOWN!
                </Heading>
              </Appear>
          </Slide>
          <Slide>
            <Appear fid="1">
              <Heading fit>
                Example:  Heard echo after 3 seconds.
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} textColor="black">
                D = (Δt/2) / 29.1μs/cm
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading fit textColor="black" margin="20px 0">
                D = (3,000,000 / 2) / 29.1μs/cm
              </Heading>
            </Appear>
            <Appear fid="4">
              <Heading fit textColor="black">
                D = 51546.39 cm == 515.46 meters
              </Heading>
            </Appear>
          </Slide>
          <Slide bgColor="black">
             <Heading caps fit>
                Now for some
             </Heading>
             <Image src={images.code.replace("/", "")} margin="0px auto 40px" width="80%"/>
          </Slide>
          <Slide>
            <CodePane
              lang="clike"
              source={require("raw!../assets/code.example")}
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
