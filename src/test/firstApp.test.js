//pruebas por fesault con create-react-app
import React from "react";
import { shallow } from "enzyme";
// import { render } from "@testing-library/react"
import FirstApp from "../firstApp";

describe("pruebas en firstapp", () => {
  // test('debe de mostrar el mensaje "hola soy samuel"', () => {
  //     const saludo = 'hola soy samuel'
  //      producto renderizado
  //     const {getByText} = render( <FirstApp saludo ={saludo}/> )
  //      wrapper.getByText(/hola soy samuel/i)
  //     evaluacion del saludo en el DOM
  //     expect(getByText(saludo)).toBeInTheDocument()
  // })
  //pruebas con enzyme
  test("debe de mostrar <Firstapp /> correactamente", () => {
    //shallow es una funcion que permite renderizar un componente sin necesidad de renderizar todos sus componentes hijos
    const saludo = "hola soy samuel";
    const wrapper = shallow(<FirstApp saludo={saludo} />);
    //mostrar el componente en el DOM
    expect(wrapper).toMatchSnapshot();
    //convertir el componente en una cadena de texto con toJSON-ensyme
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "hola soy samuel";
    const subtitulo = "soy subtitulo";
    const wrapper = shallow(
                <FirstApp 
                    saludo={saludo} 
                    subtitulo={subtitulo}
                />);
        //wrapper toda la informacion del estro renderizado
        //muy parecido a queryselector
    const textoParrafo = wrapper.find('h1').text();
        // console.log(textoParrafo);
    expect(textoParrafo).toBe(subtitulo);

  });
});
