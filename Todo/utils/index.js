const isUsefulArray = function (_arr) {
  return _arr.every(
    (el) => el.hasOwnProperty('text') && el.hasOwnProperty('isCompleted')
  );
};

export const isValidate = function (arr) {
  return arr && Array.isArray(arr) && isUsefulArray(arr);
};

export const isInstance = function ({ _this, instanceName }) {
  if (!(_this instanceof instanceName)) throw new Error('생성자를 붙여주세요.');
};

export const getElement = function (name) {
  return document.querySelector(name);
};

export const getKeyAndValidation = function ({ e, name }) {
  const keyValue = e.target.parentElement.getAttribute('key');
  const isTarget = e.target.className === name;
  const isValidate = keyValue && isTarget;
  return {
    keyValue,
    isValidate,
  };
};

export const getStorageData = function ({ name }) {
  try {
    const data = localStorage.getItem(name);
    return JSON.parse(data) || [];
  } catch (e) {
    alert(`데이터 불러오기 에러 발생으로 데이터 초기화 : ${e}`);
    return [];
  }
};

export const setStorageData = function ({ name, data }) {
  if (isValidate(data)) {
    localStorage.setItem(name, JSON.stringify(data));
  } else {
    throw new Error('유효하지 않은 데이터 입니다.');
  }
};
export const addListener = function ({ target, func, type }) {
  target.addEventListener(type, (e) => {
    e.preventDefault();
    func(e);
  });
};
