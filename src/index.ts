import xs from 'xstream'
import {run} from '@cycle/run'
import {makeDOMDriver, h1} from '@cycle/dom'

const main = () => {
    const sinks = {
        DOM: xs.periodic(1000).map( (i: any) =>
            h1('' + i + ' seconds elapsed')
        )
    }
    return sinks
}

const drivers = {
    DOM: makeDOMDriver('body')
}

run(main, drivers)