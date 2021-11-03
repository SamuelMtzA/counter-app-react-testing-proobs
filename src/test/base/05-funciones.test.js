import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('pruebas de 05-funciones', () => {
    test('getuser debe de retonar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        console.log(user);
        //no se puede comparar directamente el objeto user con el objeto userTest
        // expect(user).toBe(userTest);
        //comparar si tiene las mismas priedades
        expect(user).toEqual(userTest);
        
    })
    test('getusuario activo debe retornar un objeto', () => {
        const nombre = 'El_Papi1502';
        const userTest = (nombre) => ({
            uid: 'ABC567',
            username: nombre
        })
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest(nombre));

        
    })
    
    
    
})
