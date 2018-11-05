/* @flow */

declare module 'some-module' {
    // Error here `Cannot resolve module immutable`
    import type { List } from 'immutable';

    declare var someList: List<number>;
}