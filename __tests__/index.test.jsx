
import { render, screen } from '@testing-library/react'
import Intro from '../components/intro'
import '@testing-library/jest-dom'

describe('Head', () => {
  it('renders a heading', () => {
    render(<Intro />)

    const heading = screen.getByRole('heading', {level: 1})
    expect(heading).toBeInTheDocument()
  })
})

