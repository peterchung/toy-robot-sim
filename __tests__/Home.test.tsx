import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock all child components to simplify testing
jest.mock('../app/components/Instructions', () => ({
  Instructions: () => <div>Instructions</div>,
}));

jest.mock('@/app/components/SimBoard', () => ({
  SimBoard: () => <div>SimBoard</div>,
}));

jest.mock('@/app/components/CommandButtons', () => ({
  CommandButtons: () => (
    <div>
      <button>Left</button>
      <button>Move</button>
      <button>Right</button>
    </div>
  ),
}));

jest.mock('@/app/components/ReportButton', () => ({
  ReportButton: () => <button>Report</button>,
}));

jest.mock('@/app/boardContext/BoardContext', () => ({
  BoardProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="board-provider">{children}</div>
  ),
}));

describe('Home Component', () => {
  test('renders all simulator components', () => {
    render(<Home />);

    // Check if BoardProvider is rendered
    expect(screen.getByTestId('board-provider')).toBeInTheDocument();

    // Check if all components are rendered
    expect(screen.getByText('Instructions')).toBeInTheDocument();
    expect(screen.getByText('SimBoard')).toBeInTheDocument();
    expect(screen.getByText('Left')).toBeInTheDocument();
    expect(screen.getByText('Move')).toBeInTheDocument();
    expect(screen.getByText('Right')).toBeInTheDocument();
    expect(screen.getByText('Report')).toBeInTheDocument();
  });
});

/**
 * Verify all components render correctly (above tests currently do not work. Issue running Jest on next.js v15 which is currently in RC)
 * Test buttons Left/Right/Move dispatch correct actions
 * Test key bindings ArrowLeft/ArrowUp/ArrowRight dispatch correct actions
 * Test if Report drawer closes properly on 'Close' button click and clicking outside the drawer
 * Test if context provides correct state and dispatch function
 * Test robot rotates/changes directions correctly based on the button clicked or action dispatched
 * Test robot stays within the board boundaries
 * Test if total move count increments only when position changes
 * Test that total move count does not increment if robot cannot move (e.g. at grid boundary)
 * Test if the report matches the current state and the actual position and direction of the robot on the screen
 */
