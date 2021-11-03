//archivo usado para configurar los test, agregar tobeincluded y tobeexcluded
// import '@testing-library/jest-dom/extend-expect'
//trabjasr enzime
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
//configuracion de snapshot para los test
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
//configurar enzyme
Enzyme.configure({ adapter: new Adapter() });