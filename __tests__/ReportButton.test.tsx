import { render, screen } from '@testing-library/react'
import { ReportButton } from '@/app/components/ReportButton'
import { BoardContext } from '@/app/boardContext/BoardContext'
import '@testing-library/jest-dom'

// Mock the drawer components
jest.mock("../shadcn/ui/drawer", () => ({
  Drawer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DrawerTrigger: ({ children }: { children: React.ReactNode }) => <div data-testid="drawer-trigger">{children}</div>,
  DrawerContent: ({ children }: { children: React.ReactNode }) => <div data-testid="drawer-content">{children}</div>,
  DrawerHeader: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DrawerTitle: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DrawerDescription: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DrawerFooter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DrawerClose: ({ children }: { children: React.ReactNode }) => <div data-testid="drawer-close">{children}</div>,
}))

describe('ReportButton', () => {
  // Test states for different scenarios
  const defaultState = {
    boardSize: 5,
    position: { x: 2, y: 3 },
    direction: 0,
    totalMoves: 5
  }

  const northState = { ...defaultState, direction: 0 }
  const eastState = { ...defaultState, direction: 90 }
  const southState = { ...defaultState, direction: 180 }
  const westState = { ...defaultState, direction: 270 }

  const renderWithContext = (state = defaultState) => {
    return render(
      <BoardContext.Provider value={{ state, dispatch: jest.fn() }}>
        <ReportButton />
      </BoardContext.Provider>
    )
  }

  describe('Button Rendering', () => {
    it('renders the Report button', () => {
      renderWithContext()
      const button = screen.getByText('Report')
      expect(button).toBeInTheDocument()
    })
  })

  describe('Direction Reporting', () => {
    it('displays North when direction is 0', () => {
      renderWithContext(northState)
      expect(screen.getByText('Current direction: North')).toBeInTheDocument()
    })

    it('displays East when direction is 90', () => {
      renderWithContext(eastState)
      expect(screen.getByText('Current direction: East')).toBeInTheDocument()
    })

    it('displays South when direction is 180', () => {
      renderWithContext(southState)
      expect(screen.getByText('Current direction: South')).toBeInTheDocument()
    })

    it('displays West when direction is 270', () => {
      renderWithContext(westState)
      expect(screen.getByText('Current direction: West')).toBeInTheDocument()
    })
  })

  describe('Position Reporting', () => {
    it('displays correct position coordinates', () => {
      const customState = {
        ...defaultState,
        position: { x: 4, y: 1 }
      }
      renderWithContext(customState)
      expect(screen.getByText('Current position: [4, 1]')).toBeInTheDocument()
    })

    it('updates position display when position changes', () => {
      const newState = {
        ...defaultState,
        position: { x: 0, y: 0 }
      }
      const { rerender } = renderWithContext(defaultState)
      
      // Rerender with new position
      rerender(
        <BoardContext.Provider value={{ state: newState, dispatch: jest.fn() }}>
          <ReportButton />
        </BoardContext.Provider>
      )
      
      expect(screen.getByText('Current position: [0, 0]')).toBeInTheDocument()
    })
  })

  describe('Move Count Reporting', () => {
    it('displays correct totalMove count', () => {
      const customState = {
        ...defaultState,
        totalMoves: 10
      }
      renderWithContext(customState)
      expect(screen.getByText('Total move count: 10')).toBeInTheDocument()
    })

    it('updates move count display when totalMoves changes', () => {
      const newState = {
        ...defaultState,
        totalMoves: 15
      }
      const { rerender } = renderWithContext(defaultState)
      
      // Rerender with new move count
      rerender(
        <BoardContext.Provider value={{ state: newState, dispatch: jest.fn() }}>
          <ReportButton />
        </BoardContext.Provider>
      )
      
      expect(screen.getByText('Total move count: 15')).toBeInTheDocument()
    })
  })

  describe('State Synchronization', () => {
    it('updates all values when state changes', () => {
      const newState = {
        ...defaultState,
        position: { x: 1, y: 1 },
        direction: 180,
        totalMoves: 3
      }
      const { rerender } = renderWithContext(defaultState)
      
      rerender(
        <BoardContext.Provider value={{ state: newState, dispatch: jest.fn() }}>
          <ReportButton />
        </BoardContext.Provider>
      )
      
      expect(screen.getByText('Current direction: South')).toBeInTheDocument()
      expect(screen.getByText('Current position: [1, 1]')).toBeInTheDocument()
      expect(screen.getByText('Total move count: 3')).toBeInTheDocument()
    })
  })
})