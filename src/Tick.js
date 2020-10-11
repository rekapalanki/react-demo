import React, {Component} from 'react'

function tick() {
        const name = 'Réka'
        const user = { firstName: 'Jane', lastName: 'Doe' };
        function formatName(user) { return user.firstName + ' ' + user.lastName; }
        const greeting = <p>Hello, {formatName(user)}!</p>
        const element = (
            <div>
                <h1>Hello {name}!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <p>const greeting includes formatName(user):</p>
                {greeting}
                <p>A sample usage of imgix srcset attribute:</p>
                <img 
                src="https://assets.imgix.net/unsplash/bridge.jpg?w=640&h=640&fit=crop&q=85&auto=format&sharp=10&txtalign=middle,center&txtclr=fff&txtfont=helvetica,bold&txtsize=100&txtfit=max&txt=original"
                srcset="
                https://assets.imgix.net/unsplash/bridge.jpg?w=1024&h=1024&fit=crop&q=85&auto=format&sharp=10&txtalign=middle,center&txtclr=fff&txtfont=helvetica,bold&txtsize=100&txtfit=max&txt=1024 1024w,
                https://assets.imgix.net/unsplash/bridge.jpg?w=640&h=640&fit=crop&q=85&auto=format&sharp=10&txtalign=middle,center&txtclr=fff&txtfont=helvetica,bold&txtsize=100&txtfit=max&txt=640 640w,
                https://assets.imgix.net/unsplash/bridge.jpg?w=480&h=480&fit=crop&q=85&auto=format&sharp=10&txtalign=middle,center&txtclr=fff&txtfont=helvetica,bold&txtsize=100&txtfit=max&txt=480 480w"
                sizes="(min-width: 36em) 25vw, 100vw"
                class="responsive-img"
                alt="Bridge"></img>
            </div>
        )
        ReactDOM.render(element, document.getElementById('root'))
}

setInterval(tick, 1000);

export default tick