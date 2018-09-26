import theme from 'theme'

/**
 * Component properties for Text
 */
export default {

   /**
    * Set font size
    */
   size : s => ({
      fontSize : theme[s] || s
   }),

   backgroundColor : c => ({
      backgroundColor : theme[c] || c
   }),

   /**
    * Set font color
    */
   color : c => ({
      color : theme[c] || c
   }),

   lineHeight: n => ({
      lineHeight: theme[n] || n
   }),

   margin : p => ({
      margin : p
   }),

   marginVertical : p => ({
      marginVertical : p
   }),

   marginHorizontal : p => ({
      marginHorizontal : p
   }),

   marginTop : p => ({
      marginTop : p
   }),

   marginBottom : p => ({
      marginBottom : p
   }),

   marginLeft : p => ({
      marginLeft : p
   }),

   marginRight : p => ({
      marginRight : p
   }),

   padding : p => ({
      padding : p
   }),

   paddingVertical : p => ({
      paddingVertical : p
   }),

   paddingHorizontal : p => ({
      paddingHorizontal : p
   }),

   paddingTop : p => ({
      paddingTop : p
   }),

   paddingBottom : p => ({
      paddingBottom : p
   }),

   paddingLeft : p => ({
      paddingLeft : p
   }),

   paddingRight : p => ({
      paddingRight : p
   }),

   radius : r => ({
      borderRadius: r
   }),

   width : w => ({
      width: w
   }),

   align: c => ({
      textAlign: c
   }),

   textDecoration: c => ({
      textDecorationLine: c
   })
}
