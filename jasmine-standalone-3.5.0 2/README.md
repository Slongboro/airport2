- Set up github repo and Jasmine
- run Jasmine tests by opeining a browser and command O, 
then find the required project and open the specRunner.html file that would have been downloaded with the Jasmine files.
- Added all new files (spec and src), as made, to the spec runner script.

As an air traffic controller
To get passengers to a destination
I want to instruct a plane to land at
an airport and confirm that it has landed

- Added a feature test and a unit test to test the plane had landed.
- Added the Plane function code to an src file to enable the unit test to pass, ensuring a plane can land.
- Added code for an airport function with an empty planes array.
- Changed the plane unit test, added a double so that plane recognises airport and the method clearForlanding.
- Added an aiport method to Plane to enable the plane unit test to pass
- Added a test to airport to test the plane being able to land, added a double for plane
- Added code to airport to add the plane that has landed to the hangar, making the unit test pass that was expecting to see the plane that had landed.
- Fixed a but that was stopping the feature test passing.


As an air traffic controller
To get passengers to a destination
I want to instruct a plane to take off from
an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
