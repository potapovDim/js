import * as React from "react";
import { Name } from './Name'
import { AddName } from './AddName'

export interface HelloProps {
    names: string[];
    addName?: (name: string) => void;
    removeName?: (name: string) => void;
};

export class Names extends React.Component<any, any> {
    sort = () => {
        const { names } = this.props;
    };
    render() {
        const { names, addName, removeName, sortNames } = this.props;
        return (
            <div>
                <h1>Names list </h1>
                <button onClick={sortNames}>Sort Names</button>
                <AddName addName={addName} />
                {names.length > 0 && names.map((name: string, index: number) => {
                    return <Name key={index} name={name} removeName={removeName} />
                })}
            </div>
        );
    };
};
