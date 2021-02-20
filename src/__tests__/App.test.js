import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import { Provider } from "react-redux";
import store from '../gistStore'
import getGistsByUser from '../repositories/gistRepository'

jest.mock('../repositories/gistRepository')

describe('App screen tests', () => {
  describe('app load', () => {

    beforeEach(() => {
      getGistsByUser.mockResolvedValue([])
    })
    afterEach(() => {
      getGistsByUser.mockReset()
    })

    it('renders search box', () => {
      render(<Provider store={store}>
        <App />
      </Provider>);
      const text = screen.getByLabelText('Search Gists from User')
      expect(text).toBeInTheDocument();
    });

    it('searches for gists for username alfeugds', async () => {

      getGistsByUser.mockImplementationOnce(() => {
        return {
          userFound: true,
          data: [
          {
            description: 'test1'
          }
        ]}
      })

      render(<Provider store={store}>
        <App />
      </Provider>);
      const searchInput = screen.getByLabelText('Search Gists from User')
      fireEvent.change(searchInput, { target: { value: 'alfeugds' } });
      fireEvent.submit(searchInput)
      const expectedGist = 'test1'
      await waitFor(() => screen.getByText(expectedGist))
      const text = screen.getByText(expectedGist)
      expect(text).toBeInTheDocument();
      expect(getGistsByUser).toHaveBeenLastCalledWith('alfeugds');
    });

    it('shows "no gists" for user with no gist', async () => {
      //arrange
      getGistsByUser.mockImplementationOnce(() => {
        return {
          userFound: true,
          data: []
        }
      })
      const userWithNoGists = 'userWithNoGists'
      render(<Provider store={store}>
        <App />
      </Provider>);
      const searchInput = screen.getByLabelText('Search Gists from User')

      //act
      fireEvent.change(searchInput, { target: { value: userWithNoGists } });
      fireEvent.submit(searchInput)
      const expectedMessage = `No gists for user ${userWithNoGists}`
      await waitFor(() => screen.getByText(expectedMessage))
      const text = screen.getByText(expectedMessage)
      expect(text).toBeInTheDocument();
      expect(getGistsByUser).toHaveBeenLastCalledWith(userWithNoGists);

    })
    it.todo('shows "loading" message')
    it.todo('shows tags/badges for languages in gist')
    it.todo("shows error message when user doesn't exist")

  })
})
