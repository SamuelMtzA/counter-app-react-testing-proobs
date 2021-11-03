//pruebas automatizadas realizadas para que la aplicacion se comporte como nosotros esperamos
import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("pruebas en counter app", () => {
  //esta instruccion es para que el wrapper en cada una de las pruebas se pueda modificar sin que se pierda el estado
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe de mostrar <counterapp /> correctament, hacer match con snap", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar <counterapp /> el valor por defecto de 100", () => {
    const valor = 100;
    const wrapper = shallow(<CounterApp value={valor} />);
    //trim para borrar espacios en blanco
    const counterText = wrapper.find("h2").text().trim();
    // console.log(counterText);
    expect(counterText).toBe("100");
  });

  //simulacion de un evento click
  test("debe de incrementar el valor en 1 con el boton", () => {
    //simular el evento click
    wrapper.find("button").at(0).simulate("click");
    // console.log(btn1);
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("11");
  });

  test("debe de decrementar el valor en 1 con el boton", () => {
    //simular el evento click, se queda almacenado el valor anterior
    wrapper.find("button").at(2).simulate("click");
    // console.log(btn1);
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("9");
  });

  test("debe de colocar el valor por defecto de reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    //realizar el evento para poder simular el reset
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");


    const counterText = wrapper.find("h2").text().trim();
    // console.log(counterText);
    expect(counterText).toBe("105");

  })
});
