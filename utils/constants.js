const STATUS_CREATED = 201;
const STATUS_BAD_REQUEST = 400;
const STATUS_UNAUTHORIZED = 400;
const STATUS_FORBIDDEN = 403;
const STATUS_NOT_FOUND = 404;
const STATUS_CONFLICT = 409;

const ERR_CODE_UNIQ = 11000;

const MESSAGE_SUCCESS = 'Фильм удалён';
const ERR_MESSAGE_DATA = 'Переданы некорректные данные';
const ERR_MESSAGE_MOVIE_NOT_FOUND = 'Фильм с указанным id не найден';
const ERR_MESSAGE_FORBIDDEN = 'Невозможно удалить фильм, созданный другим пользователем';
const ERR_MESSAGE_DUBLICATE_EMAIL = 'Пользователь с таким e-mail уже зарегистрирован';
const ERR_MESSAGE_USER_NOT_FOUND = 'Пользователь с указанным id не найден';
const ERR_MESSAGE_AUTHORIZATION = 'Необходимо авторизация';
const ERR_MESSAGE_SERVER_ERROR = 'На сервере произошла ошибка';
const ERR_MESSAGE_URL = 'Некорректная ссылка';
const ERR_MESSAGE_EMAIL = 'Некорректная почта';
const ERR_MESSAGE_NONEXISTING_URL = 'Такой ссылки не существует';

module.exports = {
  STATUS_CREATED,
  STATUS_BAD_REQUEST,
  STATUS_UNAUTHORIZED,
  STATUS_FORBIDDEN,
  STATUS_NOT_FOUND,
  STATUS_CONFLICT,
  ERR_CODE_UNIQ,
  MESSAGE_SUCCESS,
  ERR_MESSAGE_DATA,
  ERR_MESSAGE_MOVIE_NOT_FOUND,
  ERR_MESSAGE_FORBIDDEN,
  ERR_MESSAGE_DUBLICATE_EMAIL,
  ERR_MESSAGE_USER_NOT_FOUND,
  ERR_MESSAGE_AUTHORIZATION,
  ERR_MESSAGE_SERVER_ERROR,
  ERR_MESSAGE_URL,
  ERR_MESSAGE_EMAIL,
  ERR_MESSAGE_NONEXISTING_URL,
};