//returns duplicate values from array
function find_duplicate_in_array(arra1) {
  var object = {};
  var result = [];
  arra1.forEach(function (item) {
    if(!object[item])
        object[item] = 0;
      object[item] += 1;
  })
  for (var prop in object) {
     if(object[prop] >= 2) {
         result.push(prop);
     }
  }
  return result;
}

	//sleep function to slow down js loop
	const sleep = (time) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};