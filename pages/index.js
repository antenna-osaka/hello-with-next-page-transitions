import Link from 'next/link'
import { getBasePath } from '../lib/path_utils'

const Index = () => (
  <div className="container bg-primary page">
    <h1>Hello, world!</h1>
    <Link href={getBasePath("/about")}>
      <a className="btn btn-light">About us</a>
    </Link>
  </div>
)

export default Index
