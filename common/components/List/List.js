import React from 'react'
import { FlatList } from 'react-native'

export default class extends React.Component {
   render() {
      const {
         element,
         initialRender,
         items,
         footer,
         column,
         ...props
      } = this.props
      return (
         <FlatList
            ref = {element}
            renderItem = {this.renderItem}
            data = {items}
            initialNumToRender = {initialRender}
            keyExtractor = {this.extractKey}
            ListFooterComponent = {footer}
            keyboardShouldPersistTaps = "handled"
            onEndReachedThreshold = {10}
            numColumns = {column}
            {...props}
         />
      )
   }

   renderItem = ({ item, index }) => this.props.children(item, index)

   extractKey(element) {
      return element.id
   }
}
