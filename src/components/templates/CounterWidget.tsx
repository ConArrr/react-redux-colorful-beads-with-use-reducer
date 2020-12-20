import React, { FC } from 'react'
import CounterBoard, {
  CounterBoardProps,
} from 'components/organisms/CounterBoard'
import ColorfulBeads from 'components/molecules/ColorfulBeads'

const CounterWidget: FC<Required<CounterBoardProps>> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => (
  <>
    <CounterBoard {...{ count, add, decrement, increment }} />
    <ColorfulBeads count={count} />
  </>
)

export default CounterWidget
