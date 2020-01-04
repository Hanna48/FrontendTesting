import add from '../add';

describe('Testing in add function', ()=> {
    it('Test case : 10 + 10 = 20', ()=> {
        if (add(10, 10) !== 20) {
            throw new Error("Test fail of add!");
        }
    });
});