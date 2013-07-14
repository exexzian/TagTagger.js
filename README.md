## TagTagger.js
============================================================================<br/>
TagTagger.js v0.0.5<br/>
jQuery plugin to create and manage tags<br/>
Requires - taggerStyles.css and jquery.js <br/>
<hr>
**Website**: http://exexzian.github.io/TagTagger.js/ <br/>
**jQuery Plugin Link**: http://plugins.jquery.com/TagTagger/ <br/>
**For Demo**: [Check Here](http://exexzian.github.io/TagTagger.js/demo/taggerDemo.html) <br/>
<hr size='3'>
**Version - 0.0.5**: comes with more useful and flexible features - a big credit goes to - [@Lewiscowles1986](https://github.com/Lewiscowles1986)<br/>
<hr size='3'>
✦ Create tags on the go - **features**<br/>
<hr><pre>
✔ Checks for duplicate tags and display fade-In/Out message<br/>
  	- which makes it less annoying - Message text can be easily changed by passing option msg<br/>
		- Want even less annoynance - of course you can pass the <code>showMsg</code> as <code>false</code><br/> 
✔ Customization Options - Styleable via CSS<br/>
✔ Editable Tags<br/>
✔ Option to Finish the tag addition/edition by clicking **Done** button <br/>
✔ **Tag Pool**(<i>available from v0.0.5<i>): feature provides the option to list Tags that can be added <br/>(<i>well it surely restricts from spamming tag-box - and well of-coure you can turn it off anytime<i> <br/>- see <a href="#usage">usage</a>)<br/>
✔ **Flexible Event Callbacks**(<i>available from v0.0.5<i>): This one gives a free hand flexibility to developers<br/> to add callbacks on events like <code>onCreated</code>, <code>onRemoved</code>, <code>onDuplicate</code>, <code>onNotInPool</code>, and <code>onBlank</code>
</pre>
<hr/>

### Usage: (<i> As Simple As It Can Be </i>)<br/>
✦ Well Of course you need to import its styling file: <code> "taggerStyles.css" </code> <br/>
✦ Default mode: <br/>
   <code> $('elementOrSelector').TagTagger(); </code> <br/>
✦ Passing Options by overriding Default settings (<i>change as required</i>): <br/>
✦ <a name="usage">Sample Usage detail of v0.0.5 feature list: </a> <br/>
```
$('#Element').TagTagger({ 
					'tagPool' : {
						'onlyAvailable' : true,
						'tags' : ['java', 'c', 'javascript', 'html', 'css']
					},
					'events' : {
						'onCreated':function(data){ alert('created tag: "'+data+'"'); },
						'onRemoved':function(data){ alert('removed tag: "'+data+'"'); },
						'onDuplicate':function(data){ alert('duplicate tag: "'+data+'"'); },
						'onNotInPool':function(data){ alert('tag: "'+data+'" not in pool'); },
						'onBlank':function(data){ alert('blank tag: "'+data+'"'); }
					}
				});
               
 ```
<hr size='3'>
<hr size='3'><br/>

✦ **Complete Default mode:** <br/>
<pre>
'box' : {
			'width' : '500px',
			'minHeight' : '90px'
		},
		'tag' : {
			'bgColor' : '#161d6d',
			'fontColor' : '#ff0000'
		},
		'tagProperty' : {
			'minLength' : '1'
		},
		'duplicateMsg' : {
			'showMsg' : 'true',
			'message' : '<pre>         Oooppsss!!!       <br/>Seems You Already Have That Tag. </pre>',
			'bgColor' : '#e3e18a'
		},
		'tagPool' : {
			'onlyAvailable' : false,
			'tags' : []
		},
		'events' : {
			'onCreated':function(data){},
			'onRemoved':function(data){},
			'onDuplicate':function(data){},
			'onNotInPool':function(data){},
			'onBlank':function(data){}
		}
 </pre>



