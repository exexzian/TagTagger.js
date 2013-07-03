## tagger.js
======
tagger.js v0.0.1
jQuery plugin to create and manage tags
requires - taggerStyles.css and jquery.js
<hr size='3'>

Create tags on the go - <b>features</b><br/>
<hr><pre>
✔ Checks for duplicate tags and display fade-In/Out message<br/>
		- which makes it less annoying - Message text can be easily changed by passing option msg<br/>
		- Want even less annoynance - of course you can pass the <code>showMsg</code> as <code>false</code><br/> 
✔ Customization Options<br/>
✔ Editable Tags<br/>
✔ Option to Finish the tag addition/edition by clicking **Done** button <br/></pre>

<hr/>

### Usage: (<i> Simple as It can be </i>)
✦ Default mode: <br/>
<code> $('elementOrSelector').tagger(); </code> <br/>
✦ Passing Options by overriding Default settings (<i>change as required</i>): <br/>
<pre>
'box' : {
			'width' : '500px',
			'minHeight' : '90px'
		},
		'tag' : {
			'bgColor' : '#161d6d',
			'fontColor' : '#ffffff'
		},
		'tagProperty' : {
			'minLength' : '1'
		},
		'duplicateMsg' : {
			'showMsg' : 'true',
			'message' : '<pre>         Oooppsss!!!       <br/>Seems You Already Aave That Tag. </pre>',
			'bgColor' : '#e3e18a'
		}
 </pre>





1. very easy to setup with default behavior
2. very flexible customization options
3. minimal requirements and minimal assumptions about your technology stack and architecture


