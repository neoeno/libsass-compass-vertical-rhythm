Libsass Compass Vertical Rhythm
===============================

This is a port of Compass [vertical rhythm](http://compass-style.org/reference/compass/typography/vertical_rhythm/)
functionality without the dependency on Compass or Ruby Sass.

It's pretty much complete. Only caveat is that IE6 support isn't enabled with
Compass' browser support functionality. Instead, you can set `$compass-rhythm-support-ie6` to
true if you want that.

## Quickstart

```shell
$ bower install --save libsass-compass-vertical-rhythm
```

```scss
@import 'bower_components/libsass-compass-vertical-rhythm/lib/compass_rhythm';
```

You can follow the directions in the [Compass docs](http://compass-style.org/reference/compass/typography/vertical_rhythm/)
from there.

## License

[That what Compass says.](https://github.com/Compass/compass/blob/d5df161d0df7edc686e576b22412f437dd0590cc/LICENSE.markdown)
