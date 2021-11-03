import { retornaArreglo } from "../../base/07-deses-arr"

describe('pruebas en 07 desestructuracion', () => {
    test('retorna un string y numero', () => {
        const [letras, numeros] = retornaArreglo();

        console.log(typeof(letras));
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')

        console.log(typeof(numeros));
        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')

        // expect(arr).toEqual(['ABC', 123])
    })
    
})
