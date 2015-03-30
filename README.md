#Knowledge Plaza Front-End Challenge

Here is my solution of the Knowledge Plaza Front-End Challenge

##Description of the solution

My solution uses 

* AngularJS as frontend framework
* BootStrap for UI
* Grunt for automating build and tests
* Bower for managing dependencies
* Karma + Jasmine for unit test.
* Yeoman for scaffolding.


![screenshot](https://raw.githubusercontent.com/ludov04/challenge/master/frontend/screenshot.png)

Each tile is displayed in a rectangle. The rectangle contains the title, the description, and the tags of the tile.
When the href attribute of the tile point to an article, a link is displayed.
The rectangle also contains the number of followers, likes, and comments.
The tags are removable.

The user can filter the tiles that are displayed by title, description, tags, or all. The filter allows mispelling thanks to [FuseJS](http://kiro.me/projects/fuse.html) 

The user can also create content using the second box in the right column.

##Usage

To run it, just type:
```
grunt serve
```
and navigate to http://localhost:9000


