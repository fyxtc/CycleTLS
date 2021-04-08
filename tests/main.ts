
// const initCycleTLS = require('./src/index');
import initCycleTLS from '../dist/index.js'
// Typescript: import initCycleTLS from 'cycletls';

(async () => {
  const cycleTLS = await initCycleTLS();
  for (let i = 0; i < 10; i++) {
    const response = cycleTLS('http://localhost:8080', {
      body: '',
      ja3: '771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-21,29-23-24,0',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',

    });

    response.then((out) => console.log(out))

  }
 
})();