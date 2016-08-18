# wix node sdk [![Build Status](https://travis-ci.org/ranm8/wix.png?branch=master)](https://travis-ci.org/ranm8/wix)

NodeJS SDK for development of web apps to the [Wix.com](http://www.wix.com) App Market.

Currently this module provides easy interface for parsing the Wix signed instance.

## How to use

```javascript
var wix = require('wix');

// Pass the instance variable from the query string
var instance = wix.parse(instace);
``` 

## Installation

	$ npm install wix

## API Reference

###  secret(wixSecretKey: string) : string
Getter/setter for the Wix's secret key.

```javascript
wix.secret('my-secret-key'); // Sets the Wix secret key
var secret = wix.secret() // Getter for the secret property, returns undefined if secret key has never been set before
```

### parse(signedInstance: string) : object
Parses given Wix's signed instance string. Note, this will return an object if parsed successfully or null if given instance is invalid.
If secret key will not be set before parsing, an exception will be thrown.

```javascript
wix.secret('my-secret-key');

var parsedInstance = wix.parse(instance);
```

If parsed successfully, the parsed data will be returned.

```javascript
{ 
	instanceId: '130db01f-83b1-17c8-1803-c272178ssb45',
  	signDate: '2013-07-04T09:11:50.818-05:00',
  	uid: 'de6bdd4c-6090-427a-a9f7-d1222b659088',
  	permissions: 'OWNER',
  	ipAndPort: '334.54.142.23/37479',
  	vendorProductId: null,
	demoMode: false 
}
```
## Running Tests

To run the test suite first install the development dependencies:

	$ npm install	

Then run the tests:

	$ npm test

## License

The MIT License (MIT)

Copyright (c) 2013 Ran Mizrahi <<ranm@codeoasis.com>>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

