# React Navigation

For navigation react-native
## Installation

Use terminal for install library

```bash

  
yarn add react-navigation
yarn add react-native-gesture-handler
yarn add react-native-reanimated
yarn add react-native-screens

```

## -- tambahan kode di android/app/src/main/java/com/reactnativenav/MainActivity.java


```
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

## --   android/app/build.gradle  di defendencies
```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha0
```

## untuk Pengguna Linux
```
cd android
chmod +x gradlew
gradle build --warning-mode=all
```

## Navigation Tabs
```

npm i react-navigation-material-bottom-tabs react-native-paper

mpm i react-native-reanimated

npm i react-native-tab-view 

npm i react-native-vector-icons



npm i react-navigation-tabs
  
 react-native link 

```


## License
[MIT](https://choosealicense.com/licenses/mit/)
