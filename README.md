## Wemap QHA SDK integration

### Installation

#### install react native dependencies

```
yarn add @react-native-community/geolocation react-native-draw react-native-gesture-handler react-native-localize react-native-reanimated react-native-sound react-native-screens react-native-gesture-handler
react-native-linear-gradient react-native-text lottie-react-native lottie-ios react-native-webview react-native-camera react-native-restart
```

#### if needed, add JS dependencies

`yarn add babel-plugin-module-resolver`  
`yarn add styled-components`  

see `babel.config.js`


#### assets (images)

copy assets folder in  `./assets/images` or update path of `qha-assets` in `babel.config.js`


##### iOS additionnal steps:

- 1. install native dependencies:

```
cd ios/
pod install
```

- 2. open Xcode and create Swift bridge header (needed to run lottie-ios)

open: `ios/qhaSampleApp.xcworkspace`

`new File`  
`Swift File`  
`create` / `create Bridging Header`  

- 3. install fonts

add fonts folder (eg: `./assets/fonts`)  
run `react-native link`  

(or change code in `package.json`:
    ```
    "rnpm": {
        "assets": [
          "./fonts"
        ]
      }
    ```
)

- 4. install audio files

open Xcode
`add Files to "My Project"``
(copy items if needed)
add files from audio folder

- 5. add descriptions in `info.plist`

eg:
```
<key>NSCameraUsageDescription</key>
<string>L'application a besoin de votre permission pour utiliser la caméra du téléphone et vous permettre de scanner les objectifs des missions de l'aventure</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>L'application a besoin de la localisation pour vous offrir une expérience immersive de réalité augmentée</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>L'application a besoin de la localisation pour vous offrir une expérience immersive de réalité augmentée</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>L'application a besoin de la localisation pour vous offrir une expérience immersive de réalité augmentée</string>
<key>NSMicrophoneUsageDescription</key>
<string>L'application a besoin de votre permission pour utiliser la caméra du téléphone et vous permettre de scanner les objectifs des missions de l'aventure</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>L'application a besoin de votre permission pour utiliser la caméra du téléphone et vous permettre de scanner les objectifs des missions de l'aventure</string>
```

##### android additionnal steps:

- 1. install fonts

add fonts to `android/app/src/main/assets/fonts`

- 2. install audio files

copy files to `android/app/src/main/res/raw`


### Using SDK


#### import `QuelleHistoireAventures`

```
import QuelleHistoireAventures from '@wemap/quelle-histoire-aventures-core';
import { theme } from '@wemap/quelle-histoire-aventures-material';
import { gameDataSet } from './src/Constants';
```

#### use `QuelleHistoireAventures`

QuelleHistoireAventures take some props:
  - `gameDataSet`: use default for test or see `src/Constants` for description of game parameters.
  - `theme`: use our theme from `@wemap/quelle-histoire-aventures-material`
  - `onGameEnd`: a callback function called after game ended
  - `debug`: a boolean to activate/deactivate geolocation debug mode (allow finishing mission without need to be geolocated on right place)

```
<QuelleHistoireAventures
    gameDataSet={gameDataSet}
    theme={theme}
    onGameEnd={MyCallbackFunction}
    debug
/>
```
