import { Dimensions, Platform } from 'react-native'

export const calcHeight = x => PixelRatio.roundToNearestPixel((deviceHeight * x) / 100)
export const calcWidth = x => PixelRatio.roundToNearestPixel((deviceWidth * x) / 100)
export const dimen = (container) => {
  return Dimensions.get(`${container}`)
}
export const isIphoneX = () => {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
  )
}

export const debounce = function (fn, d) {
  console.log(fn);
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,arguments);
    }, d);
  }
}