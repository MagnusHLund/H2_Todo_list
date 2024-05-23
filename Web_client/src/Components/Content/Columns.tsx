import React from 'react'
import './DragDrop.scss'

const Columns: React.FC = () => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', event.currentTarget.id)
    event.dataTransfer.effectAllowed = 'move'
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const data = event.dataTransfer.getData('text')
    const draggableElement = document.getElementById(data)
    const dropzone = event.currentTarget
    if (dropzone && draggableElement) {
      dropzone.appendChild(draggableElement)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }

  return (
    <div className="draggable-container">
      <div
        id="draggable-item"
        className="draggable"
        draggable
        onDragStart={handleDragStart}
      >
        Drag me!
      </div>
      <div
        id="drop-zone-1"
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drop Zone 1
      </div>
      <div
        id="drop-zone-2"
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drop Zone 2
      </div>
    </div>
  )
}

export default Columns
