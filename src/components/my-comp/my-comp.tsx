import { Component, h } from '@stencil/core';


@Component({
    tag: 'my-comp',
    styleUrl: 'my-comp.css'
})
export class MyComp {

    

    render() {
        return (
            <div>
                <p>Hello MyComp!</p>
            </div>
        );
    }
}
