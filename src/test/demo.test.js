describe('pruebas en el archivo demo.test', () => {

    test('deben de ser iguales los strings', () => {
        //inicializar variables
        const mensaje = 'hola mundo'
        //estimulo
        const estimulo = `hola mundo`
        //resultado
        expect(mensaje).toBe(estimulo); //comparacion de equidad
    
    })    
    
})


