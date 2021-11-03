

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'BYLmd0xsaH5O7qWI7QyE5WY3N6u7PHNu';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );
        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No existe';
    }
    
    
    
}

 getImagen();



