import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Missions from '../../router/Missions';

it('renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
