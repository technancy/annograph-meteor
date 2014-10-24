#AnnoGraph

##"A highlighter you can make graphs with."

A text annotator for quantifying subjective values within texts.

Key values within a text can be mapped by assigning one against each sentence or selected words.

Each key value is selected from a pool of set criteria.

A tally is kept of how many pieces of text were assigned to each key value.

A highlight is left behind with a corresponding key value colour, to get an overall sense of how the text evolves between each key value.


##Extension:
The tally of the results can then be displayed as a graph.

But this tool would become even more useful if you could compare 1 text against another.

Opinion vs Opinion

Or keep a tally across a series of texts.

Dream + Dream + Dream + Dream + Dream

==============
For example:

Set criteria: Hot, Toasty, Cold

George went on holiday to Dubai in July. [ **Hot** ] He decided to sit in a bath of ice the whole time. [ **Cold** ] When he got home it was snowing. [ **Cold** ] But luckily he was wearing 10 woolen onesies. [ **Toasty** ] His housemate Gregory had cooked him a welcome home meal with 10 ghost peppers. [ **Hot** ]

<code>
[ Hot ] ## <br/>
[ Toasty ] # <br/>
[ Cold ] # <br/>
</code>


===============
Extension example:

Set criteria: Economy, Equality, Independence

Opinion **A**:<br/>
The unconditional income in Switzerland means that a third of the GDP would be distributed unconditionally. [ **Equality** ] But I don’t count that as government expenditure because it is immediately distributed to the people who live in this society. [ **Economy** ] It means less government power because each individual can decide how to spend the money. [ **Independance** ]

Opinion **B**:<br/>
Under unconditional income landlords could raise rent levels to double. [ **Economy -** ] [ **Equality -** ] Some bureaucracy would be eliminated but there would need to be measures put in place to limit rent prices. [ **Independence -** ] Pilot study results need to be looked at carefully. There is a risk that although people would feel more independence they may have less incentive to do any work at all, and so the Swiss economy would suffer in the long term. [ **Economy -** ]

<code>  ------ A ----------------- B ------      <br/>
        # [ Economy ]----------[ Economy ] - ## <br/>
       # [ Equality ]--------[ Equality ] - # <br/>
   # [ Independence ][ Independence ] - #
</code>

================
User Interface Suggestions:

Ideally there would be 2 selection modes. Freestyle and Sentence.

Freestyle mode would let the user highlight by click-dragging the cursor, and show the tooltip (Labeller) on mouseup. [currently implemented in non-TDD / non-BDD prototype]

Sentence mode would highlight a sentence on rollover and show the tooltip (Labeller) on click.

=================

*Installation:*
Setup requires node, npm, and meteor.

```
git clone https://github.com/technancy/annograph-meteor.git
 
rvm install ruby-2.0.0-p247
rvm use ruby-2.0.0-p247

sudo npm install meteor
```

*Run:*  
```meteor```
