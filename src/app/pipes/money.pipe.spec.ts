import { MoneyPipe } from './money.pipe';

describe('MoneyPipe', () => {
  let moneyPipe: MoneyPipe;

  beforeEach(() => {
    moneyPipe = new MoneyPipe();
  });

  it('Must multiply input by 60', () => {
   
    expect(moneyPipe.transform(9)).toEqual(9 * 60);
  });

 
  // my transform method returns a Number
  it('Must return a number', () => {
    const result = moneyPipe.transform(10);
    expect(typeof result).toEqual('number');
  });
});
