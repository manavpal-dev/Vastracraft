const getAuthConfig = () => {
  const token = localStorage.getItem("userToken");

  return {
    headers: token
      ? { Authorization: `Bearer ${token}` }
      : {},
  };
};

export default getAuthConfig;
