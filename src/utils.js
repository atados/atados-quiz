export function findBiggestValuesInObject(obj, quantity=2) {
  const biggests = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let nr = +obj[key]

      if (biggests.length !== quantity) {
        biggests.push(key)
      } else {
        let replace_key = null;
        for (let i = 0; i < biggests.length; i++) {
          let n = +obj[biggests[i]];
          if (nr > n) {
            if (replace_key !== null) {
              if (+obj[biggests[replace_key]] > n) {
                replace_key = i
              }
            } else {
              replace_key = i;
            }
          }
        }
        if (replace_key !== null) biggests[replace_key] = key
      }
    }
  }

  return biggests
}

export function arrayToObject(arr, key) {
  let obj = {}
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i][key]] = arr[i]
  }
  return obj
}

export function objectToArray(obj) {
  let arr = []
  for ( let key in obj ) {
    if (obj.hasOwnProperty(key)) {
      arr.push(obj[key])
    }
  }
}
