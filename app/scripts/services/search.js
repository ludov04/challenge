'use strict';

/**
 * @ngdoc service
 * @name challengeApp.search
 * @description
 * # search
 * Provider in the challengeApp.
 */
angular.module('challengeApp')
  .provider('search', function () {

    // Private variables
    var fuse = new Fuse([], { keys: ['title', 'tags.name', 'description'], threshold: 0.3 } ); //default

    // Private constructor
    function Search() {

      this.init = function (data) {
        fuse.list = data;
      };

      this.search = function(string) {
        return fuse.search(string);
      };

      // Public API for configuration
      this.setTreshold = function (x) {
        fuse.options.threshold = x;
      };

      this.setOption = function (optionName, option) {
        fuse.options[optionName] = option;
      };

      this.setKeys = function(keys) {
        fuse.options.keys = keys;
      };

    }

    
    // Method for instantiating
    this.$get = function () {
      return new Search();
    };
  });
