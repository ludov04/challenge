'use strict';

describe('Service: search', function () {

  // load the service's module
  beforeEach(module('challengeApp'));

  // instantiate service
  var search;
  var data = [
    {
      title: 'hello',
      description: 'testing',
      tags: [
        {
          name:'solar'
        },
        {
          name:'energy'
        },
        {
          name:'politic'
        }
      ]
    },
    {
      title: 'hel',
      description: 'Des intervenants',
      tags: [
        {
          name:'article'
        },
        {
          name:'web'
        },
        {
          name:'solar'
        }
      ]
    },
    {
      title: 'title2',
      description: '',
      tags: [
        {
          name:'french'
        },
        {
          name:'energy'
        },
        {
          name:'web'
        }
      ]
    }
  ];

  beforeEach(inject(function (_search_) {
    search = _search_;
    search.init(data);
  }));

  it('should search by tags name, title, description by default', function () {
    expect(search.search('hel').length).toBe(2);
    expect(search.search('hello').length).toBe(1);
    expect(search.search('testing').length).toBe(1);
    expect(search.search('energy').length).toBe(2);
    expect(search.search('politic').length).toBe(1);
    expect(search.search('web').length).toBe(2);
    expect(search.search('web').length).toBe(2);
    expect(search.search('').length).toBe(0);
  });

  it('should be configurable', function () {
    search.setKeys(['title']);
    expect(search.search('title2').length).toBe(1);
    expect(search.search('energy').length).toBe(0);
  })

});
