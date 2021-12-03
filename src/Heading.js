import React from 'react';
import "./Heading.css"

export const Heading = () => {
    return (
        <div>
            <h2 className="heading">Roadmap to learn Coding</h2>
                <ol className="ordered">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ol>
                <h3 className="heading">Backend Technologies</h3>
                <ul className="unordered">
                    <li>Node.js</li>
                    <li>PHP</li>
                    <li>Ruby-on-rails</li>
                </ul>
           
        </div>
    )
}
