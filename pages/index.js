import Link from 'next/link'
import BackgroundContextSender from '../components/BackgroundContextSender'

const Index = () => (
  <div className="container bg-primary page">
    <BackgroundContextSender position={({x:0,y:100})}/>
    <h1>Hello, world!</h1>
    <Link href="/about">
      <a className="btn btn-light">About us</a>
    </Link>
  </div>
)

export default Index
