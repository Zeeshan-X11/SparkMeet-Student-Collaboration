import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const features = [
  { icon: <VideocamRoundedIcon />, title: 'HD Video Meetings', copy: 'Clear video calls for focused discussions, learning sessions, and team meetings.', tone: 'blue' },
  { icon: <ChatBubbleOutlineRoundedIcon />, title: 'Real-Time Chat', copy: 'Chat with your team during meetings to share ideas, links, and important information.', tone: 'mint' },
  { icon: <ScreenShareRoundedIcon />, title: 'Screen Sharing', copy: 'Share your screen to explain concepts, walk through projects, or present your work.', tone: 'violet' },
  { icon: <GroupsRoundedIcon />, title: 'Built for Teams', copy: 'Create or join meetings instantly with classmates, project teams, and colleagues.', tone: 'orange' }
];

const steps = [
  { icon: <VideocamRoundedIcon />, number: '01', title: 'Start or join a meeting', copy: 'Create a new meeting or join with a code.' },
  { icon: <LinkRoundedIcon />, number: '02', title: 'Invite your team', copy: 'Share the meeting link with your friends or teammates.' },
  { icon: <GroupsRoundedIcon />, number: '03', title: 'Connect and collaborate', copy: 'Start talking, share your screen, chat, and work together in real time.' }
];

const useCases = [
  { image: '/use-case-students.png', alt: 'Students studying together around a laptop', title: 'Students & Project Groups', copy: 'Study together, discuss projects, and prepare for exams with seamless video collaboration.' },
  { image: '/use-case-startup.png', alt: 'A small team planning a project around a laptop', title: 'Startups & Small Teams', copy: 'Conduct standups, plan sprints, and work together from anywhere.' },
  { image: '/use-case-remote.png', alt: 'A professional working remotely from a sunny home office', title: 'Remote Professionals', copy: 'Connect with clients, collaborate with your team, and stay productive on the go.' }
];

