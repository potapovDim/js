import * as React from "react";
import { Name } from './Name'
import { AddName } from './AddName'
import { style } from 'typestyle';


export interface HelloProps {
    names: string[];
    addName?: (name: string) => any;
    removeName?: (name: string) => any;
    sortNames?: () => any;
};

export class Names extends React.Component<any, any> {
    render() {
        const buttonStyle = style({
            color: 'red', [`&:active`]: {
                borderLeft: '10px solid red',
                borderRight: '10px solid red',
                color: 'green'
            }
        });
        const { names, addName, removeName, sortNames } = this.props;
        return (
            <div className={style({ display: 'flex' })}>
                <div className={style({ flex: 1 })}>
                    <h1 >Names list, names count is {names.length}</h1>
                    <AddName addName={addName} />
                </div>
                <div className={style({ flex: 1 })}>
                    <div className={style({ marginTop: 80 })}></div>
                    {names.length > 0 && <div>Names list <button className={buttonStyle} onClick={sortNames}>Sort Names</button></div>}
                    {names.length > 0 && names.map((name: string, index: number) => {
                        return <Name key={index} name={name} removeName={removeName} />
                    })}
                </div>
            </div>
        );
    };
};
