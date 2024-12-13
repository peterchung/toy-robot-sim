import { render, screen, fireEvent } from '@testing-library/react'
import { CommandButtons } from '@/app/components/CommandButtons'
import { BoardContext } from '@/app/boardContext/BoardContext'
import { listOfButtons } from '@/app/boardContext/boardConstants'
import '@testing-library/jest-dom'

// Handle jest import for TypeScript
const mockDispatch = jest.fn()

const renderWithContext = () => {
  return render(
    <BoardContext.Provider value={{ dispatch: mockDispatch }}>
      <CommandButtons />
    </BoardContext.Provider>
  )
}

describe('CommandButtons', () => {
  beforeEach(() => {
    // Clear mock calls between tests
    mockDispatch.mockClear()
    // Clean up event listeners
    jest.restoreAllMocks()
  })

  it('renders all buttons from listOfButtons', () => {
    renderWithContext()
    
    listOfButtons.forEach(button => {
      const buttonElement = screen.getByText(button.type)
      expect(buttonElement).toBeInTheDocument()
    })
  })

  it('calls dispatch with correct action when buttons are clicked', () => {
    renderWithContext()
    
    listOfButtons.forEach(button => {
      const buttonElement = screen.getByText(button.type)
      fireEvent.click(buttonElement)
      
      expect(mockDispatch).toHaveBeenCalledWith({ type: button.action })
    })
  })

  describe('Keyboard events', () => {
    it('calls dispatch with correct action when corresponding keys are pressed', () => {
      renderWithContext()
      
      listOfButtons.forEach(button => {
        fireEvent.keyDown(window, { key: button.keyBind })
        expect(mockDispatch).toHaveBeenCalledWith({ type: button.action })
      })
    })

    it('does not call dispatch for non-mapped keys', () => {
      renderWithContext()
      
      fireEvent.keyDown(window, { key: 'NotAMappedKey' })
      expect(mockDispatch).not.toHaveBeenCalled()
    })

    it('removes event listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
      
      const { unmount } = renderWithContext()
      unmount()
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      )
    })
  })
})