## TagTagger.js
============================================================================<br/>
TagTagger.js v0.0.1<br/>
jQuery plugin to create and manage tags<br/>
requires - taggerStyles.css and jquery.js <br/>
<hr>
**Website**: http://exexzian.github.io/TagTagger.js/ <br/>
**jQuery Plugin Link**: http://plugins.jquery.com/TagTagger/ <br/>
**For Demo check: ** <code> taggerDemo.html </code> <br/>
<hr size='3'>

✦ Create tags on the go - **features**<br/>
<hr><pre>
✔ Checks for duplicate tags and display fade-In/Out message<br/>
		- which makes it less annoying - Message text can be easily changed by passing option msg<br/>
		- Want even less annoynance - of course you can pass the <code>showMsg</code> as <code>false</code><br/> 
✔ Customization Options - Styleable via CSS<br/>
✔ Editable Tags<br/>
✔ Option to Finish the tag addition/edition by clicking **Done** button <br/></pre>

<hr/>

### Usage: (<i> As Simple As It Can Be </i>)<br/>
✦ Well Of course you need to import its styling file: <code> "taggerStyles.css" </code> <br/>
✦ Default mode: <br/>
   <code> $('elementOrSelector').TagTagger(); </code> <br/>
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
			'message' : '<pre>         Oooppsss!!!       <br/>Seems You Already Have That Tag. </pre>',
			'bgColor' : '#e3e18a'
		}
 </pre>



