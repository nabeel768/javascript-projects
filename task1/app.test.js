const { mergeLists, removeDuplicates, sortList } = require('./app');

describe('App', () => {
  describe('mergeLists function', () => {
    it('should fail if no parameters provided', () => {
      expect(() => {
        mergeLists();
      }).toThrow('Error: no parameters provided');
    });

    it('should fail if only 1 parameter provided', () => {
      const array1 = [1, 2, 3, 5, 6];
      expect(() => {
        mergeLists(array1);
      }).toThrow('Error: Second parameter not provided');
    });

    it('should accept 2 arrays and return a merged array', () => {
      const array1 = [1, 2, 3, 5, 6];
      const array2 = [2, 3, 4, 5, 7];
      const expectedResponse=[1, 2, 3, 5, 6, 2,3,4,5,7];
      
      expect(mergeLists(array1, array2)).toEqual(expectedResponse);
    });
  });

  describe('removeDuplicates function',()=>{
    it('should remove all duplicate values in the array passed in',()=>{

      list=[1, 2, 2, 3, 3, 4, 5, 6, 7, 7];
      const expectedResponse=[1, 2, 3, 4, 5, 6, 7]

      expect(removeDuplicates(list)).toEqual(expectedResponse);
    })
  })

  describe('sortList function',()=>{
    it('should sort the list passed in, in asscending order',()=>{
      list=[2, 1, 3, 4, 7, 6, 5];
      const expectedResponse=[1, 2, 3, 4,5, 6, 7]

      expect(sortList(list)).toEqual(expectedResponse)
    })
  })
});
