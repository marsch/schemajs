var SchemaType = function (type) {
    this.type = type;
};

SchemaType.prototype.addSubType = function (name, type) {
	this[name] = type;
};

module.exports = SchemaType;