import moment from 'moment';

export const handler = () => {
  console.log('TEST--------------------->', moment());
  return {
    statusCode: 200,
    body: 'done',
  };
};
