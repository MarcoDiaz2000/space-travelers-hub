import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import RocketsReserved from '../../components/RocketsReserved';

it('renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <RocketsReserved />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
