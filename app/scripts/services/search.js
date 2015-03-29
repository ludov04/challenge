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

    var defaultOptions = {
       keys: ['title', 'tags.name', 'description'], 
       threshold: 0.3 
    }
    // Private variables
    var fuse = new Fuse([],  angular.copy(defaultOptions)); //default

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
        if (Array.isArray(keys)) { 
          fuse.options.keys = keys;
        }
        else if (typeof keys === 'string') {
          fuse.options.keys = [keys];
        }
        else throw "parameter must be an array of string or a string";
          
      };

      this.setDefaultKeys = function() {
        fuse.options.keys = defaultOptions.keys;
        console.log(fuse.options);
      }

    }

    
    // Method for instantiating
    this.$get = function () {
      return new Search();
    };
  });
