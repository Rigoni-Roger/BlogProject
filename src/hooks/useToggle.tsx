import React from 'react'

export const useToggle = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => {
    setIsOpen(true)
}
  const toggleClose = () => {
    setIsOpen(false)
}

  return {isOpen, toggleClose, toggleOpen}
}
