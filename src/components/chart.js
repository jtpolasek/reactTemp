import React from 'react';
import { Sparklines, SparklinesLine} from 'react-sparklines'

export default (props) =>{
  <div>
    <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
      <SparklinesLine color={props.color} />
    </Sparklines>
  </div>
}
