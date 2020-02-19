// Welcome to the main entry point of the app.
//
// In this file, we'll be kicking off our app or storybook.

import "./i18n"
import React, { useState, useEffect } from "react"
import { AppRegistry, YellowBox } from "react-native"
import { StatefulNavigator, BackButtonHandler, exitRoutes } from "./navigation"
import { RootStore, RootStoreProvider, setupRootStore } from "./models/root-store"

import { enableScreens } from "react-native-screens"

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
enableScreens()

export const App: React.FunctionComponent<{}> = () => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined) // prettier-ignore
  useEffect(() => {
    setupRootStore().then(setRootStore)
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  //
  // This step should be completely covered over by the splash screen though.
  //
  // You're welcome to swap in your own component to render if your boot up
  // sequence is too slow though.
  if (!rootStore) {
    return null
  }

  // otherwise, we're ready to render the app
  return (
    <RootStoreProvider value={rootStore}>
        <StatefulNavigator />
    </RootStoreProvider>
  )
}

/**
 * This needs to match what's found in your app_delegate.m and MainActivity.java.
 */
const APP_NAME = "myProjectApps"

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = false

let RootComponent = App
if (__DEV__ && SHOW_STORYBOOK) {
  // Only include Storybook if we're in dev mode
  const { StorybookUIRoot } = require("../storybook")
  RootComponent = StorybookUIRoot
}
AppRegistry.registerComponent(APP_NAME, () => RootComponent)
