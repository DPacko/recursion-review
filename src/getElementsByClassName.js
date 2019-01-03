// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // create a list
  var result = []

  // create a function will use recurssion on
  function dawn (node) {
      // we will know what is the node
      // check if the node has the class name
      if (node.classList.contains(className)) {
        // if it does has the class add it to the list
        // take a list push
        result.push(node)
      }
      // loop through the node children
      for (let i = 0; i < node.children.length; i++) {
        // we are going to invoke it , extra step.. overall

        dawn(node.children[i])
      }
    }
  dawn(document.body);
  // return a list
  return result;
};

