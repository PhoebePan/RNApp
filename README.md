### YueLoa Chat App

修改紀錄 :

| 更新時間 | 內容 | 編輯者 |
| :-: | :-: | :-: |
| 2017-11-02 | V1.0 | Phoebe Pan |

---

### 環境設定 (Windows)
__python__ - v2.7  
__NPM__   - v4.6.1  
__Node__  - v6.11.4  
__NVM__   - v1.1.6  
__choco__ - v0.10.8 (only windows)  
__java__  - v1.8.0_151  
__Android SDK__  
__Android Studio__  
__Powershell__ (windows native)  
__GIT__  
__VS Code__ (Editor)  
__ESLINT__ - v4.10.0


---
### 資料夾結構
```
/uaaApp
├── /android/             # android native code, you can open in android studio
├── /docs/                # project rules
├── /ios/                 # ios native code, you can open in xcode
├── /node_modules/        # 3rd-party libraries and utilities
├── /screens/             # screens of App
├── .babelrc              # babel Config
├── .eslintrc             # eslint Config
├── .gitignore            # gitignore Config
├── App.js                # Init App
├── App.json              # App description
├── index.js              # Point of entry
└── package.json          # The list of 3rd party libraries and utilities
```

---

### Git Branch

主線 master

功能 feature (依功能命名)

文件 docs

---

#### How to Run uaaApp?  

```
$ git clone git@git.yuelaobank.com:dev/uaaApp.git
$ cd uaaApp  
$ npm install  
$ react-native run-android
```

*****
If you want to create a new App by yourself.  
You can try the following step.

For Starter:
- init a new react-native App by using [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html)

```
$ npm install -g react-native-cli
```

- create a new App

```
$ react-native init myApp
```

- run app on your Android Simulator

```
$ cd myApp
$ react-native run-android
```

- install [react-navigation](https://reactnavigation.org/docs/intro/quick-start)

```
$ npm install --save react-navigation
```

- install [react-native-router-flux](https://www.npmjs.com/package/react-native-router-flux)

```
$ npm install --save react-native-router-flux
```

- Happy Coding with React Native!!! :whale: :whale: :whale:


*****


`!Attention`
If you have red screen with `evaluating '(typeof Symbol === 'function' ? ....`
[issue](https://stackoverflow.com/questions/45675766/for-is-not-a-function-evaluating-typeof-symbol-function-symbol-for)
```
$ npm install --save-dev babel-polyfill
```

and then import following in your App
```
import "babel-polyfill";
```