import * as React from 'react';
import { style } from 'typestyle';

export const Box = ({ component }: any) => <div className={style({ background: component, width: 10, height: 10 })}></div>