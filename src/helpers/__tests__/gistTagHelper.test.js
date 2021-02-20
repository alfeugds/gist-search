import getFileTypeTags from '../gistTagHelper';

describe('gistTagHelper unit tests', () => {
  describe('getFileTypeTags', () => {
    it('returns 2 tags for 3 files', () => {
      //arrange
      const files = {
        "CurrencyConverter.cs": {
          "filename": "CurrencyConverter.cs",
          "type": "text/plain",
          "language": "C#",
          "raw_url": "https://gist.githubusercontent.com/alfeugds/786260ab70a49565070338052ceaee3e/raw/3b89455127dacf3aea4c63b7012e8dd2e4d0fa71/CurrencyConverter.cs",
          "size": 1181
        },
        "SomeView.xaml": {
          "filename": "SomeView.xaml",
          "type": "application/xaml+xml",
          "language": "XML",
          "raw_url": "https://gist.githubusercontent.com/alfeugds/786260ab70a49565070338052ceaee3e/raw/8a7d0c52bd69b6a778d5e9d1f91a0ecd68f16882/SomeView.xaml",
          "size": 784
        },
        "SomeViewModel.cs": {
          "filename": "SomeViewModel.cs",
          "type": "text/plain",
          "language": "C#",
          "raw_url": "https://gist.githubusercontent.com/alfeugds/786260ab70a49565070338052ceaee3e/raw/f4a08d80d9e41a2a54cec14dd9ffd5c2160f6e0e/SomeViewModel.cs",
          "size": 317
        }
      }

      const expectedTags = ['C#', 'XML']
      //act
      const tags = getFileTypeTags(files)
      //assert
      expect(tags).toEqual(expectedTags)
    })
    it('returns no tags for 0 files', () => {
      //arrange
      const files = {
      }

      const expectedTags = []
      //act
      const tags = getFileTypeTags(files)
      //assert
      expect(tags).toEqual(expectedTags)
    })
    it('returns no tags for null files', () => {
      //arrange
      const files = null
      const expectedTags = []
      //act
      const tags = getFileTypeTags(files)
      //assert
      expect(tags).toEqual(expectedTags)
    })
    it('returns no tags for null languages', () => {
      //arrange
      const files = {
        test: {
          language: null
        }
      }
      const expectedTags = []
      //act
      const tags = getFileTypeTags(files)
      //assert
      expect(tags).toEqual(expectedTags)
    })
  })
})
