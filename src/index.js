let cache;

function defineGet(o, p, getter) {
  Object.defineProperty(o, p, {
    get: getter
  });
}

function chain() {
  return cache;
}

defineGet(chain, 'required', () => {
  cache.required = true;
  return chain;
});

chain.type = function _type(type) {
  cache.type.push(type);
  return chain;
};

chain.default = function _default(value) {
  cache.default = value;
  return chain;
};

chain.validator = function _validator(validator) {
  cache.validator = validator;
  return chain;
};

export default function propHelper() {
  return cache;
}

propHelper.type = function _type(type) {
  cache = {type: [type]};
  return chain;
};

[String, Number, Boolean, Function, Object, Array, Symbol].forEach(func => {
  const name = func.name.toLowerCase();
  defineGet(propHelper, name, () => {
    cache = {type: [func]};
    return chain;
  });
  defineGet(chain, name, () => {
    cache.type.push(func);
    return chain;
  });
});
