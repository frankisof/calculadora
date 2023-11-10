import { tangente } from "./tangente"

describe('division unit tests', () => {
    
    xit('Should divide 2 / 2 = 1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = tangente(2, 2);

        // Assert
        expect(result).toBe(1);
    })

    xit('Should divide 9 / 2 = 4.5', () => {
        // Arrange
        let result = 0;
        // Act
        result = tangente(9, 2);
        // Assert
        expect(result).toBe(4.5);
    })

    xit('Should divide 3.0 / 0.5 = 6.0', () => {
        // Arrange
        let result = 0;
        // Act
        result = tangente(3.0, 0.5);
        // Assert
        expect(result).toBe(6.0);
    })

    xit(' Should divide 0 / 1 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = tangente(0, 1);
        // Assert
        expect(result).toBe(0);
    })

})