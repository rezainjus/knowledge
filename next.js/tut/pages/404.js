import Link from 'next/link'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Ops...</h1>
            <h2>That Page Not Found</h2>
            <p>Go Back to <Link href="/"><a>Home Page</a></Link> </p>
        </div>
     );
}
 
export default NotFound;