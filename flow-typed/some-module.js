/* @flow */

declare module 'some-module' {
    // Error here `Cannot resolve module immutable`
    import type { List } from 'immutable';

    declare export var someList: List<number>;
}