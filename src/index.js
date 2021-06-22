import React from 'react'
import reactDom from 'react-dom';
import './index.css'


function Booklist()
{ return ( <section className='booklist'>
<Book/>
<Book/>
<Book/>
<Book/>
<Book/>
<Book/>
<Book/>
<Book/>
<Book/>


</section>)
}
const Book = () =>
{
    return <article className='book'>
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"
alt="ikigai"/>

const Title = () =>
{
    return <h1>Ikigai</h1>
}
const Author = () => <h4 style={{color:'#f123f45',fontSize:'0.75rem', marginTop: '0.25rem'}}>Japanese Haiku</h4>
reactDom.render(<Booklist/>, document.getElementById('root'));