import React, { useRef } from 'react'

interface FormatSectionProps {
  onFormat: (command: string) => void
  editorRef: React.RefObject<HTMLDivElement>
}

const FormatSection: React.FC<FormatSectionProps> = ({ onFormat, editorRef }) => {
  const savedRange = useRef<Range | null>(null)

  const handleButtonMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    const selection = window.getSelection()
    if (selection && selection.rangeCount > 0) {
      savedRange.current = selection.getRangeAt(0).cloneRange()
    }
  }

  const handleFormatClick = (command: string) => {
    if (editorRef.current) {
      editorRef.current.focus()
    }
    
    const selection = window.getSelection()
    if (selection && savedRange.current) {
      selection.removeAllRanges()
      selection.addRange(savedRange.current)
    }
    
    document.execCommand(command, false, undefined)
    onFormat(command)
  }

  return (
    <div className="toolbar-section">
      <button 
        className="toolbar-btn"
        onMouseDown={handleButtonMouseDown}
        onClick={() => handleFormatClick('bold')}
        title="Negrita (Ctrl+B)"
      >
        <strong>B</strong>
      </button>

      <button 
        className="toolbar-btn"
        onMouseDown={handleButtonMouseDown}
        onClick={() => handleFormatClick('italic')}
        title="Cursiva (Ctrl+I)"
      >
        <em>I</em>
      </button>

      <button 
        className="toolbar-btn"
        onMouseDown={handleButtonMouseDown}
        onClick={() => handleFormatClick('underline')}
        title="Subrayado (Ctrl+U)"
      >
        <u>U</u>
      </button>

      <button 
        className="toolbar-btn"
        onMouseDown={handleButtonMouseDown}
        onClick={() => handleFormatClick('strikethrough')}
        title="Tachado"
      >
        <s>S</s>
      </button>
    </div>
  )
}

export default FormatSection
