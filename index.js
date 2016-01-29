'use strict';

function MemMap() {

}

MemMap.prototype.has = function (key) {
	return this[key] !== undefined;
};

MemMap.prototype.get = function (key) {
	return this[key];
};

MemMap.prototype.set = function (key, value) {
	this[key] = value;

	return this;
};

module.exports = global.Map || MemMap;
