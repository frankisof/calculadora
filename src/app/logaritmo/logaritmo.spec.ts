import { logaritmo } from "./logaritmo"

describe('logaritmo unit tests', () => {
    xit('should calculate the natural logarithm of 19', () => {
        const result = logaritmo(19,0);
        expect(result).toBe(Math.log(19));
      });
    
      xit('should calculate the natural logarithm of 2', () => {
        const result = logaritmo(2,0);
        expect(result).toBeCloseTo(Math.log(2));
      });
    
      xit('should return NaN for the natural logarithm of -1', () => {
        const result = logaritmo(19,0);
        expect(result).toBeNaN();
      });
    });
   
