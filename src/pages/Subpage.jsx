import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import items from '../data/items'

export default function Subpage() {
  const { id } = useParams()
  const normalizedId = id?.replace(/\.html$/, '') ?? ''
  const item = items.find((i) => i.id === normalizedId)
  const [password, setPassword] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState('')
  const [caseHtml, setCaseHtml] = useState('')

  if (!item) return (
    <main className="subpage">
      <p>Item not found</p>
      <Link to="/">Back</Link>
    </main>
  )

  const required = item.greb ?? 'LetsHireJason'

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (password === required) {
      setUnlocked(true)
      if (item.caseStudyFile) {
        try {
          const res = await fetch(item.caseStudyFile)
          if (!res.ok) throw new Error('Failed to load case study')
          const html = await res.text()
          setCaseHtml(html)
        } catch (err) {
          setCaseHtml('<p>Unable to load case study.</p>')
        }
      } else {
        setCaseHtml('<p>Case Study in Progress.</p>')
      }
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
              style={{ padding: '8px', borderRadius: 6, border: '1px solid #ddd', height:'48px' }}
            />
            <button type="submit" class="reveal" >Reveal</button>
            {error && <div style={{ color: 'crimson', marginLeft: 8 }}>{error}</div>}
          </form>
        ) : (
          <article className="case-study" style={{ marginTop: 12 }}>
            <div dangerouslySetInnerHTML={{ __html: caseHtml }} />
          </article>
        )}
      </section>
    </main>
  )
}