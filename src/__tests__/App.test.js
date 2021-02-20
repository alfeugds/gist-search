import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import { Provider } from "react-redux";
import store from '../gistStore'
import getGistsByUser from '../repositories/gistRepository'

jest.mock('../repositories/gistRepository')

const renderApp = () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
}

describe('App Tests', () => {
  describe('app load', () => {

    beforeEach(() => {
      getGistsByUser.mockResolvedValue({
        userFound: true,
        data:[]
      })
    })
    afterEach(() => {
      getGistsByUser.mockReset()
    })

    it('renders search box', () => {
      //arrange
      renderApp()
      //act
      const text = screen.getByLabelText('Enter the username')
      //assert
      expect(text).toBeInTheDocument();
    });

    it('searches for gists for username alfeugds', async () => {

      //arrange
      const username = 'alfeugds'
      getGistsByUser.mockImplementationOnce(() => {
        return {
          userFound: true,
          data: [
          {
            description: 'test1'
          }
        ]}
      })

      renderApp()

      //act
      const searchInput = screen.getByLabelText('Enter the username')
      fireEvent.change(searchInput, { target: { value: username } });
      fireEvent.submit(searchInput)
      const expectedGist = 'test1'
      await waitFor(() => screen.getByText(expectedGist))
      const text = screen.getByText(expectedGist)

      //assert
      expect(text).toBeInTheDocument();
      expect(getGistsByUser).toHaveBeenLastCalledWith(username);
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
      renderApp()

      //act
      const searchInput = screen.getByLabelText('Enter the username')
      fireEvent.change(searchInput, { target: { value: userWithNoGists } });
      fireEvent.submit(searchInput)
      const expectedMessage = `No gists for user ${userWithNoGists}`
      await waitFor(() => screen.getByText(expectedMessage))
      const text = screen.getByText(expectedMessage)

      //assert
      expect(text).toBeInTheDocument();
      expect(getGistsByUser).toHaveBeenLastCalledWith(userWithNoGists);

    })
    it.todo('shows "loading" message')
    it.todo('shows tags/badges for languages in gist')
    it("shows error message when user doesn't exist", async () => {
      //arrange
      getGistsByUser.mockImplementationOnce(() => {
        return {
          userFound: false,
          data: []
        }
      })
      const userThatDoesntExist = 'userThatDoesntExist'
      renderApp()

      //act
      const searchInput = screen.getByLabelText('Enter the username')
      fireEvent.change(searchInput, { target: { value: userThatDoesntExist } });
      fireEvent.submit(searchInput)
      const expectedMessage = `User ${userThatDoesntExist} not found.`
      await waitFor(() => screen.getByText(expectedMessage))
      const text = screen.getByText(expectedMessage)

      //assert
      expect(text).toBeInTheDocument();
      expect(getGistsByUser).toHaveBeenLastCalledWith(userThatDoesntExist);
    })
    describe('gist details', () => {
      it.todo("shows avatar of last three users who forked")
      it.todo("shows link to users who forked")
    })

  })
})
