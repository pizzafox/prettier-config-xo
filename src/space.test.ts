import test, {ExecutionContext} from 'ava';
import {space as spaceConfig} from './configs/space';
// eslint-disable-next-line import/namespace
import * as space from './space';

test('space', (t: ExecutionContext) => {
	t.is(space, spaceConfig, 'space.ts exports the base config');
});
