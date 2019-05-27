export async function callApi(method: string, url: string, data?: any) {
  console.log('callApi', method, url, JSON.stringify(data) || '');

  return new Promise(resolve => {
    setTimeout(() => resolve({}), 1000);
  });
}
