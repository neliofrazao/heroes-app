import React from 'react'
import { render, screen } from '@testing-library/react'
import injectRouter from '../../helpers/testHelpers'
import ButtonLink from '../ButtonLink'
import Card from './index'

const BaseRender = () => (
  <Card imgUrl="/image" name="char" link="/link" data-testid="data-card">
    <ButtonLink size="small" color="primary" variant="contained" link="/link" name="char">
      Perfil do personagem
    </ButtonLink>
  </Card>
)

describe('Card()', () => {
  test('should show link with right value ', () => {
    render(injectRouter(<BaseRender />))
    const SUT = screen.getByRole('button').getAttribute('href')

    expect(SUT).toBe('/link')
  })
})
