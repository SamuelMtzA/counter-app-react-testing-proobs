import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('pruebas en 02-template', () => {

    test('getSaludo debe de retornar hola algo!', () => {
        const nombre = 'Samy';
        const saludo = getSaludo(nombre)
        console.log(saludo);

        expect(saludo).toBe('Hola ' + nombre + '!');
        
    })

    //getsaludo debe retornar desconocido si no hay argumento
    
    test('getSaludo debe de retornar desconocido', () => {
        const saludo = getSaludo()
        expect(saludo).toBe('Hola Desconocido!');
        
    })
    
})
