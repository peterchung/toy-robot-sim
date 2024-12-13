import { boardReducer } from '@/app/boardContext/boardReducer'
import { actions } from '@/app/boardContext/boardConstants'
import { StateType, ActionsType } from '@/lib/types'

describe('Board Reducer Movement Tests', () => {
  // Test state with robot in middle of board
  const centralState: StateType = {
    boardSize: 5,
    position: { x: 2, y: 2 },
    direction: 0,
    totalMoves: 0
  }

  // Test state with robot at top edge
  const topEdgeState: StateType = {
    ...centralState,
    position: { x: 2, y: 4 }
  }

  // Test state with robot at right edge
  const rightEdgeState: StateType = {
    ...centralState,
    position: { x: 4, y: 2 },
    direction: 90
  }

  // Test state with robot at bottom edge
  const bottomEdgeState: StateType = {
    ...centralState,
    position: { x: 2, y: 0 },
    direction: 180
  }

  // Test state with robot at left edge
  const leftEdgeState: StateType = {
    ...centralState,
    position: { x: 0, y: 2 },
    direction: 270
  }

  describe('Boundary Tests', () => {
    it('should not move beyond top boundary', () => {
      const action: ActionsType = { type: actions.move }
      const newState = boardReducer(topEdgeState, action)
      
      expect(newState.position.y).toBe(4)
      expect(newState.position.x).toBe(topEdgeState.position.x)
    })

    it('should not move beyond right boundary', () => {
      const action: ActionsType = { type: actions.move }
      const newState = boardReducer(rightEdgeState, action)
      
      expect(newState.position.x).toBe(4)
      expect(newState.position.y).toBe(rightEdgeState.position.y)
    })

    it('should not move beyond bottom boundary', () => {
      const action: ActionsType = { type: actions.move }
      const newState = boardReducer(bottomEdgeState, action)
      
      expect(newState.position.y).toBe(0)
      expect(newState.position.x).toBe(bottomEdgeState.position.x)
    })

    it('should not move beyond left boundary', () => {
      const action: ActionsType = { type: actions.move }
      const newState = boardReducer(leftEdgeState, action)
      
      expect(newState.position.x).toBe(0)
      expect(newState.position.y).toBe(leftEdgeState.position.y)
    })
  })

  describe('Move Counter Tests', () => {
    it('should increment total moves when position changes', () => {
      const action: ActionsType = { type: actions.move }
      const initialMoves = centralState.totalMoves
      const newState = boardReducer(centralState, action)
      
      expect(newState.totalMoves).toBe(initialMoves + 1)
    })

    it('should not increment total moves when position cannot change (at boundary)', () => {
      const action: ActionsType = { type: actions.move }
      const initialMoves = topEdgeState.totalMoves
      // move robot North at the top boundary
      const newState = boardReducer(topEdgeState, action)
      
      expect(newState.totalMoves).toBe(initialMoves)
    })

    it('should reset total moves to 0 when robot is placed in new position', () => {
      // First move the robot and increment counter
      const moveAction: ActionsType = { type: actions.move }
      const movedState = boardReducer(centralState, moveAction)
      expect(movedState.totalMoves).toBe(1)

      // Then place the robot in a new position
      const placeAction: ActionsType = { 
        type: actions.place, 
        payload: { x: 3, y: 3 }
      }
      const newState = boardReducer(movedState, placeAction)
      expect(newState.totalMoves).toBe(0)
    })
  })

  describe('Movement Direction Tests', () => {
    it('should move north when direction is 0', () => {
      const northState: StateType = { ...centralState, direction: 0 }
      const action: ActionsType = { type: actions.move }
      const newState = boardReducer(northState, action)
      
      expect(newState.position.y).toBe(northState.position.y + 1)
      expect(newState.position.x).toBe(northState.position.x)
    })

    it('should move east when direction is 90', () => {
      const eastState: StateType = { ...centralState, direction: 90 }
      const action: ActionsType = { type: actions.move }
      const newState = boardReducer(eastState, action)
      
      expect(newState.position.x).toBe(eastState.position.x + 1)
      expect(newState.position.y).toBe(eastState.position.y)
    })

    it('should move south when direction is 180', () => {
      const southState: StateType = { ...centralState, direction: 180 }
      const action: ActionsType = { type: actions.move }
      const newState = boardReducer(southState, action)
      
      expect(newState.position.y).toBe(southState.position.y - 1)
      expect(newState.position.x).toBe(southState.position.x)
    })

    it('should move west when direction is 270', () => {
      const westState: StateType = { ...centralState, direction: 270 }
      const action: ActionsType = { type: actions.move }
      const newState = boardReducer(westState, action)
      
      expect(newState.position.x).toBe(westState.position.x - 1)
      expect(newState.position.y).toBe(westState.position.y)
    })
  })
})