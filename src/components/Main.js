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
          <a href="https://total-pizza-mastery.vercel.app/">
              <h3 style={headerThree}>Total Pizza Mastery</h3>
            </a>
            <h4>Stack Used: ReactJS</h4>
            <p style={AboutP}>
              A simple web app mocking up management of ingredients and pizza recipes. Add, edit, delete ingredients and pizzas. 
            </p>
          <a href="https://quizyourself.vercel.app/">
              <h3 style={headerThree}>Quiz Yourself</h3>
            </a>
            <h4>Stack Used: ReactJS | Redux | Rest API </h4>
            <p style={AboutP}>
              A trivia quiz web app. Using the Open Trivia Database, you can test your knowledge with as many questions as you like at various levels of difficulties in just about every category imaginable!
            </p>
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
            <a href="https://wot-ipsum.live/">
              <h3 style={headerThree}>WoT Ipsum</h3>
            </a>
            <h4>Stack Used: NodeJS</h4>
            <p style={AboutP}>
              I built this web app to get some practice with and as a way to pay homage to on of my favorite fantasy series of all time: The Wheel of Time by Robert Jordan.
            </p>
            <a href="https://complimentr-js-mw.glitch.me/">
              <h3 style={headerThree}>Complimentr</h3>
            </a>
            <h4>Stack Used: JavaScript | NodeJS | Vue.js</h4>
            <p style={AboutP}>
              This project was built as a way to get better acquainted with APIs and how to make calls to them. Using the Twilio API and Twilio registered numbers, you can send a compliment via text message. It will also show up in the compliment feed above.
            </p>
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
            <img src={pic02} alt="My family" />
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
            In 2018, I spent ten months honing my programming skills with{' '}
            <a href="https://learn.lambdaschool.com/syllabus/cs-fsw">
              Lambda School
            </a>
            , a Computer Science &amp; Software Engineering Academy that
            provides an immersive hands-on curriculum with a focus on computer
            science, software engineering, and web development. 
            {/* You can see my
            work on <a href="https://github.com/mattwright42">GitHub</a>. */}
            </p>
          <p>
            I most recently had a role as a junior developer for BluBanyan, working with their clients to develop and enhance their business in NetSuite, and building integrations for their external applications (Shopify, Salesforce, Hubspot) and NetSuite via Celigo. I'm now ready to
            seek out my next opportunity as a web developer.
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
