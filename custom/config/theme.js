// Basic Style Configurations
import { Dimensions, Platform, StatusBar } from 'react-native'
const dimension = Dimensions.get('window')

export default {
   xs: Platform.OS === 'ios' ? 6 : 5,
   sm: Platform.OS === 'ios' ? 10 : 9,
   md: Platform.OS === 'ios' ? 14 : 13, // normal
   lg: Platform.OS === 'ios' ? 18 : 17,
   xl: Platform.OS === 'ios' ? 22 : 21,

   textXs: Platform.OS === 'ios' ? 13 : 13,
   textSm: Platform.OS === 'ios' ? 15 : 15,
   textMd: Platform.OS === 'ios' ? 18 : 18,
   textLg: Platform.OS === 'ios' ? 23 : 23,
   textXl: Platform.OS === 'ios' ? 26 : 26,

   borderThickness: Platform.OS === 'ios' ? 1 : 1,
   borderColor: 'rgba(0,0,0,0.3)',

   buttonHeight: 50,
   buttonHeightSm: 30,

   buttonFontColor: 'white',
   buttonFontSize: Platform.OS === 'ios' ? 17 : 15,
   buttonFontWeight: '700',
   buttonPadding: 0,
   buttonRadius: 10,

   width: dimension.width,
   height: dimension.height - (StatusBar.currentHeight || 0),

   headerColor: 'blue',
   headerIconColor: 'white',
   headerTitleSize: Platform.OS === 'ios' ? 20 : 20,
   headerTitleColor: 'white',
   // headerTitleWeight: 'bold',
   headerHeight: Platform.OS === 'ios' ? 60 : 60,
   headerPaddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
   // statusBarHeight: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
   statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
   statusBarColor: 'rgba(0,0,0,0.3)',
   statusBarStyle: 'light-content',

   inputBorderThickness: Platform.OS === 'ios' ? 0.5 : 1,
   inputBorderColor: 'rgba(0,0,0,0.3)',
   inputMarginVertical: 5,
   inputPaddingVertical: 5,

//    ...require('config/theme').default,
}
