import React from 'react'
import FormatSection from './toolbar/FormatSection'
import '../styles/Toolbar.css'

interface ToolbarProps {
  editorRef: React.RefObject<HTMLDivElement>
  onFormat?: (format: string) => void
}

const Toolbar: React.FC<ToolbarProps> = ({ editorRef, onFormat }) => {
  const handleFormat = (command: string) => {
    onFormat?.(command)
  }

  return (
    <div className="toolbar">
      <FormatSection onFormat={handleFormat} editorRef={editorRef} />
    </div>
  )
}

export default Toolbar
