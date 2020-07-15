import { Component, Prop, h } from '@stencil/core';
import cx from 'classnames';

@Component({
    tag: 'help-text',
    styleUrl: 'help-text.scss',
    shadow: true
})

export class HelpText {

    @Prop() size: string;
    @Prop() text: string;

    render() {
        const helpTextClasses = cx({
            'help-text': true,
            'help-text--small': this.size === 'small'
        })

        return (
            <p class={helpTextClasses}>
                {this.text}
                <slot name="link" />
            </p>
        )
    }

}