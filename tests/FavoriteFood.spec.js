
describe('Favorite Food Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should filter favorite food correctly', function(){
    var mockedList =[{
      name: "Ashley",
      favoriteFood: "Pizza"
    },{
      name: "Lee",
      favoriteFood: "Fish"
    },{
      name: "Avi",
      favoriteFood: "Burgers"
    }];

    var results = $filter('favoriteFood')(mockedList, 'Fish');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe("Lee");
  })
  
});