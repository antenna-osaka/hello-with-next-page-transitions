import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { getBasePath } from '../lib/path_utils'
import BackgroundContextSender from '../components/BackgroundContextSender'

const About = (props) => {
  const [loaded, setLoaded] = useState(false)
  const { pageTransitionReadyToEnter } = props

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      pageTransitionReadyToEnter()
      setLoaded(true)
    }, 2000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [pageTransitionReadyToEnter])

  const sender=<BackgroundContextSender position={({x:0,y:200})}/>
  if (!loaded) return sender;
  return (
    <div className="container bg-success page">
      {sender}
      <h1>About us</h1>
      <p>
        Notice how a loading spinner showed up while my content was "loading"?
        Pretty neat, huh?
      </p>
      <Link href={getBasePath("/")}>
        <a className="btn btn-light">Go back home</a>
      </Link>
    </div>
  )
}

About.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

About.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}

About.pageTransitionDelayEnter = true

export default About
