import GetAge from '../age';

describe('Testing in GetAge function', ()=> {
    it('Test case : Hanna\'s year of birth is 1997, now her age is 23.', ()=> {
        if (GetAge(1997) !== 23) {
            throw new Error("Test fail of GetAge!");
        }
    });
});