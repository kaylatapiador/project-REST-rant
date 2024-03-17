const React = require('react')
const Def = require('./default')

function home(){
    return(
        <Def>
            <main>
                <h1>Rest-Rant</h1>
                <div>
                    <img src="/images/Grilled-Meat-and-Veggies.jpg" alt="Grilled Meat and Veggies"/>
                    <div>
                       Photo by <a href="https://unsplash.com/@victoriakosmo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Victoria Shes</a> on <a href="https://unsplash.com/photos/grilled-meat-and-vegetable-on-the-table-UC0HZdUitWY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home