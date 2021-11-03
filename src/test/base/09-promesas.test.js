import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas a una api lenta', () => {
    test('debe de retornar un heroe asyn', (done) => {
        //done es un callback que se ejecuta cuando termina la promesa 
        //necesitamos usar done para que el test no se quede esperando a que termine la promesa en jest
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })
    })

    test('debe de retornar un error si el heroe no existe', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe('No se pudo encontrar el heroe');
            done();
        })
    })
    
})
