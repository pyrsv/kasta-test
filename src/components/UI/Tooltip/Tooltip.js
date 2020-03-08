import React from 'react';
import ReactTooltip from 'react-tooltip';

import './Tooltip.scss'

const Tooltip = props => {
  return (
    <div className='TooltipWrapper'>
      <span
        className={'TooltipGlyph'}
        data-tip
        data-for={props.name + 'tooltip'}
      >
        ?
      </span>
      <ReactTooltip place='top'
                    id={props.name + 'tooltip'}
                    className={'Tooltip'}
                    type={'light'}
                    effect={'solid'}
                    overridePosition={({left, top}) => {
                      return {
                        left,
                        top: top + 5
                      }
                    }}
      >
          <span>
            {props.tip}
          </span>
      </ReactTooltip>
    </div>


  )
};

export default Tooltip