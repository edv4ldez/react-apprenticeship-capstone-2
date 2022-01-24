import ImageCard from "../../../components/ImageCard/ImageCard.component";
import { render, screen, fireEvent } from '@testing-library/react';
import AppContext from '../../../context/AppContext.context';

describe('Testing ImageCard.component', () => {

  const context = {
    date: '2022-01-23',
    setDate: function(){},
    data: {
      title: 'Saturno',
      explanation: 'Si lo intentas y fallas, Felicitaciones!. La mayoria ni siquiera lo intenta',
      url: 'https://t1.ev.ltmcdn.com/es/posts/6/7/6/cuantos_planetas_hay_en_el_sistema_solar_universo_y_via_lactea_1676_600.jpg'
    }
  };

  test('', () => {
    render(
      <AppContext.Provider value={context}>
        <ImageCard/>
      </AppContext.Provider>
    );
    const content = screen.getByRole('image-content');    
    console.log(screen.findAllByText('Saturno'));
    
  });

});
