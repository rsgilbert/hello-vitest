import { expect, test } from 'vitest'
import { sayWelcome } from '../welcome'

test('says welcome well', () => {
    expect(sayWelcome()).toContain('welcome')
})