const outcomes = [
  { icon: <MenuBookRoundedIcon />, title: 'Make room to focus', copy: 'Bring your study group together for revision, shared notes, and project work.' },
  { icon: <LightbulbRoundedIcon />, title: 'Explain ideas clearly', copy: 'Walk through a problem or present your work with screen sharing.' },
  { icon: <DevicesRoundedIcon />, title: 'Meet from anywhere', copy: 'Join a browser-based conversation from the place that works for you.' }
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const startMeeting = () => navigate('/auth');
  const joinMeeting = () => navigate('/aljk23');
  const openAuth = () => navigate('/auth');

  return <main className="landingPageContainer">
    <section className="landingHeroShell" id="top">
      <header className="landingHeader">
        <button className="brand brandButton" onClick={() => navigate('/')} aria-label="SparkMeet home">
          <span className="brandMark"><VideocamRoundedIcon /></span><span>Spark<span className="brandAccent">Meet</span></span>
        </button>
        <button
          className="mobileMenuToggle"
          type="button"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="landing-navigation"
          onClick={() => setMobileMenuOpen(open => !open)}
        >
          {mobileMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </button>
        <nav className={`landingNav${mobileMenuOpen ? ' isOpen' : ''}`} id="landing-navigation" aria-label="Main navigation">
          <a className="textNavButton" href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a className="textNavButton" href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</a>
          <a className="textNavButton" href="#use-cases" onClick={() => setMobileMenuOpen(false)}>Use cases</a>
          <button className="textNavButton landingJoinLink" onClick={() => { setMobileMenuOpen(false); joinMeeting(); }}>Join a meeting</button>
          <button className="textNavButton" onClick={() => { setMobileMenuOpen(false); openAuth(); }}>Sign in</button>
          <button className="navCta" onClick={() => { setMobileMenuOpen(false); openAuth(); }}>Create account <ArrowForwardRoundedIcon /></button>
        </nav>
      </header>

      <section className="landingHero" aria-labelledby="landing-title">
        <div className="heroCopy">
          <div className="heroEyebrow">Video collaboration for student life</div>
          <h1 id="landing-title">Meet.<br />Collaborate.<br /><span>Build Together.</span></h1>
          <p>Spark Meet is a modern video communication platform designed for students, teams, and remote professionals to connect, communicate, and collaborate from anywhere.</p>
          <div className="heroActions">
            <button className="heroPrimary" onClick={startMeeting}>Start a meeting <ArrowForwardRoundedIcon /></button>
            <button className="heroSecondary" onClick={joinMeeting}>Join as a guest</button>
          </div>
          <div className="heroHighlights" aria-label="SparkMeet features">
            <div><VideocamRoundedIcon /><span>HD Video<br />Meetings</span></div>
            <div><ChatBubbleOutlineRoundedIcon /><span>Real-Time<br />Chat</span></div>
            <div><ScreenShareRoundedIcon /><span>Screen<br />Sharing</span></div>
            <div><GroupsRoundedIcon /><span>Built for<br />Teams</span></div>
          </div>
        </div>
        <div className="heroVisual" aria-label="SparkMeet video meeting artwork">
          <div className="heroPhotoShade" />
          <img className="heroMeetingPhoto" src="/hero-video-call.png" alt="A laptop displaying a SparkMeet group video call in a sunlit study space" />
          <div className="heroPhotoCaption"><span className="heroLiveDot" /> Made for your next group session</div>
        </div>
      </section>
    </section>

    <div className="landingPhotoFlow">
      <section className="landingSection featureSection" id="features" aria-labelledby="features-title">
        <div className="sectionHeading sectionHeadingCentered">
          <span className="sectionEyebrow">Everything you need</span>
          <h2 id="features-title">Make group work feel simpler.</h2>
          <p>From quick study sessions to team meetings, Spark Meet gives you the essentials to stay connected and productive.</p>
        </div>
        <div className="featureGrid">
          {features.map(item => <article className="featureCard" key={item.title}>
            <span className={`featureIcon featureIcon-${item.tone}`}>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>)}
        </div>
      </section>

      <section className="landingSection productSection" aria-labelledby="product-title">
        <div className="productCopy">
          <span className="sectionEyebrow">A clean and intuitive experience</span>
          <h2 id="product-title">Designed for conversations that matter.</h2>
          <p>A simple interface to start, join, and manage your meetings without any hassle.</p>
          <ul className="productChecklist">
            <li><CheckCircleRoundedIcon /> Start or join meetings instantly</li>
            <li><CheckCircleRoundedIcon /> Simple and clean interface</li>
            <li><CheckCircleRoundedIcon /> Works on any device</li>
            <li><CheckCircleRoundedIcon /> No complex setup required</li>
          </ul>
        </div>
        <div className="productVisual" role="img" aria-label="Preview of SparkMeet's existing meeting home screen">
          <div className="productLaptop">
            <div className="productScreen" aria-hidden="true">
              <div className="previewTopbar">
                <span className="previewBrand"><span className="previewBrandMark"><VideocamRoundedIcon /></span>SparkMeet</span>
                <div className="previewTopActions"><span><HistoryRoundedIcon /> Meeting history</span><b>Log out</b></div>
              </div>
              <div className="previewBody">
                <div className="previewKicker">A better way to meet</div>
                <h3>Make room for great conversations.</h3>
                <p>Start a new conversation or join your team with a meeting code. Your next great idea is one call away.</p>
                <div className="previewJoinCard">
                  <strong>Join a meeting</strong>
                  <div className="previewForm"><span>Meeting code</span><span className="previewJoinButton">Join <ArrowForwardRoundedIcon /></span></div>
                  <small>No code? Create a personal room by choosing a name for your meeting.</small>
                </div>
              </div>
            </div>
            <div className="productLaptopBase" />
          </div>
        </div>
      </section>

      <section className="landingSection howSection" id="how-it-works" aria-labelledby="how-title">
        <div className="sectionHeading">
          <span className="sectionEyebrow">How it works</span>
          <h2 id="how-title">From hello to collaboration in seconds.</h2>
          <p>Get started with Spark Meet in just a few simple steps.</p>
        </div>
        <div className="stepsGrid">
          {steps.map((step, index) => <React.Fragment key={step.number}>
            <article className="stepCard">
              <div className="stepTopline"><span className="stepNumber">{step.number}</span><span className="stepIcon">{step.icon}</span></div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
            {index < steps.length - 1 && <ArrowForwardRoundedIcon className="stepConnector" aria-hidden="true" />}
          </React.Fragment>)}
        </div>
      </section>

      <section className="landingSection useCasesSection" id="use-cases" aria-labelledby="use-cases-title">
        <div className="useCasesHeading">
          <div className="sectionHeading">
            <span className="sectionEyebrow">Built for the way you work</span>
            <h2 id="use-cases-title">For students, teams, and beyond.</h2>
          </div>
          <p>Whether you’re studying, building a product, or working remotely, Spark Meet adapts to your needs.</p>
        </div>
        <div className="useCasesGrid">
          {useCases.map(item => <article className="useCaseCard" key={item.title}>
            <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
            <div className="useCaseText"><h3>{item.title}</h3><p>{item.copy}</p></div>
          </article>)}
        </div>
      </section>

      <section className="landingSection outcomesSection" aria-labelledby="outcomes-title">
        <div className="sectionHeading sectionHeadingCentered">
          <span className="sectionEyebrow">Made for real collaboration</span>
          <h2 id="outcomes-title">Simple tools. Better conversations.</h2>
          <p>Everything on the page reflects what SparkMeet is built to help you do.</p>
        </div>
        <div className="outcomesGrid">
          {outcomes.map(item => <article className="outcomeCard" key={item.title}>
            <span className="outcomeIcon">{item.icon}</span><h3>{item.title}</h3><p>{item.copy}</p>
          </article>)}
        </div>
      </section>

      <section className="landingCtaSection" aria-labelledby="cta-title">
        <div className="ctaCopy">
          <span className="sectionEyebrow">Get started today</span>
          <h2 id="cta-title">Better conversations<br /><span>start here.</span></h2>
          <p>Create a meeting, invite your team, and experience a simpler way to collaborate with Spark Meet.</p>
          <div className="heroActions">
            <button className="heroPrimary" onClick={startMeeting}>Start a meeting <ArrowForwardRoundedIcon /></button>
            <button className="heroSecondary" onClick={joinMeeting}>Join as a guest</button>
          </div>
        </div>
        <div className="ctaPlant" aria-hidden="true" />
      </section>
    </div>

    <footer className="landingFooter">
      <div className="footerBrandBlock">
        <button className="brand brandButton" onClick={() => navigate('/')} aria-label="SparkMeet home">
          <span className="brandMark"><VideocamRoundedIcon /></span><span>Spark<span className="brandAccent">Meet</span></span>
        </button>
        <p>Make learning and working together more connected.</p>
      </div>
      <div className="footerLinksGroup"><h3>Product</h3><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#use-cases">Use cases</a></div>
      <div className="footerLinksGroup"><h3>Account</h3><button onClick={openAuth}>Sign in</button><button onClick={openAuth}>Create account</button><button onClick={joinMeeting}>Join a meeting</button></div>
      <div className="footerCopyright"><span>© {new Date().getFullYear()} Spark Meet. All rights reserved.</span><a href="#top">Back to top ↑</a></div>
    </footer>
  </main>;
}
