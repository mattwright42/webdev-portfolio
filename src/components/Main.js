import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

const Title = {
  margin: '0 auto',
  marginBottom: '30px',
}

const Resume = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
}

const pstyle = {
  marginRight: '.5%',
}

const UL = {
  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom: '30px',
}

const headerThree = {
  textDecoration: 'underline',
}

const AboutP = {
  marginBottom: '20px',
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 style={Title} className="major">
            Projects
          </h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <div>
            <a href="https://react-shopper-mw.herokuapp.com/">
              <h3 style={headerThree}>React Shopper</h3>
            </a>
            <h4>Stack Used: ReactJS | NodeJS | Stripe</h4>
            <p style={AboutP}>
              I've built a full-stack shopping cart application using React,
              Node, and Stripe. This project allowed me to work on building and
              deploying a React application, using best practices - including
              React Hooks.
            </p>
            {/* <a href="https://flexlog.app/">
              <h3 style={headerThree}>FlexLog</h3>
            </a>
            <h4>Stack Used: ReactJS | NodeJS | SQL</h4>
            <p style={AboutP}>
              This app was part of my capstone with Lambda School. Our team was
              given a wireframe of an app that was to be developed and we were
              given the responsibility of choosing which stack to build the
              application on as well as the design. We built the back-end using
              Node.js and SQL while we built our front-end using React along
              with a number of other libraries. Styling was completed using
              styling-components. For this project, I worked specifically on:
              styling and theme for the web application, building/structuring
              the database, implementing uniform components for use across the
              app, and implementing dropdown menus for the UX. Click{' '}
              <a href="https://flexlog-journal-mbw.netlify.com/">here</a> for a
              journal/blog about my experience on the FlexLog team.
            </p> */}

            {/* <a href="https://gallant-tesla-82382f.netlify.com/">
              <h3 style={headerThree}>Lambda Notes</h3>
            </a>
            <h4>Stack Used: ReactJS | NodeJS | SQL</h4>
            <p style={AboutP}>
              This application was developed as part of a project week at Lambda
              School. We were given a mock-up and one week in order to complete
              this project. The front-end was built using ReactJS while the
              back-end was built using NodeJS and SQL.
            </p> */}
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 style={Title} className="major">
            About
          </h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I'm a software developer that enjoys creating responsive and
            accessible full stack applications using the latest technologies. I
            am passionate about education and learning as a way to grow and
            develop new skills.
          </p>
          <p>
            Before I started web development, I taught high school orchestra for
            ten years. I loved bringing new technology into my classroom and the
            benefits that we enjoyed: a variety of opportunties for assessment
            and feedback, instant collaboration, and access to a whole new array
            of teaching tools. The most important thing that I have discovered
            in both music and web development is that the creative process never
            ends, and that practice makes perfect! My commitment to supporting
            my family now drives my interest in development. I've really enjoyed
            the opportunities I have found to take my creative energies in an
            exciting new direction.
          </p>
          <p>
            I've spent the last ten months honing my programming skills with{' '}
            <a href="https://learn.lambdaschool.com/syllabus/cs-fsw">
              Lambda School
            </a>
            , a Computer Science &amp; Software Engineering Academy that
            provides an immersive hands-on curriculum with a focus on computer
            science, software engineering, and web development. You can see my
            work on <a href="https://github.com/mattwright42">GitHub</a>.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 style={Title} className="major">
            Resume
          </h2>
          <div style={Resume}>
            <p style={pstyle}>
              My resume is hosted{' '}
              <a href="https://resume.creddle.io/resume/af7vi389zag">here</a>.
            </p>
          </div>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 style={Title} className="major">
            Contact
          </h2>

          <ul style={UL} className="icons">
            <li>
              <a
                href="https://github.com/mattwright42"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mattbwright/"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href="mailto:matthewbwright@gmail.com?Subject=Portfolio%20Reachout"
                className="icon fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
