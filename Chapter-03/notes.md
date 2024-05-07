# JSX
JSX is not HTML inside JS but it is a HTML like syntax

# Attributes 
Attributes in JSX are given using camelCase syntax

# MultiLine
if we want to write code in jsx in multiple lines use () and write code inside this
for egconst jsxHeading = (
    <h1>
    Namaste react using jsx
    </h1>
)

# Functional Components

Functional Components are normal JS functions and start its name with a Capital letter

# Rendering
We can render a component inside component also 
for eg 
const Title = () => (
    <h1 className = "head">
    Namaste React using JSX
    </h1>
) 

const number = 100
const HeadComponent = () => (
    <div id="container">
    <Title/>
    {number} (We can write JS inside react component also)
    <h1 className="heading">Namaste React Functional Components</h1>
    </div>
)

root.render(<HeadComponent/>)

This is Known as Component Composition

# Attack prevention

when fetching data from API call if the API sends some malicious code that can be harmful and attacker can steal your data JS will escape it automatically this is data sanitization

# Syntax
<ABCD/>
<ABCD></ABCD>
Both are same

also {Title()} we can use this also instead of <Title/>
so Three of things are same