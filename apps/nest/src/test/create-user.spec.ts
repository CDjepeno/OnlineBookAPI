import { regexPhone } from '../utils/utils';

describe('Feature: Create user', () => {
  let fixture: Fixture;

  beforeEach(() => {
    fixture = createFixture();
  });

  describe('Rule: user number', () => {
    test('User can have number valid', () => {
      fixture.userNumber({
        phone: '+33624552440',
      });
    });
  });
});

let number = { phone: '+33725523440' };

const createFixture = () => {
  return {
    userNumber(createUser: { phone: string }) {
      expect(regexPhone.test(createUser.phone.toString())).toEqual(
        regexPhone.test(number.phone.toString()),
      );
    },
  };
};

export type Fixture = ReturnType<typeof createFixture>;
