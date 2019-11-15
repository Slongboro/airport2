'use strict'

describe('Feature Test:', function() {

    var plane;
    var airport;

    beforeEach(function() {
        plane = new Plane();
        airport = new airport()
    });

    it('planes can be instructed to land at the airport', function() {
        plane.land(airport);
        expect(airport.planes()).toContain(plane);
    });
});