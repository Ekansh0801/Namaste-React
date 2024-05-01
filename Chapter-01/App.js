/**
 * <div id="parent">
 *    <div id="child1">
 *        <h1>I'm an h1 tag</h1>
 *        <h2>I'm an h2 tag</h2>
 *    </div>
 *    <div id="child2">
 *        <h1>I'm an h1 tag</h1>
 *        <h2>I'm an h2 tag</h2>
 *    </div>
 * </div>
 */

// Reat Object => HTML element(browser understands)


const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"Child1"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I'm an h1 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I'm an h2 tag"
                )  ,   
                React.createElement(
                    "div",
                    {id:"Child2"},
                    [
                        React.createElement(
                            "h1",
                            {},
                            "I'm an h1 tag"
                        ),
                        React.createElement(
                            "h2",
                            {},
                            "I'm an h2 tag"
                        )                        
                    ]
                )                                   
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);  //only element with id root will be updated rest will remain same

// const heading = React.createElement(
//     "h1",
//     {id:"heading", xyz:"abc"},   //attributes
//     "Hello World from React"
// );

// console.log(heading);  //Object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);