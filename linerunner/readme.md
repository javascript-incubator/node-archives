# LineRunner v1.0.0



- [Core](#core)
	- [Main LineRunner](#main-linerunner)
	- [Legacy Linerunner](#legacy-linerunner)
	


# Core

## Main LineRunner

<p>Takes Lat, Lng of the location and returns the FeatureCollection(GeoJSON) of the country of the location. The RDP flag tells whether to simplify the FeatureCollection with Ramer-Douglas-Peuckar or not.</p>

	POST /core


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| lat			| String			|  <p>Latitude of location.</p>							|
| lng			| String			|  <p>Longitude of location.</p>							|
| rdp			| Boolean			|  <p>Flag to apply RDP or not.</p>							|

## Legacy Linerunner

<p>Takes url of the remote Geojson and returns it after applying Ramer-Douglas-Peuckar on it.</p>

	GET /geoJsonUrl/:url/tolerance/:tol


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| url			| String			|  <p>Url of the Remote Geojson. Can be used to simplify any geojson</p>							|
| tol			| Number			|  <p>Tolerance of the Simplification, much to less. 1 is less simplified</p>							|


