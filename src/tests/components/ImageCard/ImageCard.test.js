import ImageCard from "../../../components/ImageCard/ImageCard.component";
import { render, screen, fireEvent } from '@testing-library/react';
import AppContext from '../../../context/AppContext.context';

describe('Testing ImageCard.component', () => {

  const context = {
    setDate: function(){},
    dateValue: '2022-01-23',
    image : {
      data: {
        title: 'Saturno',
        explanation: 'Si lo intentas y fallas, Felicitaciones!. La mayoria ni siquiera lo intenta',
        url: 'https://t1.ev.ltmcdn.com/es/posts/6/7/6/cuantos_planetas_hay_en_el_sistema_solar_universo_y_via_lactea_1676_600.jpg'
      },
      error: null
    }
  };

  const contextError = {
    setDate: function(){},
    dateValue: '2022-01-23',
    image : {
      data: {},
      error: 'There was an error, please try again'
    }
  };

  test('should return the image data', () => {
    render(
      <AppContext.Provider value={context}>
        <ImageCard/>
      </AppContext.Provider>
    );
    const image = screen.getByRole('image-picture');    
    expect(image.src).toBe('https://t1.ev.ltmcdn.com/es/posts/6/7/6/cuantos_planetas_hay_en_el_sistema_solar_universo_y_via_lactea_1676_600.jpg');
  });

  test('should show image of cat working', () => {
    render(
      <AppContext.Provider value={contextError}>
        <ImageCard/>
      </AppContext.Provider>
    );
    const image = screen.getByRole('image-picture');    
    expect(image.src).toBe('http://localhost/assets/error.gif');
  });

});
