var foo = "bar";
var thisy = 'that';
var nom = 300;
// module.exports = {
//   city: "Denver",
//   rate: 45.22,
//   water_level: "68"
// }

// module.exports = function(num){
//   return num * nom;
// }

module.exports = {
  doThis: function(num){ return num * nom},
  doThat: function(num){ return num * nom * 2}
}
