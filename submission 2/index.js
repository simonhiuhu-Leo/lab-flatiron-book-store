require('datejs');

function combineUsers(...args) {

  const combinedObject = {
    users: []
  };

  args.forEach(arr => {
    combinedObject.users.push(...arr);
  });

  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};