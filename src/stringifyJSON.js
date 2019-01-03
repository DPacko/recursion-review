// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
  // our output supposedly looked like an JSON obj that is stringified
  /*
  {
    "string":"string",
    "number":"number",
    "objecjt": {
      "key":"value"
    },
    "array":["value"]
  }
  */

var stringifyJSON = function(subj) {
   // check if obj is function, undefined, null, symbols
   // if true, return undefined
  if(typeof subj === 'function' || typeof subj === undefined || typeof subj === 'symbol'){
    return undefine;
  }
  if(subj === null ){
    return 'null';
  }
  // our accepted values boolean string and number
  // and it also accepts objects and array but still stringify the values
  // if (typeof subj === 'boolean' || typeof subj === 'string') {
  //   return String(subj);
  // }
  // else if(typeof subj === 'number') {
  //   return ''+subj;
  // }

  switch (typeof subj) {
    case 'boolean' :
    case 'number' : return String(subj)
    case 'string' : return '"' + subj + '"'
    default : undefined
  }

  if (Array.isArray(subj)) {
    var result = [];
    for(var i = 0; i < subj.length; i++){
      if(typeof subj[i] === 'function' || subj[i] === null){
        continue;
      }
      result.push(stringifyJSON(subj[i]));
    }
    return '[' + result.join(',') + ']';
  }

  else if(typeof subj === 'object'){
    var resultingObj = [];
    for(var key in subj) {
      // console.log(typeof subj[key])
      if(typeof subj[key] === 'function'){
        continue;
      }
      resultingObj.push(stringifyJSON(key) + ':' + stringifyJSON(subj[key]));
    }
    return '{' + resultingObj.join(',') + '}';
  }

};
