import { getImagen } from "../../base/11-async-await"

describe('pruebas asincronas de fetch en una api', () => {
    //realizar pruebas asincronas
    test('debe retornar el url del GIF aleatorio', async() => {
        //esta funcion debe retornar una promesa
        const url = await getImagen();
        // console.log(url);
        expect(url.includes('https://')).toBe(true);

    })
    
})
