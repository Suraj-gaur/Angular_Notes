import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {

  let pipe:GenderPipe;

  beforeEach(() => {
    pipe = new GenderPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "Male" when input is "m"', () => {
    const result:string  = pipe.transform("m");
    expect(result).toBe("Male");
  });

  it('should return "Male" when input is "M" -- uppecase', () => {
    const result:string  = pipe.transform("m");
    expect(result).toBe("Male");
  });

  it('should return "Female" when input is "f"', () => {
    const result:string  = pipe.transform("f");
    expect(result).toBe("Female");
  });

  it('should return empty when input is invalid gender', () => {
    const result:string  = pipe.transform("hello");
    expect(result).toBe("");
  });

});
