import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en funciones en un json', () => {
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    })
    //si no es un id valido debe de retornar undefined
    
    test('si id heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })
    
    test('debe de retonar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroeOwner = getHeroesByOwner(owner);

        const heroeOwnerTest = heroes.filter(heroe => heroe.owner === owner);
        //propiedades iguales
        expect(heroeOwner).toEqual(heroeOwnerTest);

        // expect(heroeOwner.length).toBe(2);

        // expect(heroe).toBe(undefined);
    })
    
    test('debe de retonarnun arreglo con los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroeOwner = getHeroesByOwner(owner);

        expect(heroeOwner.length).toBe(2);
    })
})
