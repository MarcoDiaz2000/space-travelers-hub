import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../../router/Rockets';
import store from '../../redux/store';

it('renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
