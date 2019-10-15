import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.5.10.137' })
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
