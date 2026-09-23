import React, { useRef } from 'react'

const MAX_TILT = 3.4

export default function ProjectTile({ project }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * MAX_TILT * 2
    const rotateX = (0.5 - py) * MAX_TILT * 2
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return (
    <div
      ref={ref}
      className="project-tile"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {project.imageUrl ? (
        <div className="project-tile-image" style={{ backgroundImage: `url(${project.imageUrl})` }} />
      ) : (
        <div className="project-tile-image project-tile-image-placeholder">Add image</div>
      )}
      <div className="project-tile-name">{project.name}</div>
      <div className="project-tile-tag">{project.tag}</div>
      <div className="project-tile-year">{project.year}</div>
    </div>
  )
}
