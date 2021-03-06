/**
* File.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
		filename: {
			type: 'STRING',
			required: true
		},
		size: {
			type: 'STRING',
			required: true
		},
		type: {
			type: 'STRING',
			required: true
		},
		owner: {
			type: 'INT',
			required: true
		},

		isPhoto: function() {
			return /image\/png|image\/gif|image\/jpeg/.test(this.type);
		},

		getExtension: function() {
			return this.filename.match(/\.([A-z0-9]*)$/)[1];
		}
  }
};

