import { Dimensions, Platform } from 'react-native'

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const calcHeight = x => PixelRatio.roundToNearestPixel((deviceHeight * x) / 100)
export const calcWidth = x => PixelRatio.roundToNearestPixel((deviceWidth * x) / 100)
export const isIphoneX = () => {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
    (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
  )
}