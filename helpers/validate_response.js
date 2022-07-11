const validateListResponse = async (
  array = [],
  messageTrue = "",
  messageFalse = "",
  data = any,
  res = response
) => {
  if (array.length) {
    res.json({ success: true, data: data, message: messageTrue });
  } else {
    res.json({ success: false, data: [], message: messageFalse });
  }
};

const validateModelResponse = async (
  model = any,
  messageTrue = "",
  messageFalse = "",
  data = any,
  res = response
) => {
  if (model) {
    res.json({ success: true, data: data, message: messageTrue });
  } else {
    res.json({ success: false, data: {}, message: messageFalse });
  }
};

module.exports = {
  validateListResponse,
  validateModelResponse,
};
