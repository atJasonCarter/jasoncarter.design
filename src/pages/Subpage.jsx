import React, { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import items from '../data/items'

export default function Subpage() {
  const { id } = useParams()
  const normalizedId = id?.replace(/\.html$/, '') ?? ''
  const item = items.find((i) => i.slug === normalizedId || i.id === normalizedId)
  const [password, setPassword] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState('')
  const [caseHtml, setCaseHtml] = useState('')

  async function loadCaseStudy() {
    setUnlocked(true)
    if (!item.caseStudyFile) {
      setCaseHtml('<p>Case Study in Progress.</p>')
      return
    }
    try {
      const res = await fetch(item.caseStudyFile)
      if (!res.ok) throw new Error('Failed to load case study')
      setCaseHtml(await res.text())
    } catch (err) {
      setCaseHtml('<p>Unable to load case study.</p>')
    }
  }

  // New case study: start at the top, and load it straight away if already unlocked
  // (always on the local dev server, never skipping the password in a production build)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (item && (import.meta.env.DEV || unlocked)) loadCaseStudy()
  }, [item?.id])

  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1
  const nextItem = item
    ? [...items.slice(currentIndex + 1), ...items.slice(0, currentIndex)].find((i) => !i.hidden)
    : null

  if (!item) return (
    <main className="subpage">
      <p>Item not found</p>
      <Link to="/">Back</Link>
    </main>
  )

  // Old numeric links (/item/5.html) redirect to the readable slug
  if (normalizedId !== item.slug) return <Navigate to={`/item/${item.slug}`} replace />

  const required = item.greb ?? 'LetsHireJason'

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (password === required) {
      loadCaseStudy()
    } else {
      setUnlocked(false)
      setError('Incorrect password')
    }
  }

  return (
    <main className="subpage">
      <Link className="back" to="/">←</Link>
      <h2>{item.name}</h2>   <div class="hero-eyebrow">
    <span>{item.category} · {item.tag} · {item.year}</span>
  </div>


      {/* <img src={item.imageUrl} alt={item.name} className="subpage-image" /> */}
      {/* <p>{item.description}</p> */}

      <section style={{ marginTop: 24 }}>
    

        {!item.caseStudyFile ? (
          <p>Case study unavailable.</p>
        ) : !unlocked ? (
              
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', flexDirection: 'column',  }}>
            <p id="csNote" >Case Study is password protected, please contact Jason for a password or presentation.</p>
            <input
              type="password"
              placeholder="Case Study Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '8px', borderRadius: 6, border: '1px solid var(--rule)', height:'48px' }}
            />
            <button type="submit" class="reveal" >Reveal</button>
            {error && <div style={{ color: 'var(--danger)', marginLeft: 8 }}>{error}</div>}
          </form>
        ) : (
          <article className="case-study" style={{ marginTop: 12 }}>
            <div dangerouslySetInnerHTML={{ __html: caseHtml }} />
            {caseHtml && <nav className="case-nav" aria-label="Case study navigation">
              <Link to="/" className="case-nav-home">← Back home</Link>
              {nextItem && (
                <Link to={`/item/${nextItem.slug}`} className="case-nav-next">
                  <span className="case-nav-label">Next case study</span>
                  <span className="case-nav-title">{nextItem.name} →</span>
                </Link>
              )}
            </nav>}
          </article>
        )}
      </section>
    </main>
  )
}