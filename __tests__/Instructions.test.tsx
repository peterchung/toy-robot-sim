import { render, screen, fireEvent } from '@testing-library/react'
import { Instructions } from '@/app/components/Instructions'
import { listOfInstructions } from '@/app/boardContext/boardConstants'
import '@testing-library/jest-dom'

describe('Instructions', () => {
  beforeEach(() => {
    render(<Instructions />)
  })

  it('renders the Instructions accordion trigger', () => {
    const trigger = screen.getByText('INSTRUCTIONS:')
    expect(trigger).toBeInTheDocument()
  })

  it('initially has collapsed content', () => {
    // Get first instruction to verify it's not initially visible
    const firstInstruction = screen.queryByText(listOfInstructions[0])
    expect(firstInstruction).not.toBeInTheDocument()
  })

  it('expands and shows instructions when clicked', () => {
    // Click the accordion trigger
    const trigger = screen.getByText('INSTRUCTIONS:')
    fireEvent.click(trigger)

    // Check if all instructions are now visible
    listOfInstructions.forEach(instruction => {
      const instructionElement = screen.getByText(instruction)
      expect(instructionElement).toBeVisible()
    })
  })

  it('collapses content when clicked again', () => {
    // Click to open the accordion
    const trigger = screen.getByText('INSTRUCTIONS:')
    fireEvent.click(trigger)

    // Click again to close the accordion
    fireEvent.click(trigger)

    // Verify instructions are hidden
    const firstInstruction = screen.queryByText(listOfInstructions[0])
    expect(firstInstruction).not.toBeInTheDocument()
  })
})