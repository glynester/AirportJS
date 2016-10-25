'use strict';

describe('plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport =jasmine.createSpyObj('airport',['clearForLanding'])
  });
  it('can land at an airport', function(){
    plane.land(airport);
    expect(plane.land).not.toBeUndefined()
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});
