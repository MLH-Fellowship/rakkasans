// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Comment from './Comment';

// const Thread = ({ comments, post }) => {
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       marginHorizontal: 20,
//     },
//   });
//   const renderParents = (entries) => {
//     const parents = [];
//     for (const postId in entries) {
//       parents.push(
//         <Comment
//           key={postId}
//           comment={entries[postId].content}
//           post={post}
//         >
//           entries[postId].children
//         </Comment>,
//       );
//     }

//     return parents;
//   };

//   return (
//     <View style={styles.container}>
//       {renderParents(comments)}
//     </View>
//   );
// };

// export default Thread;
