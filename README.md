# grunt-map-split

> javascript source map file split

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-map-split --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-map-split');
```

## The "map-split" task

### Overview
In your project's Gruntfile, add a section named `map-split` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'map-split': {
    default_options: {
      files: {
        'path/to/source/map/file': 'output/path'
      }
    }
  },
})
```

### Usage Examples

```js
  grunt.initConfig({
    'map-split': {
      default_options: {
        files: {
          'test/fixtures/testing': './tmp/'
        }
      }
    }
  });
```

`test/fixtures/testing`:

```json
{
"version":3,
"file":"module_one.js",
"lineCount":1,
"mappings":"",
"sources":[""],
"names":[""]
}
{
"version":3,
"file":"module_two.js",
"lineCount":1,
"mappings":"",
"sources":[""],
"names":[""]
}
```

Should create two files:

`module_one.js`:

```json
{"version":3,"file":"module_one.js","lineCount":1,"mappings":"","sources":[""],"names":[""]}
```

`module_two.js`:

```json
{"version":3,"file":"module_two.js","lineCount":1,"mappings":"","sources":[""],"names":[""]}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
