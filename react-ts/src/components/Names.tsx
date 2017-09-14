import * as React from "react";
import { Name } from './Name'
import { AddName } from './AddName'

export interface HelloProps {
    names: string[];
    addName?: (name: string) => void;
    removeName?: (name: string) => void;
};

export class Names extends React.Component<any, undefined> {
    render() {
        const { names, addName, removeName } = this.props;
        return (
            <div>
                <h1>Names list </h1>
                <AddName addName={addName} />
                {names.length > 0 && names.map((name: string, index: number) => {
                    return <Name key={index} name={name} removeName={removeName} />
                })}
            </div>
        );
    };
};
