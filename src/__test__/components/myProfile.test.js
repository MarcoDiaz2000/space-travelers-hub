import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import MyProfile from '../../components/myprofile/MyProfile';

it('renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
