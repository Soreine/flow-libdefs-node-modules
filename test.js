/* @flow */
import { List } from 'immutable';
import { someList } from 'some-module';

// There should be an error here, but someList is typed as `any`
const wrong: string = someList;
