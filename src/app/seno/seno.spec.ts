import { seno } from "./seno"

describe('sqr unit tests', () => {
    
    xit('Should compute 2 ^ 2 = 4', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = seno(2);

        // Assert
        expect(result).toBe(4);
    })

    xit('Should compute 3 ^ 2 = 9', () => {
        // Arrange
        let result = 0;
        // Act
        result = seno(3);
        // Assert
        expect(result).toBe(9);
    })

    xit('Should compute 4 ^ 2 = 16', () => {
        // Arrange
        let result = 0;
        // Act
        result = seno(4);
        // Assert
        expect(result).toBe(16);
    })

    xit('Should compute 5 ^ 2 = 25', () => {
        // Arrange
        let result = 0;
        // Act
        result = seno(5);
        // Assert
        expect(result).toBe(25);
    })

   

})