import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('http://localhost:3333/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content));
    }).catch(() => {

    })
  }
};