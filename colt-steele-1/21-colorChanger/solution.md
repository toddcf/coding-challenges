# Selector Solution

```
<style>
	
	.purple {
		background-color: purple;
	}

</style>
```

```
<script type="text/javascript">

var button = document.querySelector( "button" );

button.addEventListener( "click", function() {
	document.body.classList.toggle( "purple" );
});

</script>
```
