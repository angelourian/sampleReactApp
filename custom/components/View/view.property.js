import theme from '../../config/theme'

export default {
  align : a => ({
    alignSelf: a
  }),

  alignItems : a => ({
    alignItems: a
  }),

  borderColor : c => ({
    borderColor : theme[c] || c
  }),

  borderWidth : w => ({
    borderWidth : theme[w] || w
  }),

  borderVerticalColor : c => ({
    borderTopColor : theme[c] || c,
    borderBottomColor : theme[c] || c,
  }),

  borderVerticalWidth : w => ({
    borderTopWidth : theme[w] || w,
    borderBottomWidth : theme[w] || w
  }),

  borderHorizontalColor : c => ({
    borderLeftColor  : theme[c] || c,
    borderRightColor : theme[c] || c,
  }),

  borderHorizontalWidth : w => ({
    borderLeftWidth  : w,
    borderRightWidth : w,      
  }),

  borderRightColor : c => ({
    borderRightColor : theme[c] || c
  }),

  borderRightWidth : c => ({ 
    borderRightWidth : theme[c] || c 
  }),

  borderBottomColor : c => ({
    borderBottomColor : theme[c] || c
  }),

  borderBottomWidth : c => ({ 
    borderBottomWidth : theme[c] || c 
  }),

  borderTopColor : c => ({
    borderTopColor: theme[c] || c
  }),

  borderTopWidth : c => ({
    borderTopWidth: theme[c] || c
  }),

  flexDirection : f => ({
    flexDirection: f
  }),

  justifyContent : c => ({
    justifyContent: c
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
    padding : theme[p] || p
  }),

  paddingVertical : p => ({
    paddingVertical : theme[p] || p
  }),

  paddingHorizontal : p => ({
    paddingHorizontal : theme[p] || p
  }),

  paddingTop : p => ({
    paddingTop : theme[p] || p
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

  color  : c => ({
    backgroundColor : theme[c] || c
  }),

  elevation : e => ({
    elevation : e
  }),

  flex : f => ({
    flex : f
  }),

  width : w => ({
    width : w
  }),

  height : h => ({
    height : h
  }),

  radius : r => ({
    borderRadius : theme[r] || r
  }),

  borderTopLeftRadius : r => ({
    borderTopLeftRadius : theme[r] || r
  }),

  borderTopRightRadius : r => ({
    borderTopRightRadius : theme[r] || r
  }),

  borderBottomLeftRadius : r => ({
    borderBottomLeftRadius : theme[r] || r
  }),

  borderBottomRightRadius : r => ({
    borderBottomRightRadius : theme[r] || r
  }),

  size : s => ({
    width : s,
    height : s
  }),

  shadowColor: s => ({
    shadowColor: theme[s] || s
  }),

  shadowOpacity: s => ({
    shadowOpacity: theme[s] || s
  }),

  zIndex : z => ({
    zIndex : z
  }),
}