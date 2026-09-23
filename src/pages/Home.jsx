import React from 'react'
import Card from '../components/card'
import ProjectTile from '../components/ProjectTile'
import items from '../data/items'
import otherProjects from '../data/otherProjects'

const SHOW_OTHER_PROJECTS = false

export default function Home() {
  const caseStudyItems = items.filter((it) => !it.hidden)

  return (
    <main className="home">
      <section className="hero">

        <div className="hero-image">
          <p className="imageSub">Lofoten, Norway</p>
          <p className="imageDesc"> 68°20′N 14°40′E﻿ / ﻿68.333°N 14.667°E</p>
          <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
          
        </div>
        <div className="hero-inner">
          <h1>Jason Carter</h1> 
          <p className="subheader">Designer and Developer of useful products focused on process, conversations, and conversion. </p>
          <p className="subheader">Currently taking a purposeful pause to be hands-on with raising my first child.</p>
          <p className="subheader">Previously a <span className="highlight">Lead Design Engineer</span> at Discovery Education, <span className="highlight">Head of Design</span> and <span className="highlight">Advisor</span> at several startups. </p>
         <div className="break-medium"></div>
          <p className="subheader"> Looking to mentor, increase happiness, and work with people who care about craft.</p>
        </div>
      </section>

      <h2 className="section-heading">Case Studies</h2>
      <section className="case-studies-grid">
        {caseStudyItems.map((it) => (
          <Card key={it.id} item={it} />
        ))}
      </section>

      {SHOW_OTHER_PROJECTS && (
        <>
          <h2 className="section-heading">Other Projects</h2>
          <section className="other-projects-grid">
            {otherProjects.map((p) => (
              <ProjectTile key={p.id} project={p} />
            ))}
          </section>
        </>
      )}

      <a  href='/JasonCarterResume26.pdf' target="_blank" download="JasonCarterResume26.pdf" className="resume-link" style={{ marginTop: '96px', marginBottom: '240px' }}>Download Resume</a>
      {/* <div className="breath"></div> */}
          {/* <!-- family images --> */}
     <div className="Familyimages">
      <img className="FamImg one" src="/imgs/Family0.png" alt="" />
      <img className="FamImg two" src="/imgs/Family1.png" alt="" />
      <img className="FamImg seven" src="/imgs/Family6.png" alt="" />
      <img className="FamImg four" src="/imgs/Family3.png" alt="" />
      <img className="FamImg five" src="/imgs/Family5.png" alt="" />
      <img className="FamImg six" src="/imgs/Family4.png" alt="" />
      <img className="FamImg three" src="/imgs/Family2.png" alt="" />
      <img className="FamImg eight" src="/imgs/Family7.png" alt="" />
      <img className="FamImg nine" src="/imgs/Family8.png" alt="" />
     </div>
    </main>
  )
}
