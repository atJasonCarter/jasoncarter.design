import React from 'react'
import Card from '../components/card'
import items from '../data/items'

export default function Home() {
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

      <section className="grid">
        {items.map((it) => (
          <Card key={it.id} item={it} />
        ))}
      </section>

      <a  href='src/data/JasonCarterResume26.pdf' target="_blank" className="resume-link" style={{ marginTop: '96px', marginBottom: '240px' }}>Download Resume</a>
      {/* <div className="breath"></div> */}
          {/* <!-- family images --> */}
     <div class="Familyimages">
      <img class="FamImg one" src="/imgs/Family0.png" alt=""></img>
      <img class="FamImg two" src="/imgs/Family1.png" alt=""></img>
      <img class="FamImg seven" src="/imgs/Family6.png" alt=""></img>
      <img class="FamImg four" src="/imgs/Family3.png" alt=""></img>
      <img class="FamImg five" src="/imgs/Family5.png" alt=""></img>
      <img class="FamImg six" src="/imgs/Family4.png" alt=""></img>
      <img class="FamImg three" src="/imgs/Family2.png" alt=""></img>
      <img class="FamImg eight" src="/imgs/Family7.png" alt=""></img>
      <img class="FamImg nine" src="/imgs/Family8.png" alt=""></img>
     </div>
    </main>
  )
}
