import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

//making chart component as functional component
export default (props) => {
  return(
    <div>
      <Sparklines height = {100}  width = {180} data = { props.data }>
        <SparklinesLine color = { props.color } />
        <SparklinesReferenceLine type = "avg" />
      </Sparklines>
      <div>
        {average(props.data)}{props.units}
      </div>
    </div>
  );
}

function average(data){
  return _.round(_.sum(data)/data.length);
}
