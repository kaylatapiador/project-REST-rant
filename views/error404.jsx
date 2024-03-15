const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/rabbit.jpg" alt="Rabbit"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@cadop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mathew Schwartz</a> on <a href="https://unsplash.com/photos/a-small-rabbit-is-sitting-in-the-grass-7gl8ffzOwZU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404