// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk';
//import reducer from '../../reducers';






describe("Testing actions including thunks",()=>{

  let mockGeolocation;
  let mockDispatch;
  let mockGetState;
  beforeEach(() => {
    mockDispatch = jest.fn();
    mockGetState = jest.fn();
    mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };

    (global as any).navigator.geolocation = mockGeolocation;
  });


  test('actions test', (/*done*/) => {

      expect(1234).toBe(1234)

  });

})
