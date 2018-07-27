import moment from 'moment';

const arrTimeFormated = (time) => time ? time.map(el => moment.unix(el).format('L')) : false;
const timeFromNow = (time) => time ? moment.unix(time).fromNow() : false;
const timeFormated = (time) => moment(time).format('DD-MM-YYYY').split('-').join('/');
const unixTimeFormated = (time) => moment.unix(time).format('LLL');

export {
  arrTimeFormated,
  timeFromNow,
  timeFormated,
  unixTimeFormated
};