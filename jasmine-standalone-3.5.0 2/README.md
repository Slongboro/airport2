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
- Added code for an airport function with an empty planes array, unit test now passing, feature tests failing.

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
