# Rakkasans
React Native app for the 3rd Brigade (Rakkasans) of the 101st Airborne Division


## Set up Development Environment:
Watch [this video](https://youtu.be/0-S5a0eXPoc?t=380) for more information and steps for setting up your development environment and simulators.


Install [expo-cli](https://docs.expo.io/workflow/expo-cli/). The application is built on the [Expo](https://expo.io/) framework. The expo-cli app is a command line tool that will allow you to use a variety of expo tools during development, testing, and publishing.

```
npm install -g expo-cli
```

You will also need to install the [Expo Client App](https://expo.io/tools#client) on your personal mobile device if you would like to run and test the app. The app is available for Andriod & IOS.

#### Install IOS & Android simulators
##### IOS:
Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12).


###### Android:
Install [Android Studio](https://developer.android.com/studio).


#### Now you're ready to clone the repo:
Clone the repo.


Install dependencies:

```
=> npm i
```

#### Clone the [Rakkasans API APP](https://github.com/MLH-Fellowship/rakkasansApi).
Follow README instructions to setup the Rakkasans API App.

**The Rakkasans API App must be running for the Rakkasans App to work!**


#### How to run
To get everything running, run:

```
=> npm start
```


## Testing
Testing is done using [Enzyme](https://enzymejs.github.io/enzyme/) & [Jest](https://jestjs.io/).

To run tests, run:

```
=> npm test
```

This command will also provide you with the total test coverage of the app.

Most tests are [Snapshot Tests](https://jestjs.io/docs/en/snapshot-testing#:~:text=Snapshot%20tests%20are%20a%20very,file%20stored%20alongside%20the%20test.).

```
A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.
```
If you make a UI change, run `npm test -- -u` to create a new snapshot reference that will include your new changes.
