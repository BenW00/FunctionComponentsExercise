// Question 1A
function Ghostbusters () {
    return `Who you gonna call?`;
}

//  Question 1B
const root = document.getElementById(`root`);
ReactDOM.render(
    <Ghostbusters/>,
    root
);

// Question 2A
function Tagline () {
    return <h1>"We're ready to believe you."</h1>;
}

// Question 2B
ReactDOM.render(
    <Tagline/>,
    root
);

// Question 3A
function Janine () {
    return (
        <div>
            <h2>I've quit better jobs than this.</h2>
            <h2>Ghostbusters, whaddya want?</h2>
        </div>
    )
}

// Question 3B
ReactDOM.render(
    <Janine/>,
    root
)

// Question 4A
function MassHysteria () {
    return (
        <ul>
            <li>Fire and brimstone coming down from the skies! Rivers and seas boiling!</li>
            <li>Forty years of darkness! Earthquakes! Volcanoes!</li>
            <li>he dead rising from the grave!</li>
            <p>Human sacrifice! Dogs and cats, living together! Mass hysteria!</p>
        </ul>
        
    )
}

// Question 4B
ReactDOM.render(
    <MassHysteria/>,
    root
)

// Question 5A
function GhostbustersLogo () {
    return (
        <img src="https://cdn.pixabay.com/photo/2016/07/13/18/41/ghostbusters-1515155_1280.jpg"/>
    )
}

// Question 5B
ReactDOM.render(
    <GhostbustersLogo/>,
    root
)

// Question 6A
function ToolsTalent () {
    // Question 6B
    const w ="We"
    // Question 6C
    return (
        <div>
            <h1>{w} had the tools.</h1>
            <h3>{w} had the talent.</h3>
        </div>
    )
}

// Question 6d
ReactDOM.render(
    <ToolsTalent/>,
    root
)

// Questoin 7A
function GhostbustersAll () {
    return (
        <div>
            {Ghostbusters()}
            {Tagline()}
            {Janine()}
            {MassHysteria()}
            {GhostbustersLogo()}
            {ToolsTalent()}
        </div>
    )
}

// Question 7B
ReactDOM.render(
    <GhostbustersAll/>,
    root
)

// BONUS

// Question 8A
function DiceRoll (){
    // Quiestion 8B
    const die1 = Math.floor(Math.random() * 6) + 1
    // Question 8C
    const die2 = Math.floor(Math.random() * 6) + 1
    // Question 8D
    return (die1 == 1 ** die2 == 1 ? <h1>SNAKE EYES</h1>: `${die1} ${die2}`)
}
// Question 8E
ReactDOM.render(
    <DiceRoll/>,
    root
)