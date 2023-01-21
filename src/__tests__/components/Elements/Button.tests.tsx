import { Button } from '@/components/Elements/Button'
import { render } from '@testing-library/react'

describe('Button', () => {
  it('renders without any problems', () => {
    const { getByTestId } = render(<Button />)
    const received = getByTestId('Button')
    expect(received).toBeInTheDocument()
  })
})
