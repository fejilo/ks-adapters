import Data from '../../adapters/Data/Data.js';

(async () => {
  try {
    const dataAdapter = new Data('mock');
    const response = await dataAdapter.fetch(
      'userAuth',
      { username: 'user@kizansolutions.com', password: '123456' },
      process.env.APP_JWT
    );
    console.log(JSON.stringify(response, null, 2));
  } catch (err) {
    console.log(err);
  }
})();
