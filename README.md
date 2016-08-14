# availdom	

[![NPM](https://nodei.co/npm/availdom.png?mini=true)](https://nodei.co/npm/availdom/)

npm package to check availabilty of domain name

## Installation
Install using npm:
```sh
npm install availdom
```

## Usage
Require library
```javascript
var avail= require('availdom').init();
```
Function
```javascript
var checkDomainName = avail.check('npmjs.org',function(err,body){
if(!err)
console.log(body);
else
console.log(err);
});
```
Response
```javascript
```