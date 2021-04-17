import React from 'react'

import reducer from '../../../redux/reducers/game'

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      playerName: '',
      cards: [],
      rounds: 0,
      selectDisabled: false,
    })
  })

  it('should handle game/new', () => {
    expect(reducer({}, { type: 'game/new', payload: { playerName: 'Daniel' } })).toEqual({
      playerName: 'Daniel',
      cards: [],
      rounds: 0,
      selectDisabled: false,
    })
  })

  it('should handle game/setCards', () => {
    const initialState = { cards: [] }
    const payload = [{ id: 1, name: 'fish' }]
    expect(reducer(initialState, { type: 'game/setCards', payload })).toEqual({
      cards: payload,
    })
  })

  it('should handle game/incrementRound', () => {
    const initialState = { rounds: 0 }
    expect(reducer(initialState, { type: 'game/incrementRound' })).toEqual({
      rounds: 1,
    })
  })

  it('should handle game/disableSelection', () => {
    const initialState = { selectDisabled: false }
    expect(reducer(initialState, { type: 'game/disableSelection' })).toEqual({
      selectDisabled: true,
    })
  })

  it('should handle game/enableSelection', () => {
    const initialState = { selectDisabled: true }
    expect(reducer(initialState, { type: 'game/enableSelection' })).toEqual({
      selectDisabled: false,
    })
  })

  describe('should handle game/selectCard', () => {
    it('with selectDisabled: false', () => {
      const initialState = {
        selectDisabled: false,
        cards: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ]
      }
      const payload = { id: 2 }
      expect(reducer(initialState, { type: 'game/selectCard', payload })).toEqual({
        cards: [
          { id: 1 },
          { id: 2, selected: true },
          { id: 3 },
        ],
        selectDisabled: false,
      })
    })

    it('with selectDisabled: true', () => {
      const initialState = {
        selectDisabled: true,
        cards: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ]
      }
      const payload = { id: 2 }
      expect(reducer(initialState, { type: 'game/selectCard', payload })).toEqual({
        cards: [
          { id: 1 },
          { id: 2, },
          { id: 3 },
        ],
        selectDisabled: true,
      })
    })
  })

  it('should handle game/matchCards', () => {
    const initialState = {
      cards: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ]
    }
    const payload = [{ id: 2 }, { id: 4 }]
    expect(reducer(initialState, { type: 'game/matchCards', payload })).toEqual({
      cards: [
        { id: 1 },
        { id: 2, match: true, selected: false },
        { id: 3 },
        { id: 4, match: true, selected: false },
      ],
    })
  })

  it('should handle game/removeCardsSelection', () => {
    const initialState = {
      cards: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ]
    }
    const payload = [{ id: 2 }, { id: 4 }]
    expect(reducer(initialState, { type: 'game/removeCardsSelection', payload })).toEqual({
      cards: [
        { id: 1 },
        { id: 2, selected: false },
        { id: 3 },
        { id: 4, selected: false },
      ],
    })
  })
})