var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>React weather application for the purpose of learning react/redux</p>    
            <p>Tools:</p>
            <ul>
                <li><a href="#">React</a></li>
            </ul>
        </div>
    );
};

module.exports = About;