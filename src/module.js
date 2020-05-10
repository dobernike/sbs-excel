console.log('module');

async function start() {
  return await Promise.resolve('async work');
}

start().then(console.log);
