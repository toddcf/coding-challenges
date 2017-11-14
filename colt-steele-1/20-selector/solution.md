# Selector Solution

By ID:

```
var v1 = document.getElementById( "first" );
var v2 = document.querySelector( "#first" );
```

By class:

```
var v3 = document.getElementsByClassName( "special" )[ 0 ];
var v4 = document.querySelector( ".special" );
var v5 = document.querySelectorAll( ".special" )[ 0 ];
```

By tag:

```
var v6 = document.querySelector( "p" );
var v7 = document.getElementsByTagName( "p" )[ 0 ];
var v8 = document.querySelectorAll( "p" )[ 0 ];
```

You can also get complicated and select the first `<p>` that is adjacent to an `<h1>`:

`var v9 = document.querySelector( "h1 + p " );`
